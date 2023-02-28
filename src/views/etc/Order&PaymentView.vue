<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[56px] font-pretendard"
    >
        <MypageHeader title="주문/결제"></MypageHeader>

        <div class="flex flex-col border-b-[10px] border-beGray px-7 py-[30px]">
            <div class="flex items-center justify-between">
                <div class="text-lg font-medium">배송지 정보</div>
                <div
                    class="flex h-[30px] w-20 cursor-pointer items-center justify-center rounded-[14px] border-[1px] border-black text-sm font-light"
                    @click="$router.push('/mypage/edit-address')"
                >
                    변경하기
                </div>
            </div>
            <div v-if="false" class="mt-[22px] text-base font-light">
                기본 배송지 정보가 없습니다.
            </div>
            <div
                v-else
                class="mt-4 flex min-h-[60px] w-full items-start justify-start border-[1px] border-beGray4 py-3 px-4 text-base font-semibold text-beGray2"
            >
                <div class="w-full">
                    <div>심호용 010-1234-5678</div>
                    <div class="break-keep">
                        (48548) 부산광역시 남구 신선로 365 10공학관 120호
                    </div>
                    <div>공동현관 비밀번호 : 없음</div>
                    <div>수령방법 : 문앞</div>
                </div>
            </div>
        </div>

        <div
            class="flex flex-col border-b-[10px] border-beGray px-7 py-9 text-base font-medium"
        >
            <div class="text-lg">주문상품</div>
            <div class="mt-5 flex">
                <div class="mr-[18px] h-[116px] w-[116px]">
                    <img
                        class="h-full w-full"
                        src="../../assets/example.png"
                        alt=""
                    />
                </div>
                <div class="mt-2">
                    <div class="break-keep leading-tight">
                        보솜패드 BOSOM 배변패드 - 표준형
                    </div>
                    <div class="mt-3 text-[15px] font-light text-beGray2">
                        옵션 : xxx
                    </div>
                </div>
            </div>
            <div class="mt-5 flex">
                <div class="min-w-[100px]">총 상품 가격</div>
                <div class="text-[15px] font-medium text-beGray2">xxxx원</div>
            </div>
            <div class="flex">
                <div class="min-w-[100px]">배송비</div>
                <div class="text-[15px] font-medium text-beGray2">
                    xxxx원 or 무료배송
                </div>
            </div>
            <div class="flex">
                <div class="min-w-[100px]">총 결제 금액</div>
                <div class="text-[15px] font-medium text-beGray2">xxxx원</div>
            </div>
            <div class="mt-[28px] flex">
                <div class="min-w-[100px]">주문수량</div>
                <div class="flex text-[15px] font-medium text-beGray2">
                    <div class="cursor-pointer" @click="onCountMinus">-</div>
                    <div class="flex min-w-[20px] items-center justify-center">
                        {{ count }}
                    </div>
                    <div class="cursor-pointer" @click="onCountPlus">+</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col border-b-[10px] border-beGray px-7 py-9">
            <div class="flex items-center justify-between">
                <div class="text-lg font-medium">결제방법</div>
                <div
                    class="cursor-pointer text-[15px] font-light"
                    @click="$router.push('/payment-method')"
                >
                    결제방법변경 >
                </div>
            </div>
            <div class="mt-8 grid grid-cols-2 gap-2">
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
        <div class="flex flex-col px-7 py-9">
            <div>[필수] 개인정보 제공 동의 : 회사명</div>
            <div class="mt-2 border-b-[1px] border-beGray pb-[30px]">
                상세내용확인 >
            </div>
            <div class="mt-5 flex items-center">
                <div
                    class="mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                ></div>
                <div
                    class="text-[16px] font-medium leading-tight tracking-tight"
                >
                    위 주문 내용을 확인 하였으며, 정보제공 등에 동의합니다.
                </div>
            </div>
        </div>

        <div
            class="flex w-full cursor-pointer items-center justify-center bg-beRed py-3 px-5 text-xl font-medium text-white"
            @click="$router.push('/solo-order-finish')"
        >
            <span class="font-semibold">00,000</span>원 결제하기
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
export default {
    components: {
        MypageHeader,
    },

    data() {
        return {
            count: 1,
            cardState: 0,
        };
    },

    methods: {
        onCountMinus() {
            if (this.count < 2) return;
            else this.count--;
        },

        onCountPlus() {
            this.count++;
        },
    },
};
</script>
