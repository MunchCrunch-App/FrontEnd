<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="설정"></MypageHeader>
        <div class="flex w-full flex-col justify-start text-lg font-medium">
            <div
                class="flex h-[60px] w-full cursor-pointer items-center border-b-[1px] border-beGray3 px-5"
                @click="$router.push('/mypage/setting/terms-of-use')"
            >
                서비스 이용약관
            </div>
            <div
                class="flex h-[60px] w-full cursor-pointer items-center border-b-[1px] border-beGray3 px-5"
                @click="$router.push('/mypage/setting/privacy')"
            >
                개인정보처리방침
            </div>
            <div
                class="flex h-[60px] w-full cursor-pointer items-center justify-between border-b-[1px] border-beGray3 px-5"
                @click="switchBtn1 = !switchBtn1"
            >
                <div>앱 푸시 알림 허용</div>
                <div class="relative h-5 w-[45px]">
                    <Circle
                        class="absolute left-0 z-10 transition-all"
                        :class="
                            switchBtn1
                                ? 'translate-x-[100%]'
                                : 'translate-x-[-10%]'
                        "
                    ></Circle>
                    <Rectangle
                        class="absolute left-0 transition-all"
                        :color="switchBtn1 ? '#E50014' : '#f75765'"
                    >
                    </Rectangle>
                </div>
            </div>
            <div
                class="flex h-[60px] w-full cursor-pointer items-center justify-between border-b-[1px] border-beGray3 px-5"
                @click="switchBtn2 = !switchBtn2"
            >
                <div>마케팅, 광고성 정보알림 수신동의</div>
                <div class="relative h-5 w-[45px]">
                    <Circle
                        class="absolute left-0 z-10 transition-all"
                        :class="
                            switchBtn2
                                ? 'translate-x-[100%]'
                                : 'translate-x-[-10%]'
                        "
                    ></Circle>
                    <Rectangle
                        class="absolute left-0 transition-all"
                        :color="switchBtn2 ? '#E50014' : '#f75765'"
                    >
                    </Rectangle>
                </div>
            </div>
            <div
                class="flex h-[60px] w-full cursor-pointer items-center border-b-[1px] border-beGray3 px-5"
                @click="
                    () => {
                        madalDisplay = null;
                    }
                "
            >
                회원탈퇴하기
            </div>
            <div class="flex h-[60px] w-full items-center px-5">로그아웃</div>
        </div>
    </Layout>
    <Modal :display="madalDisplay" @closeModal="madalDisplay = 'hidden'">
        <div class="flex w-full flex-col items-center justify-center">
            <div
                class="mb-8 flex w-full flex-col items-center justify-center text-base font-bold text-beGray2"
            >
                <div>정말 탈퇴하시겠습니까?</div>
                <div>탈퇴 시, 모든 정보가 삭제되며</div>
                <div>복구되지 않습니다.</div>
            </div>
            <div
                class="flex w-full flex-col items-center justify-center text-base font-bold leading-[2.19] text-black"
            >
                <div class="cursor-pointer">탈퇴하기</div>
                <div class="cursor-pointer" @click="madalDisplay = 'hidden'">
                    취소
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import Modal from '@/components/global/Modal.vue';
import Rectangle from '@/assets/svgComponents/Rectangle.vue';
import Circle from '@/assets/svgComponents/Circle.vue';

export default {
    components: {
        Layout,
        MypageHeader,
        Modal,
        Rectangle,
        Circle,
    },
    data() {
        return {
            madalDisplay: 'hidden',
            switchBtn1: false,
            switchBtn2: false,
        };
    },
    beforeRouteLeave(to, from, next) {
        if (this.madalDisplay === null) {
            this.madalDisplay = 'hidden';
            next(false);
        } else next();
    },
};
</script>
