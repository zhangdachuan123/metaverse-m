<template>
  <div>
    <Slideshow />
    <div id="flash">
      <div class="flash">快讯</div>
      <div class="word" :class="{ 'move-style': moveFlag }">
        <div v-for="(item, index) in listData" :key="index">
          <router-link :to="{ path: '/' }">{{ item.title }} </router-link>
        </div>
      </div>
    </div>
    <div id="industry_entry">
      <router-link :to="{ path: '/' }">
        <img src="../assets/images/home-index.png" alt="" />
      </router-link>
    </div>
    <Article />
  </div>
</template>

<script>
import Slideshow from "@/components/Slideshow.vue";
import Article from "@/components/Article.vue";

export default {
  name: "MetaverseMProjectHomeView",
  data() {
    return {
      listData: [
        {
          title:
            "华为申请数字藏品云宝商标 1 月 28 日，据天眼查 App显示，华为技术有限公司申请注册多枚“华为云宝”、“华为云云宝”商标，国际分类涉及教育娱乐、广告销售等，当前商标状态均为申请中。据悉,此前华为云推出以品牌形象IP“云宝”为基础的数字藏品",
        },
        {
          title:
            "Azuki 背后开发公司 Chiru Labs 已为 Hilumia 和 9 Lives Arcade提交商标注册申请 1 月 28 日，据商标及版权律师 MeerMcD.eth  发推表示,NFT 项目 Azuki 背后开发公司 Chiru Labs已为虚拟城市“Hilumia”和 9 Lives Arcade 提交了两份商标注册申请，涉及范围包括可下载的游戏软件，",
        },
        {
          title:
            "债权人名单显示 FTX 欠款对象包括美国航空集团、Netflix 和斯坦福大学等据界面 1 月 27 日消息，根据 FTX律师于当地时间周三发布的一份债权人名单，已破产加密货币交易所 FTX的欠款对象包括慈善机构、航空公司、媒体公司、金融机构和大学等。这份116页的名单中包括美国航空集团、精神航空和美国西南航空等航空公司，也有Netflix、《华尔街日报》和 CoinDesk等媒体公司，并涵盖高盛和摩根大通等金融机构。该名单还包括 FTX创始人山姆・班克曼 - 弗里德的父母担任教授的斯坦福大学等私立大学。该文件未显示 FTX对每个机构的欠款数额。",
        },
        {
          title:
            "消息人士:Dragonfly 流动性策略团队已被 Brevan Howard 收购 1 月 28日,据消息人士透露,Dragonfly 流动性策略团队已被 Brevan Howard收购。据悉,Dragonfly 于 2021 年推出了首支流动加密货币基金，由 Hu、Ashwin Ramachandran 和 Lawrence Diao 管理。截至 4月，流动投资平台已筹集超过 4.5 亿美元。它在 7月宣布推出新的“流动平台”， 此前报道,Brevan Howard 周四宣布聘请前Dragonfly 合伙人担任数字资产投资经理。",
        },
        {
          title:
            "CZ:去年失败的加密货币项目可能会对传统金融业者的长期生存产生影响 1月 28 日，币安首席执行官 CZ发推表示，“从短期来看，去年几个失败的加密货币项目阻碍了加密货币行业的增长。但行业已经开始复苏。从长期来看，这些项目的失败阻碍了传统金融业者采用加密技术，并可能导致他们在采用曲线上进一步落后，这可能会在10 至 20 年后对他们的生存产生影响”。",
        },
      ],
      moveFlag: false,
      timer: null,
    };
  },
  components: {
    Slideshow,
    Article,
  },

  mounted() {
    this.timer = setInterval(this.scrollAnimate, 4000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    scrollAnimate() {
      this.moveFlag = true;
      setTimeout(() => {
        this.listData.push(this.listData[0]);
        this.listData.shift();
        this.moveFlag = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
#flash {
  width: 728px;
  height: 97px;
  background-color: #fff;
  padding: 0 20px;
  padding-top: 20px;
  display: flex;
}
#flash .flash {
  width: 149px;
  height: 76px;
  padding-left: 10px;
  font-size: 50px;
  font-weight: 700;
  border-right: 2px solid #e5e5e5;
}
#flash .word {
  width: 567px;
  margin-left: 40px;
  overflow: hidden;
}
#flash .word div {
  height: 76px;
  font-size: 30px;
  margin-bottom: 30px;
  position: relative;
}
#flash .word div a {
  color: #000;
  /* 将对象作为弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。 */
  -webkit-line-clamp: 2;
  /* 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式） */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /*  溢出用省略号显示 */
  text-overflow: ellipsis;
}
.move-style {
  transition: all 5s;
  transform: translateY(-80px);
}
#industry_entry img {
  /*解决与下面盒子的缝隙 */
  display: block;
  width: 768px;
}
</style>
