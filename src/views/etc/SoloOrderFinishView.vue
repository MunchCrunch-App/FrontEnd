<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col justify-between bg-white pb-[48px] pt-[56px] font-pretendard"
    >
        <MypageHeader title="주문완료"></MypageHeader>

        <div class="flex flex-col">
            <div
                class="flex items-center justify-center border-b-[1px] py-[22px] text-lg font-medium"
            >
                결제가 완료되어 주문이 완료되었습니다.
            </div>
            <div class="mt-4 w-full px-7">
                <div
                    class="flex h-full min-h-[60px] w-full flex-col border-[1px] border-beGray4 py-3 px-4 text-base font-medium"
                >
                    <div class="flex w-full">
                        <div class="mr-3 min-w-[90px]">주문번호</div>
                        <div class="truncate">1234567890abcd</div>
                    </div>
                    <div class="flex w-full">
                        <div class="mr-3 min-w-[90px]">주문내역</div>
                        <div class="truncate">
                            베베페페 I'm happy 암컷 강아지
                            블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                        </div>
                    </div>
                    <div class="flex w-full">
                        <div class="mr-3 min-w-[90px]">최종결제금액</div>
                        <div>66,500원</div>
                    </div>
                    <div class="flex w-full">
                        <div class="mr-3 min-w-[90px]">결제수단</div>
                        <div>네이버페이</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex h-[46px] w-full gap-2 px-7 text-xl font-semibold">
            <div
                class="flex h-full w-full items-center justify-center rounded-[22px] border-[1px] border-beRed text-beRed"
                @click="
                    $router.push(`/mypage/order-detail/${$route.params.id}`)
                "
            >
                주문 내역 보기
            </div>
            <div
                class="flex h-full w-full items-center justify-center rounded-[22px] bg-beRed text-white"
                @click="$router.push(`/`)"
            >
                쇼핑 계속하기
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
