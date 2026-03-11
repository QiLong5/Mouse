using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FighterPatientItem : PatientItem
{
    #region 战士逻辑
    [Header("战斗相关")]
    public SphereCollider mAttackCollider;//敌人检测碰撞体
    public AttackRangeIndicator attackRangeIndicator; // 攻击范围指示器
    private int enemyLayerMask;
    private float attackInterval = 0;
    private bool _isAttacking;

    //扇形攻击区域参数
    private float attackRadius;
    private float attackStartAngle;
    private float attackEndAngle;

    //追踪相关
    private Enemy targetEnemy;//当前追踪的敌人
    private bool isChasing;//是否正在追逐敌人
    public float chaseRange = 10f;//追踪范围

    private bool _isAttack;
    public bool IsAttack
    {
        get => _isAttack;
        set
        {
            if (_isAttack != value)
            {
                _isAttack = value;
                mAnimator.SetBool("isAttack", _isAttack);
            }
        }
    }
    public bool IsAttacking
    {
        get => _isAttacking;
        set
        {
            if (_isAttacking != value)
            {
                _isAttacking = value;
                mAnimator?.SetBool("isAttacking", _isAttacking);
            }
        }
    }
    protected override void Fighter()//战士逻辑
    {
        //初始化战斗相关
        if (mAttackCollider == null)
        {
            mAttackCollider = gameObject.AddComponent<SphereCollider>();
            mAttackCollider.isTrigger = true;
            mAttackCollider.radius = GameDataEditor.instance.playerAttackRadius;
        }
        enemyLayerMask = 1 << LayerMask.NameToLayer("Enemy");

        //初始化扇形攻击参数
        attackRadius = GameDataEditor.instance.playerAttackRadius;
        attackStartAngle = GameDataEditor.instance.startAngle;
        attackEndAngle = GameDataEditor.instance.endAngle;

        //初始化攻击范围指示器
        if (attackRangeIndicator != null)
        {
            attackRangeIndicator.UpdateRange(attackRadius, attackStartAngle, attackEndAngle);
        }
    }

    /// <summary>
    /// 开始战斗（到达门口后调用）
    /// </summary>
    public void StartFighting()
    {
        isChasing = false;
        targetEnemy = null;
        StartCoroutine(FightingIE());
    }

    /// <summary>
    /// 战斗协程 - 随机获取敌人、追击并在移动过程中攻击
    /// </summary>
    private IEnumerator FightingIE()
    {
        attackRangeIndicator.Show();
        while (currentState == PatienState.Fighter)
        {
            if (attackInterval > 0)
            {
                attackInterval -= Time.deltaTime;
            }

            //如果当前没有目标敌人或目标已死亡，从NpcManager中随机获取一个敌人
            if (targetEnemy == null || (targetEnemy.GetComponent<Enemy>() != null && targetEnemy.GetComponent<Enemy>().isDie))
            {
                targetEnemy = GetRandomEnemyFromManager();
            }

            //如果有目标敌人
            if (targetEnemy != null)
            {
                bool isfinsh = false;
                var pos = targetEnemy.transform.position;
                MoveToTarget(new Vector3(pos.x, transform.position.y, pos.z), () => isfinsh = true);
                while (!isfinsh)
                {
                    yield return null;
                }

            }
            yield return null;
        }
    }

    /// <summary>
    /// 从NpcManager中随机获取一个敌人
    /// </summary>
    private Enemy GetRandomEnemyFromManager()
    {
        float minSqr = float.MaxValue;
        Enemy target = null;
        //从NpcManager获取所有活着的敌人
        foreach (var enemy in NpcManager.instance.mEnemies)
        {
            if (enemy != null && !enemy.isDie && !enemy.isSelect)
            {
                if ((transform.position - enemy.transform.position).sqrMagnitude < minSqr)
                {
                    target = enemy;
                    minSqr = (transform.position - enemy.transform.position).sqrMagnitude;
                }
            }
        }
        return target;
    }

    float radius => GameDataEditor.instance.playerAttackRadius;          // 半径
    float startAngle => GameDataEditor.instance.startAngle;      // 起始角度（度）
    float endAngle => GameDataEditor.instance.endAngle;       // 结束角度（度）

    /// <summary>
    /// 攻击
    /// </summary>
    public void Attack()
    {
        Vector3 center = transform.position - transform.forward;
        Collider[] hits = Physics.OverlapSphere(center, radius, enemyLayerMask);

        foreach (var hit in hits)
        {
            Vector3 dir = hit.transform.position - center;
            dir.y = 0; // 忽略高度差

            // 转换到玩家的本地坐标系
            Vector3 localDir = transform.InverseTransformDirection(dir);

            // 计算角度（相对于玩家前方）
            float angle = Mathf.Atan2(localDir.z, localDir.x) * Mathf.Rad2Deg;

            if (angle >= startAngle && angle <= endAngle)
            {
                //Debug.Log("攻击到敌人 " + hit.name);
                Enemy _enemy = hit.GetComponent<Enemy>();
                if (_enemy != null)
                {
                    _enemy.SetHp(GameDataEditor.instance.playerAamage);
                }

            }
        }
    }

    /// <summary>
    /// 碰撞体碰到敌人时，检测前方是否有敌人，只攻击前方，不自动转身时使用
    /// </summary>
    public bool CheckIsAttack()
    {
        Vector3 center = transform.position - transform.forward;
        Collider[] hits = Physics.OverlapSphere(center, radius, enemyLayerMask);
        foreach (var hit in hits)
        {
            Vector3 dir = hit.transform.position - center;
            dir.y = 0; // 忽略高度差

            // 转换到玩家的本地坐标系
            Vector3 localDir = transform.InverseTransformDirection(dir);
            // 计算角度（相对于玩家前方）
            float angle = Mathf.Atan2(localDir.z, localDir.x) * Mathf.Rad2Deg;

            if (angle >= startAngle && angle <= endAngle)
            {
                //  Debug.Log("前方有敌人，攻击");
                return true;
            }
        }
        // Debug.Log("前方没敌人");
        return false;
    }

    #endregion


    protected override void OnTriggerEnter(Collider other)
    {
        base.OnTriggerEnter(other);

        if (currentState == PatienState.Fighter)
        {
            if (other.transform.CompareTag("Enemy"))
            {
                if (attackInterval <= 0 && !IsAttacking)
                {
                    if (CheckIsAttack())
                    {
                        IsAttack = true;
                        attackInterval = GameDataEditor.instance.playerAttackInterval;
                    }
                }
            }
        }
    }

    protected override void OnTriggerStay(Collider other)
    {
        if (currentState == PatienState.Fighter)
        {
            if (other.tag.Equals("Enemy"))
            {
                if (attackInterval <= 0 && !IsAttacking)
                {
                    if (CheckIsAttack())
                    {
                        IsAttack = true;
                        attackInterval = GameDataEditor.instance.playerAttackInterval;
                    }
                    else
                    {
                        IsAttack = false;
                        attackInterval = GameDataEditor.instance.playerAttackInterval;
                    }
                }

            }
        }
    }
}
