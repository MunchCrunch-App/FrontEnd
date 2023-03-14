<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="프로필 수정"></MypageHeader>
        <div class="w-full px-10">
            <div
                class="mt-[48px] mb-[40px] flex w-full items-center justify-center"
            >
                <div class="relative rounded-[50px]">
                    <img
                        class="w-[112px] rounded-[50px] border-[1px]"
                        src="../../assets/no-pictures.png"
                        alt="profile"
                    />
                    <label
                        for="profile"
                        class="none absolute bottom-0 right-[-14px] bg-transparent"
                    >
                        <img
                            class="h-[28px] w-[28px] bg-transparent"
                            src="../../assets/camera.png"
                            alt="camera"
                        />
                    </label>
                    <input type="file" id="profile" class="hidden" />
                </div>
            </div>
            <input
                type="text"
                class="w-full border-b-[1px] border-beGray3 text-xl font-medium text-beGray2 outline-none"
                value="닉네임"
            />
        </div>
        <div class="mt-auto">
            <LargeBtn title="완료"></LargeBtn>
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
