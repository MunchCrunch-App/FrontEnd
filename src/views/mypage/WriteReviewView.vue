<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pt-[55px] pb-[48px] font-pretendard"
    >
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
        </div>
    </div>
</template>

<script>
import MypageHeader from '@/components/mypage/MypageHeader.vue';

export default {
    components: {
        MypageHeader,
    },
};
</script>
