<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <MypageHeader title="교환/반품/환불 신청"></MypageHeader>
        <div class="w-full px-7">
            <div class="mt-9 w-full">
                <div class="text-[17px] font-semibold">신청사유</div>
                <div class="mt-4 flex w-full">
                    <div
                        class="mt-[4px] mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-[1.5px] border-beGray4"
                    ></div>
                    <div>상품문제</div>
                </div>
                <div class="mt-3 flex w-full">
                    <div
                        class="mt-[4px] mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-[1.5px] border-beGray4"
                    ></div>
                    <div>배송문제</div>
                </div>
            </div>
            <div class="mt-4">
                <label for="photo">
                    <div
                        class="flex h-[64px] w-[90px] flex-col items-center justify-center border-[1px] border-beGray4"
                    >
                        <img
                            class="h-[33px] w-[33px]"
                            src="../../assets/camera.png"
                            alt="camera"
                        />
                        <div>사진 업로드</div>
                        <input type="file" id="photo" class="hidden" />
                    </div>
                </label>
                <textarea
                    class="mt-4 h-[112px] w-full max-w-[375px] resize-none border-[1px] border-beGray4 p-4"
                    placeholder="내용을 적어주세요."
                ></textarea>
            </div>
            <div class="mt-7 w-full">
                <div class="text-[17px] font-semibold">신청방법</div>
                <div class="mt-4 flex w-full">
                    <div
                        class="mt-[4px] mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-[1.5px] border-beGray4"
                    ></div>
                    <div>반품 및 환불</div>
                </div>
            </div>
            <div class="mt-10 w-full">
                <div class="text-[17px] font-semibold">수거 방법</div>
                <div class="mt-4 flex w-full">
                    <div
                        class="mt-[4px] mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-[1.5px] border-beGray4"
                    ></div>
                    <div>문 앞</div>
                </div>
            </div>
            <textarea
                class="mt-2 h-[72px] w-full max-w-[375px] resize-none border-[1px] border-beGray4 p-4"
                placeholder="현관 비밀번호 등 내용을 적어주세요."
            ></textarea>
            <div class="mt-8 w-full">
                <div class="text-[17px] font-semibold">신청방법</div>
                <div
                    class="mt-3 flex w-full flex-col text-base font-medium text-beGray2"
                >
                    <div>결제 금액 : 16,000원</div>
                    <div>반품 배송비 : 0원</div>
                    <div>총 환불금액 : 16,000원</div>
                </div>
            </div>
        </div>
        <div class="mt-[34px]">
            <LargeBtn title="신청 완료"></LargeBtn>
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';
import LargeBtn from '@/components/global/LargeBtn.vue';

export default {
    components: {
        MypageHeader,
        LargeBtn,
    },
};
</script>
