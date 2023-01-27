<template>
  <div
    class="relative max-w-[428px] w-full min-h-screen h-full pt-[55px] pb-[48px] font-pretendard"
  >
    <Header></Header>

    <div
      class="flex items-center justify-evenly w-full h-[46px] px-5 bg-white box-border text-beBlack"
    >
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer"
        :class="
          categoryState === 0
            ? 'border-beRed font-bold text-beRed'
            : 'border-transparent font-medium '
        "
        @click="onClickTab(0)"
      >
        추천
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer"
        :class="
          categoryState === 1
            ? 'border-beRed font-bold text-beRed'
            : 'border-transparent font-medium '
        "
        @click="onClickTab(1)"
      >
        특가
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer"
        :class="
          categoryState === 2
            ? 'border-beRed font-bold text-beRed'
            : 'border-transparent font-medium '
        "
        @click="onClickTab(2)"
      >
        사료
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer"
        :class="
          categoryState === 3
            ? 'border-beRed font-bold text-beRed'
            : 'border-transparent font-medium '
        "
        @click="onClickTab(3)"
      >
        간식
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer font-[500]"
        :class="
          categoryState === 4
            ? 'border-beRed font-bold text-beRed'
            : 'border-transparent font-medium '
        "
        @click="onClickTab(4)"
      >
        용품
      </div>
    </div>
    <div class="w-full h-[13px] bg-beGray"></div>

    <div class="w-full h-full">
      <swiper
        class="h-full w-full bg-white"
        :threshold="40"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="h-full w-full flex justify-center items-center">
          <div class="flex flex-col h-full w-full">
            <TimeAttackCarousel></TimeAttackCarousel>
            <div class="w-full h-[13px] bg-beGray"></div>
            <div class="w-full h-[98px] flex items-center justify-center gap-3">
              <div
                class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
              >
                <img
                  class="w-[40px] h-[38px]"
                  src="../assets/munchcrunch-time-attack.webp"
                  alt="tima-attack"
                />
                <div class="text-xs font-medium">타임어택</div>
              </div>
              <div
                class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
              >
                <img
                  class="w-[40px] h-[38px]"
                  src="../assets/munchcrunch-solo.webp"
                  alt="tima-attack"
                />
                <div class="text-xs font-medium">솔로구매</div>
              </div>
              <div
                class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
              >
                <img
                  class="w-[40px] h-[38px]"
                  src="../assets/munchcrunch-munchspick.webp"
                  alt="tima-attack"
                />
                <div class="text-xs font-medium">먼치스픽</div>
              </div>
              <div
                class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
              >
                <img
                  class="w-[40px] h-[38px]"
                  src="../assets/munchcrunch-button-leader.webp"
                  alt="tima-attack"
                />
                <div class="text-xs font-medium">리더스픽</div>
              </div>
              <div
                class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
              >
                <img
                  class="w-[40px] h-[38px]"
                  src="../assets/munchcrunch-special-price.webp"
                  alt="tima-attack"
                />
                <div class="text-xs font-medium">특가구매</div>
              </div>
              <div
                class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
              >
                <img
                  class="w-[40px] h-[38px]"
                  src="../assets/munchcrunch-team.webp"
                  alt="tima-attack"
                />
                <div class="text-xs font-medium">팀구독</div>
              </div>
            </div>
            <BannerCarousel></BannerCarousel>
            <ProductList :products="recommendationProductList"></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide class="w-full h-full flex justify-center items-center">
          <div class="flex flex-col h-full w-full">
            <TimeAttackCarousel></TimeAttackCarousel>
            <BannerCarousel></BannerCarousel>
            <ProductList :products="specialPriceProductList"></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide class="w-full h-full flex justify-center items-center">
          <div class="flex flex-col h-full w-full">
            <TimeAttackCarousel></TimeAttackCarousel>
            <BannerCarousel></BannerCarousel>
            <ProductList :products="feedsProductList"></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide class="w-full h-full flex justify-center items-center"
          ><div class="flex flex-col h-full w-full">
            <TimeAttackCarousel></TimeAttackCarousel>
            <BannerCarousel></BannerCarousel>
            <ProductList :products="snacksProductList"></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide class="w-full h-full flex justify-center items-center"
          ><div class="flex flex-col h-full w-full">
            <TimeAttackCarousel></TimeAttackCarousel>
            <BannerCarousel></BannerCarousel>
            <ProductList :products="goodsproductList"></ProductList>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/global/Header.vue';
import Footer from '../components/global/Footer.vue';
import TimeAttackCarousel from '../components/home/globalHome/TimeAttackCarousel.vue';
import BannerCarousel from '../components/home/globalHome/BannerCarousel.vue';
import ProductList from '../components/home/globalHome/ProductList.vue';
import api from '../api/api';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Header: Header,
    Footer: Footer,
    TimeAttackCarousel: TimeAttackCarousel,
    BannerCarousel: BannerCarousel,
    ProductList: ProductList,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swipeRef: null,
      categoryState: 0,
      recommendationProductList: [],
      specialPriceProductList: [],
      feedsProductList: [],
      snacksProductList: [],
      goodsproductList: [],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swipeRef = swiper;
    },
    onSlideChange(swiper) {
      this.categoryState = swiper.activeIndex;
      if (swiper.activeIndex === 1) this.getFeedsProductList();
      if (swiper.activeIndex === 2) this.getSnacksProductList();
      if (swiper.activeIndex === 3) this.getGoodsProductList();
    },
    onClickTab(index) {
      this.swipeRef?.slideTo(index, 200);
      this.categoryState = index;
      if (index === 2) this.getFeedsProductList();
      if (index === 3) this.getSnacksProductList();
      if (index === 4) this.getGoodsProductList();
    },
    async getRecommendationProductList() {
      let res = await api.get('home/recommendation-itemlist');
      this.recommendationProductList = res.data.result;
    },
    async getSpecialPriceProductList() {
      let res = await api.get('home/special-price-itemlist');
      this.specialPriceProductList = res.data.result;
    },
    async getFeedsProductList() {
      let res = await api.get('home/feeds-itemlist');
      this.feedsProductList = res.data.result;
    },
    async getSnacksProductList() {
      let res = await api.get('home/snacks-itemlist');
      this.snacksProductList = res.data.result;
    },
    async getGoodsProductList() {
      let res = await api.get('home/goods-itemlist');
      this.goodsproductList = res.data.result;
    },
  },
  async created() {
    this.getRecommendationProductList();
    this.getSpecialPriceProductList();
  },
};
</script>
