<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="팀 구매 진행현황"></MypageHeader>
        <div class="grid w-full grid-cols-1">
            <ProductType2
                v-for="product in productList"
                :key="product.id"
                :product="product"
            ></ProductType2>
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import ProductType2 from '@/components/global/ProductType2.vue';

export default {
    components: {
        MypageHeader,
        ProductType2,
    },
};
</script>
