<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="배송지 수정"></MypageHeader>
        <div
            class="mt-[44px] w-full px-[28px] text-base font-semibold text-beGray2"
        >
            <div
                class="mb-3 flex min-h-[60px] w-full items-center justify-center border-[1px] border-beGray4"
            >
                기본 배송지 정보가 없습니다.
            </div>
            <div
                class="mb-3 flex min-h-[60px] w-full items-start justify-start border-[1px] border-beGray4 py-3 pl-4"
            >
                <div
                    class="mt-[4px] mr-[10px] box-border h-[18px] w-[20px] rounded-[50%] border-2 border-beGray4"
                ></div>
                <div class="w-full">
                    <div>심호용 010-1234-5678</div>
                    <div>(48548) 부산광역시 남구 신선로 365</div>
                    <div>10공학관 120호</div>
                    <div>공동현관 비밀번호 : 없음</div>
                    <div>수령방법 : 문앞</div>
                </div>
            </div>
            <div
                class="mb-3 flex min-h-[60px] w-full cursor-pointer items-center justify-center border-[1px] border-beGray4"
                @click="$router.push('/mypage/add-address')"
            >
                + 새 배송지 추가하기
            </div>
            <div class="flex w-full items-center">
                <div
                    class="mr-[10px] box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                ></div>
                <div>현재 배송지를 기본으로 설정</div>
            </div>
        </div>
        <div class="absolute bottom-[68px] w-full">
            <LargeBtn title="완료"></LargeBtn>
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
};
</script>
