<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="문의하기"></MypageHeader>
        <div class="flex w-full flex-col items-center justify-center px-[26px]">
            <div class="mt-8 flex h-[50px] w-full max-w-[378px] text-base">
                <div
                    class="flex min-w-[60px] items-center justify-center whitespace-nowrap font-semibold"
                >
                    제목
                </div>
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
            <textarea
                class="mt-5 h-[300px] w-full resize-none border-[1px] border-beGray4 p-5 outline-none"
                placeholder="문의하실 내용을 상세히 적어주세요."
            ></textarea>
        </div>
        <div class="mt-auto">
            <LargeBtn title="문의내용 작성완료"></LargeBtn>
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
            selectBoxList: ['배송문의', '반품/교환/환불', '주문/결제', '기타'],
            selectedBoxList: '배송문의',
            selectBoxListState: false,
        };
    },
};
</script>
