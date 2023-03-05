<template>
  <div class="div">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/s1.png" alt="" />
            <p>
              Electric Capital
              开发者报告：比特币和以太坊之外的主要公链生态正在兴起
            </p>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/s2.png" alt="" />
            <p>
              95后国风艺术家联手AI,立志耗时一年,作百米长卷《新西湖繁胜全景图》献礼杭州亚运！
            </p>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/s3.png" alt="" />
            <p>a16z丨探讨区块链的关键价值来源,何时去中心化会更有价值?</p>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/s4.png" alt="" />
            <p>一文详解以太坊 KZG 仪式以及它的重大意义</p>
          </router-link>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "MetaverseMProjectSlideshow",

  data() {
    return {};
  },

  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },

  methods: {},
};
</script>

<style scoped>
.div {
  width: 768px;
}
.swiper-container {
  margin-top: 50px;
}
.swiper-container img {
  display: block;
  width: 768px;
}
.swiper-container p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 180px;
  font-size: 40px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
}
</style>