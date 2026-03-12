using System.Collections.Generic;
using UnityEngine;

namespace ExcelTool
{
    /// <summary>
    /// GameConfig 配置数据
    /// 自动生成，请勿手动修改
    /// </summary>
    [CreateAssetMenu(fileName = "GameConfig", menuName = "ExcelTool/GameConfig")]
    public class GameConfig : ScriptableObject
    {
        [Header("=== 工具元数据（请勿手动修改） ===")]
        /// <summary>
        /// 元数据：Excel文件路径
        /// </summary>
        [Tooltip("此文件由工具自动管理，请勿手动修改")]
        public string _excelFilePath = "";

        /// <summary>
        /// 元数据：使用的工作表索引（逗号分隔）
        /// </summary>
        [Tooltip("此文件由工具自动管理，请勿手动修改")]
        public string _sheetIndices = "";

        [Space(20)]
        /// <summary>
        /// 玩家数据
        /// </summary>
        public 玩家数据Data 玩家数据 = new 玩家数据Data();

        /// <summary>
        /// 老鼠数据
        /// </summary>
        public 老鼠数据Data 老鼠数据 = new 老鼠数据Data();

        /// <summary>
        /// 其他配置
        /// </summary>
        public 其他配置Data 其他配置 = new 其他配置Data();

        /// <summary>
        /// 生产交易相关 - ItemInfo
        /// </summary>
        public List<ItemInfoItem> itemInfo = new List<ItemInfoItem>();

        /// <summary>
        /// 引导配置 - GuildInfo
        /// </summary>
        public List<GuildInfoItem> guildInfo = new List<GuildInfoItem>();

        /// <summary>
        /// 玩家数据 数据
        /// </summary>
        [System.Serializable]
        public class 玩家数据Data
        {
            /// <summary>
            /// 玩家移动速度
            /// </summary>
            public float playerSpeed = 6.0f;

            /// <summary>
            /// 玩家旋转平滑系数
            /// </summary>
            public int playerTurnSmoothTime = 10;

            /// <summary>
            /// 玩家最大血量
            /// </summary>
            public int playerMaxHp = 20;

        }

        /// <summary>
        /// 老鼠数据 数据
        /// </summary>
        [System.Serializable]
        public class 老鼠数据Data
        {
            /// <summary>
            /// 老鼠数量上限
            /// </summary>
            public int enemyCount = 100;

            /// <summary>
            /// 老鼠移动速度
            /// </summary>
            public float enemySpeed = 4.0f;

            /// <summary>
            /// 陷阱击飞高度
            /// </summary>
            public float enemyKnockbackForc = 10.0f;

            /// <summary>
            /// 老鼠掉落肉块数
            /// </summary>
            public int enemyDropNum = 1;

            /// <summary>
            /// 老鼠刷新间隔
            /// </summary>
            public float enemyInterval = 0.5f;

            /// <summary>
            /// 老鼠单次间隔内的生成数量
            /// </summary>
            public int enemyCreateNum = 1;

        }

        /// <summary>
        /// 其他配置 数据
        /// </summary>
        [System.Serializable]
        public class 其他配置Data
        {
            /// <summary>
            /// 自动锤子敲击按钮频率
            /// </summary>
            public float hammerTime = 5.0f;

            /// <summary>
            /// 传送带速度
            /// </summary>
            public float conveyorTime = 0.8f;

        }

        /// <summary>
        /// 生产交易相关 - ItemInfo 数据项
        /// </summary>
        [System.Serializable]
        public class ItemInfoItem
        {
            /// <summary>
            /// 对应产品类型
            /// </summary>
            public string produceType;

            /// <summary>
            /// 原料数量
            /// </summary>
            public int needCount;

            /// <summary>
            /// 生产数量
            /// </summary>
            public int produceNum;

            /// <summary>
            /// 生成时间
            /// </summary>
            public float proTime;

        }

        /// <summary>
        /// 引导配置 - GuildInfo 数据项
        /// </summary>
        [System.Serializable]
        public class GuildInfoItem
        {
            /// <summary>
            /// 引导id
            /// </summary>
            public int id;

            /// <summary>
            /// 优先级
            /// </summary>
            public int priority;

            /// <summary>
            /// 触发的引导类型
            /// </summary>
            public int triggerType;

            /// <summary>
            /// 数量条件
            /// </summary>
            public int triggerNum;

            /// <summary>
            /// 触发对象
            /// </summary>
            public string triggerName;

            /// <summary>
            /// 移除引导的触发类型
            /// </summary>
            public float hideType;

            /// <summary>
            /// 数量条件
            /// </summary>
            public int hideNum;

            /// <summary>
            /// 触发对象
            /// </summary>
            public string hideName;

        }

    }
}
