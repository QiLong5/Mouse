using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static ExcelTool.GameConfig;

// public class GuildeInfo//引导信息（后续改为配表）
// {
//     public int id;
//     public int priority;//优先级
//     public int triggerNum;//触发引导数量
//     public int hideNum;//隐藏触发数量
//     public string triggerName;//触发对象
//     public string hideName;//移除引导对象
//     public GuildTriggerType triggerType;//显示引导的触发类型
//     public GuildTriggerType hideType;//隐藏引导的触发类型
//     public GuildeInfo(int id, int priority, GuildTriggerType triggerType, int triggerNum, GuildTriggerType hideType, int hideNum, string triggerName, string hideName)
//     {
//         SetInfo(id, priority, triggerType, triggerNum, hideType, hideNum);
//         this.triggerName = triggerName;
//         this.hideName = hideName;
//     }
//     public GuildeInfo(int id, int priority, GuildTriggerType triggerType, int triggerNum, GuildTriggerType hideType, int hideNum, ItemType triggerName, ItemType hideName)
//     {
//         SetInfo(id, priority, triggerType, triggerNum, hideType, hideNum);
//         this.triggerName = GuildManager.itemDic[triggerName];
//         this.hideName = GuildManager.itemDic[hideName];
//     }
//     private void SetInfo(int id, int priority, GuildTriggerType triggerType, int triggerNum, GuildTriggerType hideType, int hideNum)
//     {
//         this.id = id;
//         this.priority = priority;
//         this.triggerNum = triggerNum;
//         this.triggerType = triggerType;
//         this.hideType = hideType;
//         this.hideNum = hideNum;
//     }
// }
public enum GuildTriggerType : int//引导触发类型
{
    None,
    First = 1,//首次引导结束后
    Item = 2,//物品持有
    ItemProduce = 3,//物品产出
    UnlockIcon = 4,//解锁图标
    UnlockFinish = 5,//解锁完成
}

/// <summary>
/// 引导管理
/// </summary>
public class GuildManager : MonoSingleton<GuildManager>
{
    private GuildInfoItem guild;//正在进行中的引导id 
    private List<int> guildLst = new List<int>();//已完成的引导
    private List<GuildInfoItem> infos = new List<GuildInfoItem>();
    public static Dictionary<ItemType, string> itemDic = new Dictionary<ItemType, string>(){//创建枚举对应的字符，以减少参数传递时枚举转字符的性能消耗
        {ItemType.FarmerPatient,"FarmerPatient"},
        {ItemType.FigherPatient,"FigherPatient"},
        {ItemType.Wheat,"Wheat"},
        {ItemType.WheatItem,"WheatItem"},
        {ItemType.Money,"Money"}};

    public override void Awake()
    {
        base.Awake();
        //TODO：引导配置信息，后续更改为配置表
        // infos.Add(new GuildeInfo(1, 0, GuildTriggerType.First, 0, GuildTriggerType.None, 0, null, null));
        // infos.Add(new GuildeInfo(2, 0, GuildTriggerType.ItemProduce, 10, GuildTriggerType.Item, 1, ItemType.BigMeat, ItemType.BigMeat));
        // infos.Add(new GuildeInfo(3, 0, GuildTriggerType.Item, 10, GuildTriggerType.ItemProduce, 1, ItemType.BigMeat, ItemType.Meat));
        // infos.Add(new GuildeInfo(4, 0, GuildTriggerType.ItemProduce, 10, GuildTriggerType.Item, 1, ItemType.Meat, ItemType.Meat));
        // infos.Add(new GuildeInfo(5, 0, GuildTriggerType.Item, 10, GuildTriggerType.ItemProduce, 1, ItemType.Meat, ItemType.RoastMeat));
        // infos.Add(new GuildeInfo(6, 0, GuildTriggerType.ItemProduce, 10, GuildTriggerType.Item, 1, ItemType.RoastMeat, ItemType.RoastMeat));
        // infos.Add(new GuildeInfo(7, 0, GuildTriggerType.Item, 10, GuildTriggerType.ItemProduce, 1, ItemType.RoastMeat, ItemType.Money));
        // infos.Add(new GuildeInfo(8, 0, GuildTriggerType.ItemProduce, 10, GuildTriggerType.Item, 1, ItemType.Money, ItemType.Money));
        // infos.Add(new GuildeInfo(9, 0, GuildTriggerType.UnlockIcon, 1, GuildTriggerType.UnlockFinish, 1, "Clerk_木桩", "Clerk_木桩"));
        // infos.Add(new GuildeInfo(10, 0, GuildTriggerType.UnlockIcon, 1, GuildTriggerType.UnlockFinish, 1, "Clerk_锤子", "Clerk_锤子"));
        // infos.Add(new GuildeInfo(11, 0, GuildTriggerType.UnlockIcon, 1, GuildTriggerType.UnlockFinish, 1, "Clerk_默认1", "Clerk_默认1"));
        // infos.Add(new GuildeInfo(12, 0, GuildTriggerType.UnlockIcon, 1, GuildTriggerType.UnlockFinish, 1, "Clerk_默认2", "Clerk_默认2"));
        // infos.Add(new GuildeInfo(13, 0, GuildTriggerType.UnlockIcon, 1, GuildTriggerType.UnlockFinish, 1, "Clerk_默认3", "Clerk_默认3"));
        // infos.Add(new GuildeInfo(14, 0, GuildTriggerType.UnlockIcon, 1, GuildTriggerType.UnlockFinish, 1, "Clerk_默认4", "Clerk_默认4"));
    }

    /// <summary>
    /// 设置引导线
    /// </summary>
    /// <param name="isEnd">是否结束引导</param>
    public void SetGuildLine(bool isEnd, GuildInfoItem info = null)
    {
        if (isEnd)//结束引导线
        {
            guildLst.Add(guild.id);
            ArrowsManager.instance.CloseArrows();
            guild = null;
        }
        else//设置引导追踪目标
        {
            guild = info;
            ArrowsManager.instance.UpdateOffsetPos(Vector3.zero);
            ArrowsManager.instance.SetArrows(info.id - 1);//设置引导目标
        }
    }
    /// <summary>
    /// 更新箭头高度
    /// </summary>
    public void UpdateArrowHeight(ItemType itemType,bool isProduce,float offsetY)
    {
        if(guild==null) return;//没有正在进行中的引导

        if(guild.triggerName==itemDic[itemType]&&
        (guild.triggerType== (int)GuildTriggerType.ItemProduce&&isProduce
        ||guild.triggerType== (int)GuildTriggerType.Item&&!isProduce))

            ArrowsManager.instance.UpdateOffsetPos(Vector3.up*offsetY);
    }

    /// <summary>
    /// 引导检测
    /// </summary>
    /// <param name="triggerType"></param>
    /// <param name="num"></param>
    /// <param name="itemType"></param>
    public void CheckGuild(GuildTriggerType triggerType, int num, ItemType itemType)
    {
        CheckGuild(triggerType, num, itemDic[itemType]);
    }

    /// <summary>
    /// 引导检测
    /// </summary>
    /// <param name="triggerType"></param>
    /// <param name="num"></param>
    /// <param name="objName"></param>
    public void CheckGuild(GuildTriggerType triggerType, int num, string objName = null)
    {
        if (infos.Exists(t => !guildLst.Contains(t.id) && (t.triggerType == (int)triggerType || t.hideType == (int)triggerType)))//存在该类型未完成的引导
        {
            switch (triggerType)
            {
                case GuildTriggerType.UnlockIcon:
                case GuildTriggerType.UnlockFinish:
                    {
                        if (guild != null && guild.hideName == objName)//判断引导是否结束
                            SetGuildLine(true);

                        var info = infos.Find(t => !guildLst.Contains(t.id) && t.triggerName == objName);
                        if (info == guild || guild != null && info.priority < guild.priority) return;//当前进行中的引导优先级大于触发的引导
                        SetGuildLine(false, info);
                    }
                    break;
                default:
                    {
                        //先判断该触发条件下的引导是否满足条件
                        if (guild != null && guild.hideType == (int)triggerType && guild.hideName == objName)
                        {
                            if (guild.hideNum <= num)
                                SetGuildLine(true);
                        }

                        //检测新的引导是否满足条件
                        var info = infos.Find(t => !guildLst.Contains(t.id) && t.triggerType == (int)triggerType && t.triggerName == objName);//触发式
                        if (info != null && info.triggerNum <= num)
                        {
                            if (info == guild || guild != null && info.priority < guild.priority) return;//当前进行中的引导优先级大于触发的引导
                            SetGuildLine(false, info);
                        }
                    }
                    break;
            }
        }

    }

}
