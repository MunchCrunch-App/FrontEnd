<template>
    <div
        class="fixed bottom-0 z-10 box-border flex w-full max-w-[428px] items-center justify-between border-t-[0.5px] border-beGray bg-white py-3 px-5"
    >
        <div class="mr-3 w-fit">
            <HeartIcon></HeartIcon>
        </div>
        <div class="flex w-full justify-between gap-3">
            <div
                class="flex h-[52px] w-full flex-col items-center justify-center bg-bePink2 text-white"
            >
                <div class="text-base font-medium leading-5">혼자 구매하기</div>
                <div class="text-lg font-semibold leading-5">21,200원</div>
            </div>
            <div
                class="flex h-[52px] w-full flex-col items-center justify-center bg-beRed text-white"
            >
                <div class="text-base font-medium leading-5">
                    2인 팀구매 열기
                </div>
                <div class="text-lg font-semibold leading-5">15,700원</div>
            </div>
        </div>
    </div>
</template>

<script>
import HeartIcon from '@/assets/svgComponents/HeartIcon.vue';

export default {
    components: {
        HeartIcon,
    },
};
</script>
