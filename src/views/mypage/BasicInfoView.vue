<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-beGray pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="기본정보관리"></MypageHeader>

        <div class="flex h-full flex-col">
            <div
                class="flex h-[60px] cursor-pointer items-center border-b-[1px] border-beGray3 bg-white pl-5 text-lg font-medium"
                @click="$router.push('/mypage/edit-profile')"
            >
                내 프로필 수정
            </div>
            <div
                class="flex h-[60px] cursor-pointer items-center border-b-[1px] border-beGray3 bg-white pl-5 text-lg font-medium"
                @click="$router.push('/mypage/edit-address')"
            >
                기본 배송지 수정
            </div>
            <div
                class="flex h-[60px] cursor-pointer items-center bg-white pl-5 text-lg font-medium"
                @click="$router.push('/payment-method')"
            >
                기본 결제방법 수정
            </div>
            <div
                class="mt-8 h-full w-full px-5 text-sm leading-[1.93] text-beGray4"
            >
                <div>법인명 : 주식회사 바크아웃라우드</div>
                <div>대표 : 김민철</div>
                <div>주소 : 부산광역시 남구 신선로 365, 창업지원센터 120호</div>
                <div>대표번호 : xxxx-xxxx</div>
                <div>이메일 : xxxx@xxxxxx</div>
                <div>사업자등록번호 : xxx-xx-xxxxx</div>
                <div>통신판매업 신고번호 : 제 xxxx-xxxxx-xxxx-호</div>
            </div>
        </div>

        <Footer :FooterClickState="FooterClickState"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/global/Footer.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
export default {
    data() {
        return {
            FooterClickState: 3,
        };
    },
    components: {
        Footer,
        MypageHeader,
    },
};
</script>
