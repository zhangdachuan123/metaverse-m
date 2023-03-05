<template>
  <div id="article">
    <div class="title">
      <div
        v-for="(item, index) in list"
        :key="item.index"
        :class="{ active: currentIndex === index }"
        @click="clickItem(index)"
      >
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="padding">
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="word">
            让创作者成为CEO,去中心化创作者经济(Creator Economy)兴起
          </div>
          <div class="people">
            <p class="name">方欣雨</p>
            <p class="date">2021-09-30</p>
          </div>
        </div>
        <div class="images">
          <img src="../assets/images/c1.png" alt="" />
        </div>
      </div>
      <div class="more">
        <button>查看更多</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaverseMProjectArticle",

  data() {
    return {
      list: [
        {
          title: "最近",
        },
        {
          title: "独家",
        },
        {
          title: "产业",
        },
        {
          title: "创投",
        },
        {
          title: "政策",
        },
        {
          title: "技术",
        },
        {
          title: "矿业",
        },
        {
          title: "专题",
        },
        {
          title: "研报",
        },
      ],
      currentIndex: 0,
    };
  },

  mounted() {},

  methods: {
    clickItem(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style  scoped>
.active {
  color: #e14338;
  font-weight: 500;
}
#article {
  width: 768px;
  background-color: #fff;
}

#article .title {
  display: flex;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 30px;
}
#article .title div {
  padding: 0 6px;
  margin-left: 10px;
  font-size: 30px;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
  cursor: pointer;
}
#article .padding {
  padding: 0 10px;
}
#article .content {
  width: 718px;
  /* height: 160px; */
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ebedf0;
  margin-bottom: 20px;
}
#article .content img {
  border-radius: 10px;
  width: 233px;
  height: 140px;
}
#article .content .word {
  color: #06080f;
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  /* max-height: 40rem; */
  margin: 0;
  -webkit-line-clamp: 2;
}
#article .content .people {
  display: flex;
  color: #666;
  font-size: 20px;
  margin-top: 10px;
}
#article .content .people .name {
  margin-right: 20px;
}
#article .more {
  text-align: center;
  padding: 20px;
  padding-bottom: 40px;
}
#article .more button {
  background: #f0f0f0;
  border: none;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
}
</style>