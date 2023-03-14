<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="상품문의"></MypageHeader>

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
            <LargeBtn
                title="문의하기"
                @click="
                    $router.push(`/write-product-question/${$route.params.id}`)
                "
            ></LargeBtn>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import LargeBtn from '@/components/global/LargeBtn.vue';

export default {
    components: {
        Layout,
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
