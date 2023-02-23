<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="후기관리"></MypageHeader>

        <div
            class="flex w-full flex-row justify-start border-b-[1px] border-beGray py-8 px-7"
        >
            <div class="mr-5 rounded-[50%]">
                <img
                    class="w-[88px] rounded-[50%]"
                    src="../../assets/no-pictures.png"
                />
            </div>
            <div class="flex flex-col justify-center">
                <div class="mb-[10px] text-[22px] font-medium">000 님</div>
                <div class="text-base font-light leading-none text-beBlack">
                    후기 1건 작성완료
                </div>
                <div class="text-base font-light text-beBlack">도움 2명</div>
            </div>
        </div>
        <div
            class="flex h-[62px] w-full items-center justify-center text-lg font-light"
        >
            <div
                class="flex h-full w-[50%] cursor-pointer items-center justify-center"
                :class="tabState ? 'bg-beGray' : 'bg-white'"
                @click="tabState = false"
            >
                후기 작성하기
            </div>
            <div
                class="flex h-full w-[50%] cursor-pointer items-center justify-center"
                :class="!tabState ? 'bg-beGray' : 'bg-white'"
                @click="tabState = true"
            >
                작성한 후기
            </div>
        </div>
        <div class="grid w-full grid-cols-1">
            <div
                class="h-fit w-full"
                v-for="product in productList"
                :key="product.id"
            >
                <ProductType2 :product="product">
                    <LargeBtn
                        title="후기 작성하기"
                        font="h-[38px]"
                        @click="
                            $router.push(`/mypage/write-review/${product.id}`)
                        "
                    ></LargeBtn>
                </ProductType2>
            </div>
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import LargeBtn from '@/components/global/LargeBtn.vue';
import ProductType2 from '@/components/global/ProductType2.vue';
import { getMyPick } from '@/api/get';

export default {
    components: {
        MypageHeader,
        LargeBtn,
        ProductType2,
    },

    data() {
        return {
            tabState: true,
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
