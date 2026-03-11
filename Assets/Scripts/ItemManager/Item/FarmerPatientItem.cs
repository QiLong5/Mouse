using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 农夫子状态
/// </summary>
public enum FarmerState
{
    Idle,
    WaitingForElevatorTop,
    RidingElevator,
    MovingToWheat,
    Harvesting,
    WaitingForElevatorBottom,
    Delivering,
}

/// <summary>
/// 农夫病人 - 继承PatientItem
/// 泡汤池治愈后切换为农夫状态，搭电梯下去收割小麦，搭电梯上来交付，循环工作
/// </summary>
public class FarmerPatientItem : PatientItem
{
    [Header("农夫相关")]
    [SerializeField] private int maxHarvestCapacity = 5;//小麦容量
    [SerializeField] private float harvestDelay = 0.5f;
    public ItemStackManager farmerItemStackManager;

    [HideInInspector] public FarmerState farmerState = FarmerState.Idle;
    private int harvestedCount;
    private Coroutine farmerWorkflowCoroutine;

    protected override void Farmer()
    {
        harvestedCount = 0;
        farmerState = FarmerState.Idle;
        farmerWorkflowCoroutine = StartCoroutine(FarmerWorkflowIE());
    }

    /// <summary>
    /// 农夫工作流协程
    /// </summary>
    private IEnumerator FarmerWorkflowIE()
    {
        while (currentState == PatienState.Farmer)
        {
            // 1. 注册等待电梯（上方），Elevator会分配排队位置并移动农夫过去
            farmerState = FarmerState.WaitingForElevatorTop;
            Elevator elevator = FindObjectOfType<Elevator>();
            if (elevator != null)
                elevator.RegisterWaitingFarmer(this, true);

            // 等待被电梯接走
            while (farmerState == FarmerState.WaitingForElevatorTop)
                yield return null;

            // 等待电梯运行结束（RidingElevator状态由Elevator设置和清除）
            while (farmerState == FarmerState.RidingElevator)
                yield return null;

            // 3. 收割循环
            harvestedCount = 0;
            while (currentState == PatienState.Farmer)
            {
                // 检查容量
                bool bagFull = false;
                if (farmerItemStackManager != null)
                {
                    var stack = farmerItemStackManager.GetStackByItemType(ItemType.WheatItem);
                    if (stack != null && stack.stackAmount >= stack.maxStackAmount)
                        bagFull = true;
                }
                else if (harvestedCount >= maxHarvestCapacity)
                {
                    bagFull = true;
                }

                Wheat targetWheat = WheatManager.instance.GetRandomAvailableWheat();

                if (targetWheat == null || bagFull)
                    break;

                // 移动到小麦位置
                farmerState = FarmerState.MovingToWheat;
                bool arrivedWheat = false;
                Vector3 wheatPos = new Vector3(targetWheat.transform.position.x, transform.position.y, targetWheat.transform.position.z);
                MoveToTarget(wheatPos, () => { arrivedWheat = true; });
                while (!arrivedWheat) yield return null;

                // 收割
                farmerState = FarmerState.Harvesting;
                if (!targetWheat.IsHarvested)
                {
                    targetWheat.FarmerHarvest(this);
                    harvestedCount++;
                }
                yield return new WaitForSeconds(harvestDelay);
            }

            // 4. 注册等待电梯（下方），Elevator会分配排队位置并移动农夫过去
            farmerState = FarmerState.WaitingForElevatorBottom;
            if (elevator != null)
                elevator.RegisterWaitingFarmer(this, false);

            while (farmerState == FarmerState.WaitingForElevatorBottom)
                yield return null;

            // 等待电梯运行结束
            while (farmerState == FarmerState.RidingElevator)
                yield return null;

            // 5. 交付小麦到指定堆叠点
            farmerState = FarmerState.Delivering;
            if (SoakManager.instance.wheatDeliveryStack != null)
            {
                // 移动到交付点
                bool arrivedDelivery = false;
                Vector3 deliveryPos = SoakManager.instance.wheatDeliveryStack.transform.position;
                deliveryPos = new Vector3(deliveryPos.x, transform.position.y, deliveryPos.z);
                MoveToTarget(deliveryPos, () => { arrivedDelivery = true; });
                while (!arrivedDelivery) yield return null;

                // 逐个卸载WheatItem
                if (farmerItemStackManager != null)
                {
                    var stack = farmerItemStackManager.GetStackByItemType(ItemType.WheatItem);
                    if (stack != null)
                    {
                        while (stack.stackAmount > 0)
                        {
                            Item wheatItem = stack.RemoveTopItem();
                            if (wheatItem != null)
                            {
                                SoakManager.instance.wheatDeliveryStack.StackItem(wheatItem);
                            }
                            yield return new WaitForSeconds(0.1f);
                        }
                    }
                }
            }
            harvestedCount = 0;

            // 循环：重新排队
        }
    }

    /// <summary>
    /// 农夫进入电梯
    /// </summary>
    public void EnterElevatorAsFarmer()
    {
        StopMovement();
        mRigidbody.isKinematic = true;
        farmerState = FarmerState.RidingElevator;
    }

    /// <summary>
    /// 农夫离开电梯
    /// </summary>
    public void ExitElevatorAsFarmer(bool wasGoingDown)
    {
        mRigidbody.isKinematic = false;
        farmerState = wasGoingDown ? FarmerState.MovingToWheat : FarmerState.Delivering;
    }
}
