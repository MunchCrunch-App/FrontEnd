<template>
    <Layout :flex="true" :header="true" :detailFooter="true">
        <MypageHeader title="구매후기"></MypageHeader>

        <div class="mt-5 flex w-full flex-col px-5">
            <div class="text-[46px] font-semibold leading-tight">5.0</div>
            <div class="flex items-center">
                <div class="flex">
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26" color="#f194fc"></Star>
                    <Star width="26" height="26"></Star>
                </div>
                <div class="text-2xl font-light">
                    (<span class="font-bold">327</span>건)
                </div>
            </div>
        </div>

        <div class="mt-[32px] flex w-full text-beGray2">
            <div
                class="flex w-full cursor-pointer items-center justify-center border-b-[1px] border-beGray3 py-3"
                :class="
                    tabState === 0
                        ? 'border-b-[2px] border-beGray4 font-bold text-beBlack'
                        : null
                "
                @click="tabState = 0"
            >
                추천순
            </div>
            <div
                class="flex w-full cursor-pointer items-center justify-center border-b-[1px] border-beGray3 py-3"
                :class="
                    tabState === 1
                        ? 'border-b-[2px] border-beGray4 font-bold text-beBlack'
                        : null
                "
                @click="tabState = 1"
            >
                최신순
            </div>
            <div
                class="flex w-full cursor-pointer items-center justify-center border-b-[1px] border-beGray3 py-3"
                :class="
                    tabState === 2
                        ? 'border-b-[2px] border-beGray4 font-bold text-beBlack'
                        : null
                "
                @click="tabState = 2"
            >
                사진후기
            </div>
        </div>

        <div class="flex w-full flex-col">
            <ReviewContent slotState="On"> </ReviewContent>
        </div>

        <ToastModal
            @closeModal="modalState = 'hidden'"
            :display="modalState"
            :modalStyle="modalStyle"
        ></ToastModal>
    </Layout>
    <DetailFooter
        @soloModalOpen="soloModalOpen"
        @teamModalOpen="teamModalOpen"
    ></DetailFooter>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import Star from '@/assets/svgComponents/Star.vue';
import ReviewContent from '@/components/global/ReviewContent.vue';
import DetailFooter from '@/components/global/DetailFooter.vue';
import ToastModal from '@/components/global/ToastModal.vue';

export default {
    components: {
        Layout,
        MypageHeader,
        Star,
        ReviewContent,
        DetailFooter,
        ToastModal,
    },
    data() {
        return {
            tabState: 0,
            modalState: 'hidden',
            modalStyle: {},
        };
    },

    methods: {
        soloModalOpen() {
            this.modalState = '';
            this.modalStyle = {
                fontColor: 'text-beBlack',
                countBtn: 'bg-beBlack',
                bgColor: 'bg-bePink2',
                btnTitle: '혼자 구매하기',
            };
        },

        teamModalOpen() {
            this.modalState = '';
            this.modalStyle = {
                fontColor: 'text-beRed',
                countBtn: 'bg-beRed',
                bgColor: 'bg-beRed',
                btnTitle: '2인 팀구매 오픈',
            };
        },
    },
};
</script>
