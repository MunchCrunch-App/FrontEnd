<template>
    <Layout :flex="true" :header="true">
        <MypageHeader title="고객문의"></MypageHeader>
        <div class="flex w-full flex-col justify-center px-5">
            <div
                class="mt-[50px] mb-8 flex w-full items-center justify-center text-lg font-semibold"
            >
                주문상품 관련 문의가 있으신가요?
            </div>
            <div
                class="m-auto mb-[30px] flex h-[52px] w-full cursor-pointer items-center justify-center border-[1px] border-beBlack text-base font-light"
                @click="$router.push('/mypage/write-question')"
            >
                문의하기
            </div>
            <div
                class="m-auto mb-[30px] flex h-[52px] w-full cursor-pointer items-center justify-center border-[1px] border-beBlack text-base font-light"
                @click="$router.push('/mypage/question-list')"
            >
                문의내역
            </div>
            <div
                class="m-auto mb-[30px] flex h-[52px] w-full cursor-pointer items-center justify-center border-[1px] border-beBlack text-base font-light"
                @click="$router.push('/mypage/frequently-asked-question')"
            >
                자주 묻는 질문
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';

export default {
    components: {
        Layout,
        MypageHeader,
    },
};
</script>
