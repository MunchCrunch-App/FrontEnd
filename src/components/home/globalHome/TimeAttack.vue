<template>
  <div class="flex justify-start w-full h-[180px] my-8 box-border">
    <div class="flex w-full h-full box-border px-5">
      <swiper
        class="h-full w-full"
        :slidesPerView="4"
        :spaceBetween="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @touchStart="(swiper, event) => event.stopPropagation()"
      >
        <swiper-slide>
          <div
            class="flex flex-col items-center justify-center h-full rounded-[32px] bg-beGreen box-border"
          >
            <img
              class="w-[52px] h-[52px] mb-5"
              src="../../../assets/no-pictures.png"
            />
            <div class="text-lg font-bold">타임어택</div>
            <div class="text-lg">마지막 1명!</div>
          </div>
        </swiper-slide>
        <swiper-slide
          v-for="timeAttackItem in timeAttackLists"
          :key="timeAttackItem.id"
        >
          <img
            class="w-full h-32"
            :src="timeAttackItem.imageUrl"
            alt="timeAttackItem"
          />
          <div
            class="flex w-full overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {{ timeAttackItem.title }}
          </div>
          <div
            class="flex items-center justify-center text-xl font-bold text-beRed"
          >
            {{ timeAttackItem.price.toLocaleString() }}원
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  props: {
    timeAttackLists: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {
    onSwiper(swiper) {},
    onSlideChange(swiper) {},
    onClickTab(index) {},
  },
};
</script>

<style></style>
