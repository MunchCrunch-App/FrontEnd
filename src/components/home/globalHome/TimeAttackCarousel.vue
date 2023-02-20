<template>
    <div class="box-border flex h-[180px] w-full justify-start">
        <div class="box-border flex h-full w-full items-center pl-5">
            <div
                class="mr-4 box-border flex h-[140px] min-w-[93px] cursor-pointer flex-col items-center justify-center rounded-[32px] bg-beGreen"
            >
                <img
                    class="mb-3 h-[48px] w-[41.6px]"
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
                            class="mb-1 h-[100px] w-[100px]"
                            :src="timeAttackItem.imageUrl"
                            alt="timeAttackItem"
                        />
                        <div
                            class="absolute bottom-0 left-[50%] flex h-[26px] w-full translate-x-[-50%] rounded-[13px] bg-beRed opacity-[0.56]"
                        ></div>
                        <div
                            class="absolute bottom-0 left-[50%] flex w-full translate-x-[-50%] translate-y-[-2px] items-center justify-center bg-transparent text-sm font-semibold text-white"
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
import { mockApi } from '@/api/api';
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

                        const secs = String(
                            Math.floor((countTime / 1000) % 60),
                        ).padStart(2, '0');
                        const mins = String(
                            Math.floor((countTime / 60000) % 60),
                        ).padStart(2, '0');
                        const hours = Math.floor(countTime / 3600000);
                        item.countTime = `${hours}:${mins}:${secs}`;
                    });
                }, 1000);
            },
            deep: true,
        },
    },
    async created() {
        const { data } = await mockApi.get('home/recommendation-timeattack');
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
