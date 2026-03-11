using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// 病人打针
/// </summary>
public class PatientInjection : MonoBehaviour
{
    public GroundItemStackManager itemGround;
    [SerializeField] protected SpriteRenderer nomalSR;
    [SerializeField] protected SpriteRenderer heighLightSR;
    [SerializeField] protected NurseNpc nurseNpc;
    private BedProcess bedProcess;
    private bool isInjection;
    void Awake()
    {
        bedProcess = GetComponentInParent<BedProcess>();
    }
    void Update()
    {
        if (!isInjection&&nurseNpc.gameObject.activeInHierarchy && itemGround.stackList[0].GetPatient() != null)
        {
            Injection(nurseNpc.transform);
        }
    }
    void OnTriggerEnter(Collider other)
    {
        if (!nurseNpc.gameObject.activeInHierarchy&&other.transform.CompareTag("Player"))
        {
            ShowBlueSprite();
            Injection(other.transform);
        }
    }

    protected virtual void OnTriggerExit(Collider other)
    {
        if (!nurseNpc.gameObject.activeInHierarchy && other.transform.CompareTag("Player"))
        {
            ShowWhiteSprite();
        }
    }
    public void ShowBlueSprite()
    {
        if (nomalSR == null || heighLightSR == null)
        {
            return;
        }
        nomalSR.gameObject.SetActive(false);
        heighLightSR.gameObject.SetActive(true);
    }

    public void ShowWhiteSprite()
    {
        if (nomalSR == null || heighLightSR == null)
        {
            return;
        }
        nomalSR.gameObject.SetActive(true);
        heighLightSR.gameObject.SetActive(false);
    }

    /// <summary>
    /// 玩家给病人打针
    /// </summary>
    public void Injection(Transform tf)
    {
        var patien = itemGround.stackList[0].GetPatient() as FighterPatientItem;//获取病人
        if (patien == null) return;

        //玩家指向病人并播放动画
        var player = tf.GetComponent<Player>();
        if (player!= null)
            Player.instance.isStop = true;

        isInjection = true;
        patien.StateSwitch(PatienState.Injection);
        DOTween.Sequence()
        .Insert(0, tf.DOLookAt(patien.transform.position, 0.2f))
        .InsertCallback(1, () =>
        {
            if (player != null)
                Player.instance.isStop = false;
            //病人状态更改
            isInjection = false;
            var pathTF = bedProcess.path;
            itemGround.RemoveItem();
            StartCoroutine(InjectionEnd(pathTF, patien));
        });
    }
    IEnumerator InjectionEnd(Transform pathTF, FighterPatientItem patien)
    {
        for (int i = 0; i < pathTF.childCount; i++)
        {
            bool isfinsh = false;
            var pos = pathTF.GetChild(i).position;
            pos = new Vector3(pos.x, patien.transform.position.y, pos.z);
            patien.mRigidbody.isKinematic = false;
            patien.MoveToTarget(pos, () => { isfinsh = true; });
            while (!isfinsh)
            {
                yield return null;
            }
        }

        //移动到指定点后 - 掉落金币到MoneyManager位置
        bool isMoneyDropFinished = false;
        DropMoneyToManager(patien, () => { isMoneyDropFinished = true; });

        //等待金币掉落结束
        while (!isMoneyDropFinished)
        {
            yield return null;
        }

        //切换到Fighter状态
        patien.StateSwitch(PatienState.Fighter);
        //移动到门口
        patien.MoveToTarget(bedProcess.doorPos, () =>
            {
                //到达门口后开始战斗
                patien.StartFighting();
            });
    }

    /// <summary>
    /// 掉落金币到MoneyManager位置
    /// </summary>
    private void DropMoneyToManager(PatientItem patien, System.Action onComplete)
    {
        //生成金币
        var money = PoolManager.instance.GetItem(ItemType.Money);
        //设置金币初始位置（从病人位置抛出）
        money.transform.position = patien.transform.position + Vector3.up * 0.5f;
        money.cd.enabled = false;
        money.canDoFurtherMove = true;
        money.gameObject.SetActive(true);

        //使用贝塞尔曲线移动到MoneyManager位置，参考Enemy的ParabolicDrop
        StartCoroutine(MoneyDropIE(money, bedProcess.moneyPos.position, onComplete));
    }

    /// <summary>
    /// 金币抛物线掉落协程
    /// </summary>
    private IEnumerator MoneyDropIE(Item money, Vector3 targetPos, System.Action onComplete)
    {
        Vector3 startPos = money.transform.position;

        //抛物线参数
        float dropDuration = 0.5f;
        float throwHeight = 2f;

        //计算目标位置（MoneyManager的位置）
        Vector3 endPos = targetPos;

        float elapsed = 0f;

        //抛物线运动
        while (elapsed < dropDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / dropDuration;

            //水平位置插值
            Vector3 currentPos = Vector3.Lerp(startPos, endPos, t);

            //抛物线高度计算（使用二次函数）
            float height = throwHeight * 4f * t * (1f - t);
            currentPos.y = startPos.y + height;

            money.transform.position = currentPos;

            yield return null;
        }

        //确保最终位置准确
        money.transform.position = endPos;

        money.cd.enabled = true;
        //金币被MoneyManager收集
        var groundStack = money.GetComponent<GroundItemStackManager>();
        if (groundStack != null)
            groundStack.StackItem(money);
        onComplete?.Invoke();
    }
}
