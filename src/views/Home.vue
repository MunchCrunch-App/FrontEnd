<template>
  <div class="relative max-w-[600px] w-full min-h-screen h-full py-[70px]">
    <Header></Header>

    <div
      class="flex items-center justify-evenly w-full h-[52px] px-5 bg-white box-border"
    >
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer text-[20px]"
        :class="
          categoryState === 0 ? ' border-beRed font-bold' : 'border-transparent'
        "
        @click="onClickTab(0)"
      >
        추천
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer text-[20px]"
        :class="
          categoryState === 1 ? ' border-beRed font-bold' : 'border-transparent'
        "
        @click="onClickTab(1)"
      >
        특가
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer text-[20px]"
        :class="
          categoryState === 2 ? ' border-beRed font-bold' : 'border-transparent'
        "
        @click="onClickTab(2)"
      >
        사료
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer text-[20px]"
        :class="
          categoryState === 3 ? ' border-beRed font-bold' : 'border-transparent'
        "
        @click="onClickTab(3)"
      >
        간식
      </div>
      <div
        class="flex items-center justify-center w-full h-full border-b-[3px] cursor-pointer text-[20px]"
        :class="
          categoryState === 4 ? ' border-beRed font-bold' : 'border-transparent'
        "
        @click="onClickTab(4)"
      >
        용품
      </div>
    </div>
    <div class="w-full h-4 bg-beGray"></div>

    <div class="w-full h-full">
      <swiper
        class="h-full w-full bg-white"
        :threshold="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="h-full w-full flex justify-center items-center">
          <div class="flex flex-col h-full w-full">
            <TimeAttack :timeAttackLists="timeAttackLists"></TimeAttack>
            <div class="w-full h-4 bg-beGray"></div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="w-full h-full flex justify-center items-center bg-slate-400"
        >
          Slide 2
        </swiper-slide>
        <swiper-slide class="w-full h-full flex justify-center items-center">
          Slide 3
        </swiper-slide>
        <swiper-slide
          class="w-full h-full flex justify-center items-center bg-slate-400"
          >Slide 4
        </swiper-slide>
        <swiper-slide
          class="w-full h-full flex justify-center items-center bg-slate-400"
          >Slide 5
        </swiper-slide>
      </swiper>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/global/Header.vue";
import Footer from "../components/global/Footer.vue";
import TimeAttack from "../components/home/globalHome/TimeAttack.vue";
import api from "../api/api";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Header: Header,
    Footer: Footer,
    TimeAttack: TimeAttack,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swipeRef: null,
      categoryState: 0,
      timeAttackLists: [],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swipeRef = swiper;
    },
    onSlideChange(swiper) {
      this.categoryState = swiper.activeIndex;
    },
    onClickTab(index) {
      this.swipeRef?.slideTo(index, 200);
      this.categoryState = index;
    },
  },
  async created() {
    const { data } = await api.get("/recommendation-timeattack");
    this.timeAttackLists = data.result;
  },
};
</script>

<style></style>
