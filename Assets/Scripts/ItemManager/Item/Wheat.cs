using System.Collections;
using UnityEngine;

/// <summary>
/// 小麦，存在正常状态和已收割状态
/// 玩家进入触发器时切换为已收割状态，生成WheatItem飞向玩家
/// 收割后等待一段时间恢复正常状态
/// </summary>
public class Wheat : Item
{
    [Header("小麦设置")]
    [Tooltip("正常状态显示的子物体")]
    public GameObject normalState;
    [Tooltip("已收割状态显示的子物体")]
    public GameObject harvestedState;
    [Tooltip("收割后恢复时间（秒）")]
    public float regrowTime = 10f;

    private bool isHarvested = false;
    public bool IsHarvested => isHarvested;

    protected override void Awake()
    {
        base.Awake();
    }

    protected override void Start()
    {
        base.Start();
        // 防止基类OnTriggerEnter将小麦本身捡起
        hasBeenAddedToPlayer = true;
        SetState(false);
    }

    private void OnEnable()
    {
        isHarvested = false;
        // 防止基类OnTriggerEnter将小麦本身捡起
        hasBeenAddedToPlayer = true;
        SetState(false);
    }

    /// <summary>
    /// 设置小麦状态
    /// </summary>
    /// <param name="harvested">是否已收割</param>
    private void SetState(bool harvested)
    {
        isHarvested = harvested;
        if (normalState != null) normalState.SetActive(!harvested);
        if (harvestedState != null) harvestedState.SetActive(harvested);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Player")) return;
        if (isHarvested) return;

        Harvest();
    }

    private void Harvest()
    {
        SetState(true);
        SpawnWheatItem();
        StartCoroutine(RegrowCoroutine());
    }

    private void SpawnWheatItem()
    {
        Item wheatItem = PoolManager.instance.GetItem(ItemType.WheatItem);
        wheatItem.gameObject.SetActive(true);
        wheatItem.transform.position = transform.position;
        wheatItem.transform.parent = PoolManager.instance.transform;
        wheatItem.cd.enabled = false;
        wheatItem.PickUpToPlayer();
    }

    private IEnumerator RegrowCoroutine()
    {
        yield return new WaitForSeconds(regrowTime);
        SetState(false);
    }

    /// <summary>
    /// 农夫收割小麦
    /// </summary>
    public bool FarmerHarvest(FarmerPatientItem farmer)
    {
        if (isHarvested) return false;
        SetState(true);
        SpawnWheatItemForFarmer(farmer);
        StartCoroutine(RegrowCoroutine());
        return true;
    }

    private void SpawnWheatItemForFarmer(FarmerPatientItem farmer)
    {
        if (farmer.farmerItemStackManager == null) return;
        var stack = farmer.farmerItemStackManager.GetStackByItemType(ItemType.WheatItem);
        if (stack == null || stack.stackAmount >= stack.maxStackAmount) return;

        Item wheatItem = PoolManager.instance.GetItem(ItemType.WheatItem);
        wheatItem.gameObject.SetActive(true);
        wheatItem.transform.position = transform.position;
        wheatItem.transform.parent = PoolManager.instance.transform;
        wheatItem.cd.enabled = false;
        wheatItem.PickUpToPlayer(stack, false);
    }
}
