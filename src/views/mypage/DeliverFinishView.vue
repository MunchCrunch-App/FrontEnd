<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="배송 완료"></MypageHeader>
        <div
            class="flex h-[72px] w-full flex-col items-start justify-center border-b-[1px] border-beGray pl-5 text-base font-semibold leading-tight"
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
                                    () => {
                                        display = null;
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
                </ProductType2>
            </div>
        </div>
    </div>
    <Modal :display="display" @closeModal="display = 'hidden'">
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
                <div
                    class="cursor-pointer"
                    @click="$router.push(`/mypage/refund/${productId}`)"
                >
                    네, 진행할게요
                </div>
                <div class="cursor-pointer" @click="display = 'hidden'">
                    취소
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import ProductType2 from '@/components/global/ProductType2.vue';
import { getMyPick } from '@/api/get';
import LargeBtn from '@/components/global/LargeBtn.vue';
import Modal from '@/components/global/Modal.vue';

export default {
    components: {
        MypageHeader,
        ProductType2,
        LargeBtn,
        Modal,
    },
    data() {
        return {
            display: 'hidden',
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
    },
    created() {
        this.getMyPickList();
    },
};
</script>
