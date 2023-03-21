<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="후기 작성하기"></MypageHeader>
        <div class="w-full">
            <div class="mt-9 w-full border-b-[1px] px-7">
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
                <div class="mt-3 mb-5 leading-tight">
                    <div>- 제품 사용 후기</div>
                    <div>- 강아지 반응</div>
                    <div>- 재구매 의사</div>
                    <div class="break-keep pl-3">
                        등 다른 반려인들께 도움이 될 수 있는 내용으로 작성되면
                        좋겠습니다.
                    </div>
                </div>
            </div>
            <div
                class="w-full border-b-[1px] py-6 px-7 text-[17px] font-semibold"
            >
                <div>배송, 포장 등 평점</div>
                <div>별별별별별</div>
            </div>
            <div
                class="w-full border-b-[1px] py-6 px-7 text-[17px] font-semibold"
            >
                <div>상품 품질 등 제품과 브랜드에 대한 평점</div>
                <div>별별별별별</div>
            </div>
            <div class="item mt-4 flex w-full px-7">
                <div
                    class="mt-[4px] mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-[1.5px] border-beGray4"
                ></div>
                <div class="text-base font-medium">반품 및 환불</div>
            </div>
            <div class="item mt-2 flex w-full px-7">
                <div
                    class="mt-[4px] mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-[1.5px] border-beGray4"
                ></div>
                <div class="text-base font-medium">반품 및 환불</div>
            </div>
            <div class="w-full px-7">
                <textarea
                    class="mt-9 h-[192px] w-full resize-none border-[1px] border-beGray4 p-4 outline-none"
                    placeholder="후기 내용을 적어주세요."
                ></textarea>
            </div>
        </div>
        <div class="mt-[34px]">
            <LargeBtn title="구매후기 작성 완료"></LargeBtn>
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
};
</script>
