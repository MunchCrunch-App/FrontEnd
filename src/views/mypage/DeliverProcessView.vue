<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="배송 현황"></MypageHeader>
        <div
            class="flex h-[72px] w-full items-center border-b-[1px] border-beGray pl-5 text-base font-semibold"
        >
            배송이 시작되었습니다.
        </div>
        <div class="grid w-full grid-cols-1">
            <div
                class="h-fit w-full"
                v-for="product in productList"
                :key="product.id"
            >
                <ProductType2 :product="product">
                    <LargeBtn title="배송조회" font="text-lg"></LargeBtn>
                </ProductType2>
            </div>
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import ProductType2 from '@/components/global/ProductType2.vue';
import { getMyPick } from '@/api/get';
import LargeBtn from '@/components/global/LargeBtn.vue';

export default {
    components: {
        MypageHeader,
        ProductType2,
        LargeBtn,
    },
    data() {
        return {
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
