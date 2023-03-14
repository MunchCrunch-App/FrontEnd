<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="상품문의"></MypageHeader>

        <div class="mt-7 flex w-full flex-col px-5">
            <textarea
                class="h-[80px] w-full resize-none border-b-[1px] border-beGray outline-none placeholder:text-[17px] placeholder:font-medium placeholder:text-beBlack"
                placeholder="문의 내용을 입력해주세요."
            ></textarea>
            <div class="mt-3 w-full text-[17px] font-medium text-beGray2">
                <div class="leading-tight">상품문의는 전체공개되므로,</div>
                <div class="leading-tight">개인정보는 남기지 말아주세요.</div>
            </div>
        </div>
        <div class="mt-auto">
            <LargeBtn title="문의하기"></LargeBtn>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import LargeBtn from '@/components/global/LargeBtn.vue';

export default {
    components: {
        Layout,
        MypageHeader,
        LargeBtn,
    },
    data() {
        return {
            tabState: 0,
        };
    },
};
</script>
