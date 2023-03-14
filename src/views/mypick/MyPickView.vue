<template>
    <Layout :flex="true" :header="true" :footer="true">
        <Header :title="title"></Header>
        <div class="px-7 pt-[30px] pb-4 text-lg font-medium">
            <span class="text-xl font-bold">000 </span>님이 찜한 상품
        </div>
        <div class="border-[0.5px] border-beGray"></div>
        <div class="grid w-full grid-cols-1">
            <ProductType2
                v-for="product in productList"
                :key="product.id"
                :product="product"
            ></ProductType2>
        </div>
    </Layout>
    <Footer :FooterClickState="FooterClickState"></Footer>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import Footer from '@/components/global/Footer.vue';
import Header from '@/components/global/Header.vue';
import ProductType2 from '@/components/global/productType2.vue';
import { getMyPick } from '@/api/get';

export default {
    components: {
        Layout,
        Header,
        Footer,
        ProductType2,
    },
    data() {
        return {
            title: '찜',
            FooterClickState: 2,
            productList: [],
        };
    },
    methods: {
        getMyPickList() {
            getMyPick().then((res) => {
                this.productList = res.result;
            });
        },
    },
    created() {
        this.getMyPickList();
    },
};
</script>
