<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
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
        <Footer :FooterClickState="FooterClickState"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/global/Footer.vue';
import Header from '@/components/global/Header.vue';
import ProductType2 from '@/components/global/productType2.vue';
import { getMyPick } from '@/api/get';

export default {
    components: {
        Header: Header,
        Footer: Footer,
        ProductType2: ProductType2,
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
