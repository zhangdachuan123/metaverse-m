<template>
  <div>
    <div id="header">
      <div class="nav" @click="changeError()">
        <i class="iconfont icon-daohang" v-show="display"></i>
      </div>
      <div class="error" @click="changeNav()">
        <i class="iconfont icon-cuowu error" v-show="hidden"></i>
      </div>
      <div class="logo">
        <router-link :to="{ path: '/' }">
          <img src="../assets/images/logo.svg" alt="巴比特" />
        </router-link>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div id="nav-content" v-show="content">
      <div class="information">
        <p>资讯</p>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="title">
        <div>
          <router-link :to="{ path: '/' }">独家</router-link>
        </div>
        <div><router-link :to="{ path: '/' }">产业</router-link></div>
        <div><router-link :to="{ path: '/' }">海盗号</router-link></div>
        <div><router-link :to="{ path: '/' }">创投</router-link></div>
        <div><router-link :to="{ path: '/' }">政策</router-link></div>
        <div><router-link :to="{ path: '/' }">技术</router-link></div>
        <div><router-link :to="{ path: '/' }">专题</router-link></div>
        <div><router-link :to="{ path: '/' }">研报</router-link></div>
      </div>
      <div class="video">
        <p>视频</p>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="title2">
        <div class="question">
          <router-link :to="{ path: '/' }">8问</router-link>
        </div>
        <div class="technology">
          <router-link :to="{ path: '/' }">技术沙龙</router-link>
        </div>
        <div class="room">
          <router-link :to="{ path: '/' }">直播间</router-link>
        </div>
        <div class="evaluation">
          <router-link :to="{ path: '/' }">硬件测评</router-link>
        </div>
        <div class="data">
          <router-link :to="{ path: '/' }">QKL123数据实验室</router-link>
        </div>
      </div>
      <ul>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/flash.png" alt="" />
            <p>快讯</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/college.png" alt="" />
            <p>峰会</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/defi.png" alt="" />
            <p>产业</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/act.png" alt="" />
            <p>学院</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/industry.png" alt="" />
            <p>元宇宙</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/projects.png" alt="" />
            <p>活动</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/summit.png" alt="" />
            <p>海盗号</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/viking.png" alt="" />
            <p>Web3.0</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }">
            <img src="../assets/images/act.png" alt="" />
            <p>项目</p>
          </router-link>
        </li>
      </ul>
      <div class="log">
        <router-link class="login" :to="{ path: '/' }">登录</router-link>
        <router-link class="register" :to="{ path: '/' }">极速注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaverseMProjectHeader",

  data() {
    return {
      display: true,
      content: false,
    };
  },

  mounted() {},

  methods: {
    changeError() {
      (this.content = true), (this.display = false), (this.hidden = true);
    },
    changeNav() {
      (this.content = false), (this.display = true), (this.hidden = false);
    },
  },
};
</script>

<style scoped>
#header {
  width: 768px;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 2099;
  box-shadow: 0 0.21333rem 0.26667rem rgb(0 0 0 / 6%);
  background-color: #fff;
}
#header .nav i {
  font-size: 50px;
  position: absolute;
  top: 0;
  left: 40px;
}
#header .error {
  font-size: 40px;
  margin-left: 26px;
}
#header .logo img {
  position: absolute;
  top: 10px;
  left: 320px;
  height: 30px;
}
#header .search i {
  position: absolute;
  top: 0;
  right: 40px;
  font-size: 50px;
}
#nav-content {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 2011;
}
#nav-content .information {
  display: flex;
  margin-left: 40px;
}
#nav-content i {
  font-size: 30px;
  font-weight: 700;
  margin-top: 5px;
  margin-left: 10px;
}
#nav-content .video {
  display: flex;
  margin-left: 40px;
}
#nav-content p {
  font-size: 30px;
  font-weight: 700;
  color: #06080f;
}
#nav-content .title {
  font-size: 30px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
}
#nav-content .title a {
  color: #333;
}
#nav-content .title div {
  margin-left: 20px;
  width: 125px;
  padding: 10px;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
}
#nav-content .title2 {
  font-size: 30px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  margin-top: 50px;
}
#nav-content .title2 a {
  color: #333;
}
#nav-content .title2 div {
  margin-left: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
}
#nav-content .title2 .question {
  width: 125px;
}
#nav-content .title2 .technology {
  margin-left: 100px;
}
#nav-content .title2 .room {
  width: 125px;
  margin-left: 100px;
}
#nav-content .title2 .evaluation {
  margin-left: 100px;
}
#nav-content .title2 .data {
  margin-left: 100px;
}
#nav-content ul {
  flex-flow: row wrap;
  display: flex;
  margin: 50px auto;
}
#nav-content ul li {
  margin-left: 40px;
  margin-bottom: 50px;
  position: relative;
}
#nav-content ul img {
  width: 453px;
  height: 251px;
}
#nav-content ul p {
  color: #fff;
  font-weight: 500;
  position: absolute;
  top: 110px;
  left: 190px;
}
#nav-content .log {
  text-align: center;
}
#nav-content .log .login {
  color: #06080f;
  border: 1px solid #06080f;
  font-size: 20px;
  font-weight: 500;
  padding: 30px 80px;
  border-radius: 10px;
}
#nav-content .log .register {
  color: #fff;
  background-color: #e54949;
  border-radius: 10px;
  font-size: 20px;
  margin-left: 20px;
  padding: 30px 60px;
  /* border: 1px solid #06080f; */
}
</style>
