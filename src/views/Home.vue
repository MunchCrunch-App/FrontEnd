<template>
  <div
    class="relative max-w-[428px] w-full min-h-screen h-full pt-[55px] pb-[48px] font-pretendard"
  >
    <div
      class="flex items-center justify-evenly w-full h-[46px] px-5 bg-white box-border text-beBlack"
    >
      <div
        v-for="(tab, index) in largeTabsData"
        :key="index"
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer"
        :class="
          categoryState === tab.state
            ? 'border-beRed font-bold text-beRed'
            : 'border-transparent font-medium '
        "
        @click="onClickTab(tab.state)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="w-full h-[13px] bg-beGray"></div>

    <div class="w-full h-full">
      <swiper
        class="w-full h-full bg-white"
        :threshold="40"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="h-full w-full flex flex-col justify-center items-center"
        >
          <TimeAttackCarousel></TimeAttackCarousel>
          <div class="w-full h-[13px] bg-beGray"></div>
          <div class="w-full h-[98px] flex items-center justify-center gap-3">
            <div
              v-for="(tab, index) in smallTabsData"
              :key="index"
              class="flex flex-col justify-center items-center gap-2 w-[54px] cursor-pointer"
            >
              <img class="w-[40px] h-[38px]" :src="tab.image" />
              <div class="text-xs font-medium">{{ tab.title }}</div>
            </div>
          </div>
          <BannerCarousel></BannerCarousel>
          <div class="grid grid-cols-2 gap-5 m-5">
            <ProductList
              v-for="product in recommendationProductList"
              :key="product.id"
              :product="product"
            ></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide
          class="w-full h-fit flex flex-col justify-center items-center"
        >
          <TimeAttackCarousel></TimeAttackCarousel>
          <BannerCarousel></BannerCarousel>
          <div class="grid grid-cols-2 gap-5 m-5">
            <ProductList
              v-for="product in specialPriceProductList"
              :key="product.id"
              :product="product"
            ></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide
          class="w-full h-full flex flex-col justify-center items-center"
        >
          <TimeAttackCarousel></TimeAttackCarousel>
          <BannerCarousel></BannerCarousel>
          <div class="grid grid-cols-2 gap-5 m-5">
            <ProductList
              v-for="product in feedsProductList"
              :key="product.id"
              :product="product"
            ></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide
          class="w-full h-full flex flex-col justify-center items-center"
        >
          <TimeAttackCarousel></TimeAttackCarousel>
          <BannerCarousel></BannerCarousel>
          <div class="grid grid-cols-2 gap-5 m-5">
            <ProductList
              v-for="product in snacksProductList"
              :key="product.id"
              :product="product"
            ></ProductList>
          </div>
        </swiper-slide>

        <swiper-slide
          class="w-full h-full flex flex-col justify-center items-center"
        >
          <TimeAttackCarousel></TimeAttackCarousel>
          <BannerCarousel></BannerCarousel>
          <div class="grid grid-cols-2 gap-5 m-5">
            <ProductList
              v-for="product in goodsproductList"
              :key="product.id"
              :product="product"
            ></ProductList>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import TimeAttackCarousel from '@/components/home/globalHome/TimeAttackCarousel.vue';
import BannerCarousel from '@/components/home/globalHome/BannerCarousel.vue';
import ProductList from '@/components/home/globalHome/Product.vue';
import timeAttack from '@/assets/munchcrunch-time-attack.webp';
import solo from '@/assets/munchcrunch-solo.webp';
import munchspick from '@/assets/munchcrunch-munchspick.webp';
import leader from '@/assets/munchcrunch-button-leader.webp';
import specialPrice from '@/assets/munchcrunch-special-price.webp';
import team from '@/assets/munchcrunch-team.webp';
import api from '@/api/api';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
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
      smallTabsData: [
        {
          title: '타임어택',
          image: timeAttack,
        },
        {
          title: '솔로구매',
          image: solo,
        },
        {
          title: '먼치스픽',
          image: munchspick,
        },
        {
          title: '리더스픽',
          image: leader,
        },
        {
          title: '특가구매',
          image: specialPrice,
        },
        {
          title: '팀구독',
          image: team,
        },
      ],
      largeTabsData: [
        {
          title: '추천',
          state: 0,
        },
        {
          title: '특가',
          state: 1,
        },
        {
          title: '사료',
          state: 2,
        },
        {
          title: '간식',
          state: 3,
        },
        {
          title: '용품',
          state: 4,
        },
      ],
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
