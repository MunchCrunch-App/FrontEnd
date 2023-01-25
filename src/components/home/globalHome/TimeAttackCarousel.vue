<template>
  <div class="flex justify-start w-full h-[180px] my-8 box-border">
    <div class="flex w-full h-full box-border px-5">
      <div
        class="flex flex-col items-center justify-center w-[120px] h-full mr-5 rounded-[32px] bg-beGreen box-border"
      >
        <img
          class="w-[52px] h-[52px] mb-5"
          src="../../../assets/no-pictures.png"
        />
        <div
          class="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap"
        >
          타임어택
        </div>
        <div class="text-lg">마지막 1명!</div>
      </div>
      <swiper
        class="h-full w-full"
        :slidesPerView="4"
        :spaceBetween="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @touchStart="(swiper, event) => event.stopPropagation()"
      >
        <swiper-slide
          v-for="timeAttackItem in timeAttackLists"
          :key="timeAttackItem.id"
        >
          <div class="relative w-full">
            <img
              class="w-full h-32"
              :src="timeAttackItem.imageUrl"
              alt="timeAttackItem"
            />
            <div
              class="absolute bottom-0 left-[50%] flex items-center justify-center w-full translate-x-[-50%] bg-beRed2 rounded-[24px] opacity-80 text-white"
            >
              {{ timeAttackItem.countTime }}
            </div>
          </div>
          <div class="overflow-hidden text-ellipsis whitespace-nowrap">
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
import api from "../../../api/api";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      timeAttackLists: [],
    };
  },
  methods: {
    onSwiper(swiper) {},
    onSlideChange(swiper) {},
    onClickTab(index) {},
    Timer(limitedTime) {
      setTimeout(() => {
        const targetTime = new Date(limitedTime).getTime();
        const nowTime = new Date().getTime();
        const countTime = targetTime - nowTime;

        const secs = Math.floor((countTime / 1000) % 60);
        const mins = Math.floor((countTime / 60000) % 60);
        const hours = Math.floor(countTime / 3600000);
        return `${hours}:${mins}:${secs}`;
      }, 1000);
    },
  },
  watch: {
    timeAttackLists: {
      handler(newValue) {
        setTimeout(() => {
          newValue.forEach((item) => {
            const targetTime = new Date(item.limitedAt).getTime();
            const nowTime = new Date().getTime();
            const countTime = targetTime - nowTime;

            const secs = String(Math.floor((countTime / 1000) % 60)).padStart(
              2,
              "0"
            );
            const mins = String(Math.floor((countTime / 60000) % 60)).padStart(
              2,
              "0"
            );
            const hours = Math.floor(countTime / 3600000);
            item.countTime = `${hours}:${mins}:${secs}`;
          });
        }, 1000);
      },
      deep: true,
    },
  },
  async created() {
    const { data } = await api.get("/recommendation-timeattack");
    data.result.forEach((item) => {
      item.countTime = "00:00:00";
    });
    this.timeAttackLists = data.result;
  },
};
</script>

<style></style>
