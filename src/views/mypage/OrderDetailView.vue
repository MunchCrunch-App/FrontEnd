<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="주문상세"></MypageHeader>
        <div class="w-full">
            <div
                class="mt-[34px] flex w-full border-b-[1px] px-[28px] pb-[12px]"
            >
                <div class="mr-5 h-[92px] w-[92px]">
                    <img src="../../assets/no-pictures.png" alt="product" />
                </div>
                <div>
                    <div class="mb-5 text-[17px] font-bold">
                        베베페페 암컷강아지 기저귀
                    </div>
                    <div class="text-[17px] font-bold">2022.11.09 주문완료</div>
                    <div class="text-[16px] font-medium leading-tight">
                        주문수량:1개
                    </div>
                    <div class="text-[16px] font-medium leading-tight">
                        상품가격: 12,000원
                    </div>
                    <div class="text-[16px] font-medium leading-tight">
                        배송비: 4,000원
                    </div>
                    <div class="text-[16px] font-medium leading-tight">
                        총 결제금액: 16,000원
                    </div>
                </div>
            </div>
            <div class="mt-6 w-full px-[28px]">
                <div class="mb-2 text-base font-semibold">배송지</div>
                <div
                    class="border-[1px] border-beGray4 p-[14px] text-base font-semibold text-beGray2"
                >
                    <div>심호용 010-1234-1234</div>
                    <div class="break-keep">
                        (48548) 부산광역시 남구 신선로 362 10공학관 120호
                    </div>
                    <div>공동현관 비밀번호 : 없음</div>
                    <div>수령방법 : 문 앞</div>
                </div>
                <div class="mt-8 mb-2 text-base font-semibold">결제방법</div>
                <div
                    class="border-[1px] border-beGray4 p-[14px] text-base font-semibold text-beGray2"
                >
                    <div>신용카드</div>
                    <div>현대 5221 **** **** 1907</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';

export default {
    components: {
        MypageHeader,
    },
};
</script>
