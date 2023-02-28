<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="문의내역"></MypageHeader>
        <div
            class="mt-8 flex w-full flex-col justify-center border-b-[1px] border-beGray pb-5"
        >
            <div class="flex h-[50px] w-full px-5 text-base font-medium">
                <div
                    class="flex w-full cursor-pointer items-center justify-center border-[1px] border-r-0 border-beBlack"
                    :class="
                        tabState === 0
                            ? 'bg-beBlack font-bold text-white'
                            : null
                    "
                    @click="tabState = 0"
                >
                    최근 1개월
                </div>
                <div
                    class="flex w-full cursor-pointer items-center justify-center border-[1px] border-r-0 border-beBlack"
                    :class="
                        tabState === 1
                            ? 'bg-beBlack font-bold text-white'
                            : null
                    "
                    @click="tabState = 1"
                >
                    최근 3개월
                </div>
                <div
                    class="flex w-full cursor-pointer items-center justify-center border-[1px] border-beBlack"
                    :class="
                        tabState === 2
                            ? 'bg-beBlack font-bold text-white'
                            : null
                    "
                    @click="tabState = 2"
                >
                    기간조회
                </div>
            </div>
        </div>
        <div class="flex w-full flex-col">
            <div class="flex w-full flex-col">
                <div class="w-full px-5 pt-[26px]">
                    <div class="text-[17px] font-medium">
                        Q : 발송언제 시작되나요?
                    </div>
                    <div
                        class="mt-3 border-b-[1px] border-beGray pb-4 text-[15px] font-light"
                    >
                        심호용 2022.11.12
                    </div>
                </div>
                <div
                    class="mt-4 flex w-full border-b-[10px] border-beGray px-5 pb-4"
                >
                    <div
                        class="min-w-5 mr-3 w-5 whitespace-nowrap text-[17px] font-medium leading-tight"
                    >
                        A :
                    </div>
                    <div class="text-base font-light leading-tight">
                        담당물류사 사정으로 인해, 오늘 나갈 물량들이 전량
                        다음날로 연기 되었습니다.
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-auto">
            <LargeBtn title="문의하기"></LargeBtn>
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
            tabState: 0,
        };
    },
};
</script>
