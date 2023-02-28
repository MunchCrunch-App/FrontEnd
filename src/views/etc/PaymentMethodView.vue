<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col justify-between bg-white pb-[48px] pt-[56px] font-pretendard"
    >
        <MypageHeader title="결제방법"></MypageHeader>

        <div class="flex flex-col px-7">
            <div class="mt-[30px] grid grid-cols-2 gap-2">
                <div
                    class="flex h-[46px] cursor-pointer items-center justify-center border-[1px]"
                    :class="
                        cardState === 0
                            ? 'border-beRed text-beRed'
                            : 'border-beGray4'
                    "
                    @click="cardState = 0"
                >
                    신용/체크카드
                </div>
                <div
                    class="flex h-[46px] cursor-pointer items-center justify-center border-[1px] border-beGray4"
                    :class="
                        cardState === 1
                            ? 'border-beRed text-beRed'
                            : 'border-beGray4'
                    "
                    @click="cardState = 1"
                >
                    간편계좌이체
                </div>
                <div
                    class="flex h-[46px] cursor-pointer items-center justify-center border-[1px] border-beGray4"
                    :class="
                        cardState === 2
                            ? 'border-beRed text-beRed'
                            : 'border-beGray4'
                    "
                    @click="cardState = 2"
                >
                    카카오 페이
                </div>
                <div
                    class="flex h-[46px] cursor-pointer items-center justify-center border-[1px] border-beGray4"
                    :class="
                        cardState === 3
                            ? 'border-beRed text-beRed'
                            : 'border-beGray4'
                    "
                    @click="cardState = 3"
                >
                    네이버 페이
                </div>
            </div>
            <div class="mt-5 flex items-center">
                <div
                    class="mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                ></div>
                <div class="text-[17px] font-light">
                    기본 결제 수단으로 지정
                </div>
            </div>
        </div>
        <div class="">
            <LargeBtn title="저장"></LargeBtn>
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import LargeBtn from '@/components/global/LargeBtn.vue';

export default {
    components: {
        MypageHeader,
        LargeBtn,
    },

    data() {
        return {
            cardState: 0,
        };
    },

    methods: {},
};
</script>
