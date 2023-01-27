<template>
  <div class="w-full h-[200px]">
    <swiper
      class="h-full w-full bg-white"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :modules="modules"
      @touchStart="(swiper, event) => event.stopPropagation()"
    >
      <swiper-slide>
        <img
          class="cursor-pointer w-full h-[200px]"
          src="../../../assets/munchcrunch-banner.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="cursor-pointer w-full h-[200px]"
          src="../../../assets/munchcrunch-banner2.webp"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="cursor-pointer w-full h-[200px]"
          src="../../../assets/munchcrunch-banner3.jpg"
          alt="banner"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  methods: {},
};
</script>

<style></style>
