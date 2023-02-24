<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="자주묻는 질문"></MypageHeader>
        <div class="flex w-full flex-col justify-center">
            <div
                class="flex h-[100px] w-full items-center border-b-[1px] px-[26px] text-base"
            >
                <div
                    class="relative box-border flex h-[50px] w-full cursor-pointer items-center justify-between border-[1px] border-beBlack px-5 font-medium"
                    @click="selectBoxListState = !selectBoxListState"
                >
                    <div>
                        {{ selectedBoxList }}
                    </div>
                    <img
                        class="w-5"
                        src="@/assets/icon-left.png"
                        alt="select-box"
                    />
                    <div
                        class="absolute top-[1px] left-0 box-border flex w-full translate-y-[50%] flex-col border-[1px] border-beBlack bg-white"
                        :class="selectBoxListState ? null : 'hidden'"
                    >
                        <div
                            class="w-full px-5"
                            :class="
                                selectedBoxList === selectBox
                                    ? ' bg-beGray3'
                                    : null
                            "
                            v-for="(selectBox, index) in selectBoxList"
                            :key="index"
                            @click="selectedBoxList = selectBox"
                        >
                            {{ selectBox }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex w-full flex-col">
                <div class="flex w-full flex-col">
                    <div class="w-full px-5 pt-[18px]">
                        <div
                            class="border-b-[1px] border-beGray pb-4 text-[17px] font-medium"
                        >
                            Q1 : 배송조회가 안돼요.
                        </div>
                    </div>
                    <div
                        class="mt-4 flex w-full cursor-pointer border-b-[10px] border-beGray px-5 pb-4"
                        @click="questionState = !questionState"
                    >
                        <div
                            class="min-w-5 mr-3 w-5 whitespace-nowrap text-[17px] font-medium leading-tight"
                        >
                            A :
                        </div>
                        <div
                            v-show="questionState"
                            class="text-base font-light leading-tight"
                        >
                            ......
                        </div>
                        <div
                            v-show="!questionState"
                            class="text-base font-light leading-tight"
                        >
                            담당물류사 사정으로 인해, 오늘 나갈 물량들이 전량
                            다음날로 연기 되었습니다.
                        </div>
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
            selectBoxList: [
                '배송관련',
                '반품/교환/환불 관련',
                '결제관련',
                '기타 서비스 관련',
            ],
            selectedBoxList: '배송관련',
            selectBoxListState: false,
            questionState: true,
        };
    },
};
</script>
