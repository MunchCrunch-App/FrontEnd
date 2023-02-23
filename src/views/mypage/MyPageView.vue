<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="마이페이지"></MypageHeader>

        <div
            class="flex w-full flex-row items-center justify-center border-b-[10px] border-beGray py-8"
        >
            <div class="mr-5 rounded-[50%]">
                <img
                    class="w-[88px] rounded-[50%]"
                    src="../../assets/no-pictures.png"
                />
            </div>
            <div class="flex flex-col justify-center">
                <div class="text-[22px] font-medium">000 님</div>
                <div
                    class="flex cursor-pointer items-center"
                    @click="$router.push('/mypage/basic-info')"
                >
                    <span class="text-[15px] font-light">기본정보관리</span>
                    <img class="w-4" src="../../assets/icon-left.png" alt="" />
                </div>
            </div>
        </div>

        <div class="flex flex-col border-b-[10px] border-beGray py-[40px] px-5">
            <div class="text-lg font-medium">나의 쇼핑 정보</div>
            <div class="mt-4 w-full border-b-[1px] border-black"></div>
            <div class="mt-5 flex items-center justify-between">
                <div
                    class="min-w-[100px] cursor-pointer"
                    @click="$router.push('/mypage/team-purchase-process')"
                >
                    <div class="flex justify-center text-[25px] font-semibold">
                        0
                    </div>
                    <div class="flex justify-center text-[15px] font-light">
                        팀구매 진행 현황
                    </div>
                </div>
                <img class="h-4 w-4" src="../../assets/icon-left.png" alt="" />
                <div
                    class="min-w-[100px] cursor-pointer"
                    @click="$router.push('/mypage/deliver-process')"
                >
                    <div class="flex justify-center text-[25px] font-semibold">
                        0
                    </div>
                    <div class="flex justify-center text-[15px] font-light">
                        배송현황
                    </div>
                </div>
                <img class="h-4 w-4" src="../../assets/icon-left.png" alt="" />
                <div
                    class="min-w-[100px] cursor-pointer"
                    @click="$router.push('/mypage/deliver-finish')"
                >
                    <div class="flex justify-center text-[25px] font-semibold">
                        0
                    </div>
                    <div class="flex justify-center text-[15px] font-light">
                        배송완료
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col py-[40px] px-5">
            <div class="text-lg font-medium">나의 계정설정</div>
            <div class="mt-4 w-full border-b-[1px] border-black"></div>
            <div
                class="mt-1 flex h-10 w-full cursor-pointer items-center border-b-[1px] border-beGray3 text-[15px] font-light"
                @click="$router.push('/mypage/review-management')"
            >
                후기관리
            </div>
            <div
                class="flex h-10 w-full items-center border-b-[1px] border-beGray3 text-[15px] font-light"
            >
                고객문의관련
            </div>
            <div
                class="flex h-10 w-full items-center border-b-[1px] border-beGray3 text-[15px] font-light"
            >
                취소/반품/환불
            </div>
            <div
                class="flex h-10 w-full items-center border-b-[1px] border-beGray3 text-[15px] font-light"
            >
                My Team
            </div>
            <div class="flex h-10 w-full items-center text-[15px] font-light">
                설정
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
