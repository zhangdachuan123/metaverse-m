<template>
  <div id="footer">
    <ul class="media">
      <li class="li1">
        <a href="http://weibo.com"> <i class="iconfont icon-weibo"></i></a>
      </li>
      <li class="li2">
        <a href="http://twitter.com"> <i class="iconfont icon-tuite"></i> </a>
      </li>
      <li class="li3">
        <a href="http://www.zhihu.com"
          ><i class="iconfont icon-zhihu-square-fill"></i
        ></a>
      </li>
    </ul>
    <ul class="about">
      <li class="li1">
        <router-link :to="{ path: '/' }">关于我们</router-link>
      </li>
      <li class="li2">
        <router-link :to="{ path: '/' }">联系我们</router-link>
      </li>
      <li class="li3">
        <router-link :to="{ path: '/' }">申请海盗号</router-link>
      </li>
      <p class="copy">
        Copyright©2011-2023 · 巴比特 · 署名-非商业性使用-相同方式共享(BY-NC-SA
        3.0 CN) · 浙ICP备14013035号-8
        <a href="http://www.beian.gov.cn">
          <img src="../assets/images/gonganbeian.png" alt="" />
          浙公网安备 33010602002085号
        </a>
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetaverseMProjectFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
#footer {
  width: 768px;
  height: 400px;
  background: rgba(0, 0, 0, 0.05);
}
#footer .media {
  position: relative;
}
#footer .media li i {
  color: #000;
  font-size: 70px;
}
#footer .media .li1 {
  position: absolute;
  top: 100px;
  left: 150px;
}
#footer .media .li2 {
  position: absolute;
  top: 100px;
  left: 350px;
}
#footer .media .li3 {
  position: absolute;
  top: 100px;
  left: 550px;
}
#footer .about {
  position: relative;
}
#footer .about li a {
  color: #000;
  font-size: 20px;
}
#footer .about .li1 {
  position: absolute;
  top: 160px;
  left: 150px;
}
#footer .about .li2 {
  position: absolute;
  top: 160px;
  left: 350px;
}
#footer .about .li3 {
  position: absolute;
  top: 160px;
  left: 550px;
}
#footer .about p {
  position: absolute;
  top: 260px;
  font-size: 24px;
  text-align: center;
}
</style>