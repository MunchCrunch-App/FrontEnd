<template>
    <Layout :flex="true" :header="true">
        <MypageHeader title="팀 구매 진행현황"></MypageHeader>
        <div class="grid w-full grid-cols-1">
            <ProductType2
                v-for="product in productList"
                :key="product.id"
                :product="product"
            ></ProductType2>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import ProductType2 from '@/components/global/ProductType2.vue';

export default {
    components: {
        Layout,
        MypageHeader,
        ProductType2,
    },
};
</script>
