<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="취소/반품/환불 내역"></MypageHeader>
        <div class="flex w-full flex-col justify-start px-[28px] pt-[48px]">
            <div class="mb-10 flex justify-start">
                <img
                    class="mr-4 h-[110px] w-[110px]"
                    src="../../assets/no-pictures.png"
                    alt="image"
                />
                <div class="flex flex-col justify-between">
                    <div class="text-[17px] font-bold text-beRed">
                        2022.11.13 취소완료
                    </div>
                    <div class="flex flex-col text-base font-medium">
                        <div>베베페페 암컷강아지 기저귀</div>
                        <div>수량: 1개</div>
                    </div>
                </div>
            </div>

            <div class="mb-10 flex justify-start">
                <img
                    class="mr-4 h-[110px] w-[110px]"
                    src="../../assets/no-pictures.png"
                    alt="image"
                />
                <div class="flex flex-col justify-between">
                    <div class="text-[17px] font-bold text-beRed">
                        2022.11.13 취소완료
                    </div>
                    <div class="flex flex-col text-base font-medium">
                        <div>베베페페 암컷강아지 기저귀</div>
                        <div>수량: 1개</div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';

export default {
    components: {
        Layout,
        MypageHeader,
    },
};
</script>
