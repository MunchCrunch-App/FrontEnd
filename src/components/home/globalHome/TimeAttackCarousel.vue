<template>
  <div class="flex justify-start w-full h-[180px] box-border">
    <div class="flex items-center w-full h-full box-border pl-5">
      <div
        class="flex flex-col items-center justify-center min-w-[93px] h-[140px] mr-4 rounded-[32px] bg-beGreen box-border cursor-pointer"
      >
        <img
          class="w-[41.6px] h-[48px] mb-3"
          src="../../../assets/munchcrunch-icon-timeattack-bell.webp"
        />
        <div class="text-[15px] font-bold">타임어택</div>
        <div class="text-sm">마지막 1명!</div>
      </div>
      <swiper
        class="h-[140px] w-full"
        slidesPerView="auto"
        :spaceBetween="15"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @touchStart="(swiper, event) => event.stopPropagation()"
      >
        <swiper-slide
          v-for="timeAttackItem in timeAttackLists"
          :key="timeAttackItem.id"
          class="swiper-slide cursor-pointer"
        >
          <div class="relative">
            <img
              class="w-[100px] h-[100px] mb-1"
              :src="timeAttackItem.imageUrl"
              alt="timeAttackItem"
            />
            <div
              class="absolute bottom-0 left-[50%] translate-x-[-50%] flex w-full h-[26px] bg-beRed rounded-[13px] opacity-[0.56]"
            ></div>
            <div
              class="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-2px] flex items-center justify-center w-full bg-transparent text-white text-sm font-semibold"
            >
              {{ timeAttackItem.countTime }}
            </div>
          </div>
          <div
            class="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium"
          >
            {{ timeAttackItem.title }}
          </div>
          <div
            class="flex items-center justify-center text-base font-bold text-beRed"
          >
            {{ timeAttackItem.price.toLocaleString() }}원
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import api from '@/api/api';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
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
              '0',
            );
            const mins = String(Math.floor((countTime / 60000) % 60)).padStart(
              2,
              '0',
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
    const { data } = await api.get('home/recommendation-timeattack');
    data.result.forEach((item) => {
      item.countTime = '00:00:00';
    });
    this.timeAttackLists = data.result;
  },
};
</script>

<style>
.swiper-slide {
  min-width: 100px;
  width: 100px;
}
</style>
