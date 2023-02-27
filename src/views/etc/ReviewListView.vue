<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[108px] font-pretendard"
    >
        <MypageHeader title="구매후기"></MypageHeader>

        <div class="mt-5 flex w-full flex-col px-5">
            <div class="text-[46px] font-semibold leading-tight">5.0</div>
            <div class="flex items-center">
                <div class="flex">
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26"></Star>
                </div>
                <div class="text-2xl font-light">
                    (<span class="font-bold">327</span>건)
                </div>
            </div>
        </div>

        <div class="mt-[32px] flex w-full text-beGray2">
            <div
                class="flex w-full cursor-pointer items-center justify-center border-b-[1px] border-beGray3 py-3"
                :class="
                    tabState === 0
                        ? 'border-b-[2px] border-beGray4 font-bold text-beBlack'
                        : null
                "
                @click="tabState = 0"
            >
                추천순
            </div>
            <div
                class="flex w-full cursor-pointer items-center justify-center border-b-[1px] border-beGray3 py-3"
                :class="
                    tabState === 1
                        ? 'border-b-[2px] border-beGray4 font-bold text-beBlack'
                        : null
                "
                @click="tabState = 1"
            >
                최신순
            </div>
            <div
                class="flex w-full cursor-pointer items-center justify-center border-b-[1px] border-beGray3 py-3"
                :class="
                    tabState === 2
                        ? 'border-b-[2px] border-beGray4 font-bold text-beBlack'
                        : null
                "
                @click="tabState = 2"
            >
                사진후기
            </div>
        </div>

        <div class="flex w-full flex-col">
            <ReviewContent slotState="On"> </ReviewContent>
        </div>
        <DetailFooter></DetailFooter>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import Star from '@/assets/svgComponents/Star.vue';
import ReviewContent from '@/components/global/ReviewContent.vue';
import DetailFooter from '@/components/global/DetailFooter.vue';

export default {
    components: {
        MypageHeader,
        Star,
        ReviewContent,
        DetailFooter,
    },
    data() {
        return {
            tabState: 0,
        };
    },
};
</script>
