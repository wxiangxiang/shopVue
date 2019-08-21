<template >
  <div class="main">
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" width="70%" style="float:right;margin-top:.2rem" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="contain">
      <div class="swiper-area">
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img v-lazy="banner.image" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="type-bar">
        <div v-for="(cate,index) in category" :key="index">
          <img v-lazy="cate.image" />
          <span>{{cate.mallCategoryName}}</span>
        </div>
      </div>
      <div>
        <img v-lazy="advertesPicture.PICTURE_ADDRESS" width="100%" />
      </div>
      <div class="recommend-area">
        <div class="recommend-title">商品推荐</div>
        <div class="recommend-body">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
              <div class="recommend-item">
                <img :src="item.image" />
                <span>{{item.goodsName}}</span>
                <span>{{item.price}}(￥{{item.mallPrice}})</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="floor">
        <div class="floor-anomaly">
          <div class="floor-one">
            <img :src="floor1_0.image" width="100%" />
          </div>
          <div>
            <div class="floor-two">
              <img :src="floor1_1.image" width="100%" />
            </div>
            <div>
              <img :src="floor1_2.image" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import swiperDefault from "../swiperDefault.vue";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      locationIcon: require("../../assets/images/sousuo.png"),
      bannerPicArray: "",
      category: "",
      advertesPicture: "",
      recommendGoods: "",
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        freeMode: true
      },
      floor1: [],
      floor1_0: "",
      floor1_1: "",
      floor1_2: "",
      floor1_3: "",
      floor1_4: ""
    };
  },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5d5373b5b8827e7c78b166f3/example/product",
      method: "get"
    }).then(res => {
      if (res.status == 200) {
        this.category = res.data.data.category;
        this.bannerPicArray = res.data.data.slides;
        this.advertesPicture = res.data.data.advertesPicture;
        this.recommendGoods = res.data.data.recommend;
        this.floor1 = res.data.data.floor1;
        this.floor1_0 = this.floor1[0];
        this.floor1_1 = this.floor1[1];
        this.floor1_2 = this.floor1[2];
        this.floor1_3 = this.floor1[3];
        this.floor1_4 = this.floor1[4];
        console.log(this.bannerPicArray);
      }

      console.log(res.data.data);
    });
  }
};
</script>

<style  scoped>
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.type-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  font-size: 0.8rem;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 0.6rem;
  text-align: center;
}
.type-bar div img {
  width: 2.5rem;
  height: 2.5rem;
}
.main {
  height: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
}
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}
.swiper-area {
  height: 8.9rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid 1px !important ;
  background-color: #e5017d;
  color: #fff;
}
.contain {
  flex: 1;
  overflow: auto;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 0.85rem;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-item {
  width: 6rem;
  height: 9.2rem;
  border-right: 1px solid #eee;
  font-size: 0.5rem;
  text-align: center;
}
.recommend-body {
  border-bottom: 1px solid #eee;
  height: 9.2rem;
}
.recommend-item img {
  width: 6rem;
}
.swiper-slide {
  width: 7rem;
}
</style>
