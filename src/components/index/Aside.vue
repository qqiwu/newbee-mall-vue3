<template>
  <div class="all-sort-list">
    <div
      v-for="item in items"
      class="item"
      @mouseenter="showItemList(item)"
      @mouseleave="hideItemList(item)"
    >
      <h3>
        <span>·</span><a>{{ item.title }}</a>
      </h3>
      <div
        class="item-list clearfix"
        :style="{ top: item.top + 'px', display: item.display }"
      >
        <div class="subitem">
          <dl class="fore1" v-for="subitem in item.subitems">
            <dt>
              <a>{{ subitem.title }}</a>
            </dt>
            <dd>
              <em v-for="em in subitem.ems"
                ><a>{{ em }}</a>
              </em>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "家电 数码 手机",
          top: "0",
          display: "none",
          subitems: [
            {
              title: "家电",
              ems: [
                "生活电器",
                "wer",
                "厨房电器",
                "扫地机器人",
                "吸尘器",
                "取暖器",
                "豆浆机",
                "暖风机",
                "加湿器",
                "蓝牙音响",
                "烤箱",
                "卷发器",
                "空气净化器",
              ],
            },
            {
              title: "数码",
              ems: [
                "游戏主机",
                "二手手机",
                "数码精选",
                "平板电脑",
                "苹果Apple",
                "电脑主机",
                "数码相机",
                "电玩动漫",
                "单反相机",
                "键盘鼠标",
                "无人机",
                "二手电脑",
              ],
            },
            {
              title: "手机",
              ems: [
                "荣耀手机",
                "华为手机",
                "华为P30",
                "iPhone11",
                "苹果iPhone",
                "华为Mate 20",
                "小米手机",
                "OPPO",
                "一加",
                "小米 MIX",
                "vivo",
                "手机以旧换新",
              ],
            },
          ],
        },
        {
          title: "女装 男装 穿搭",
          top: "1",
          display: "none",
          subitems: [{ title: "女装", ems: ["外套"] }],
        },
        {
          title: "家具 家饰 家纺",
          top: "2",
          display: "none",
          subitems: [{ title: "家具", ems: ["沙发"] }],
        },
        {
          title: "运动 户外 乐器",
          top: "3",
          display: "none",
          subitems: [{ title: "运动", ems: ["跑鞋"] }],
        },
        {
          title: "游戏 动漫 影视",
          top: "4",
          display: "none",
          subitems: [{ title: "游戏", ems: ["LOL"] }],
        },
        {
          title: "美妆 清洁 宠物",
          top: "5",
          display: "none",
          subitems: [
            {
              title: "美妆",
              ems: ["口红", "睫毛膏", "腮红", "粉底", "隔离霜", "美白", "气垫"],
            },
          ],
        },
        {
          title: "工具 装修 建材",
          top: "6",
          display: "none",
          subitems: [{ title: "工具", ems: ["转换器"] }],
        },
        {
          title: "鞋靴 箱包 配件",
          top: "7",
          display: "none",
          subitems: [
            {
              title: "鞋靴",
              ems: ["休闲裤"],
            },
          ],
        },
        {
          title: "玩具 孕产 用品",
          top: "8",
          display: "none",
          subitems: [
            {
              title: "玩具",
              ems: ["机器人"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    showItemList(item) {
      item.display = "block";
    },
    hideItemList(item) {
      item.display = "none";
    },
  },
};
</script>

<style></style>
