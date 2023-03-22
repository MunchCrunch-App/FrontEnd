<template>
    <Layout :flex="true" :header="true">
        <MypageHeader title="배송 완료"></MypageHeader>
        <div
            class="flex min-h-[72px] w-full flex-col items-start justify-center border-b-[1px] border-beGray pl-5 text-base font-semibold leading-tight"
        >
            <div>상품이 잘 도착하였습니다.</div>
            <div>문제가 있을 시 고객센터로 연락주세요.</div>
        </div>
        <div class="grid w-full grid-cols-1">
            <div
                class="h-fit w-full"
                v-for="product in productList"
                :key="product.id"
            >
                <ProductType2 :product="product">
                    <div class="mt-[22px]">
                        <div class="flex flex-col">
                            <div class="mx-5 mb-3 flex gap-3">
                                <div
                                    class="flex h-[40px] w-[50%] cursor-pointer items-center justify-center rounded-[20.5px] border-[1px] border-black"
                                    @click="
                                        $router.push(
                                            `/mypage/order-detail/${product.id}`,
                                        )
                                    "
                                >
                                    주문상세
                                </div>
                                <div
                                    class="flex h-[40px] w-[50%] cursor-pointer items-center justify-center rounded-[20.5px] border-[1px] border-black"
                                    @click="
                                        {
                                            modalDisplay = null;
                                            productId = product.id;
                                        }
                                    "
                                >
                                    교환/환불/반품
                                </div>
                            </div>
                            <LargeBtn
                                title="후기작성하기"
                                font="text-base"
                                @click="
                                    $router.push(
                                        `/mypage/write-review/${product.id}`,
                                    )
                                "
                            ></LargeBtn>
                        </div>
                    </div>
                </ProductType2>
            </div>
        </div>
    </Layout>
    <Modal :display="modalDisplay" @closeModal="modalDisplay = 'hidden'">
        <div class="flex w-full flex-col items-center justify-center">
            <div
                class="mb-8 flex w-full flex-col items-center justify-center text-base font-bold text-beGray2"
            >
                <div>주문하신 상품을</div>
                <div>교환/반품/환불 진행하시겠습니까?</div>
            </div>
            <div
                class="flex w-full flex-col items-center justify-center text-base font-bold leading-[2.19] text-black"
            >
                <div class="cursor-pointer" @click="goRefundPage">
                    네, 진행할게요
                </div>
                <div class="cursor-pointer" @click="modalDisplay = 'hidden'">
                    취소
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import ProductType2 from '@/components/global/ProductType2.vue';
import { getMyPick } from '@/api/get';
import LargeBtn from '@/components/global/LargeBtn.vue';
import Modal from '@/components/global/Modal.vue';

export default {
    components: {
        Layout,
        MypageHeader,
        ProductType2,
        LargeBtn,
        Modal,
    },
    data() {
        return {
            modalDisplay: 'hidden',
            productList: [],
            productId: null,
        };
    },
    methods: {
        getMyPickList() {
            getMyPick().then((res) => {
                this.productList = res.result;
            });
        },
        goRefundPage() {
            this.modalDisplay = 'hidden';
            this.$router.push(`/mypage/refund/${this.productId}`);
        },
    },
    created() {
        this.getMyPickList();
    },
    beforeRouteLeave(to, from, next) {
        if (this.modalDisplay === null) {
            this.modalDisplay = 'hidden';
            next(false);
        } else next();
    },
};
</script>
