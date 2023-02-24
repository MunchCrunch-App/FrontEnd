<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white font-pretendard"
    >
        <div class="h-[428px] w-full">
            <img src="@/assets/munchcrunch-banner.jpg" alt="image" />
            <img
                class="absolute top-[20px] left-[20px] w-8 cursor-pointer"
                src="@/assets/icon-left.png"
                alt="left"
                @click="$router.go(-1)"
            />
        </div>

        <div
            class="flex h-[200px] w-full flex-col border-b-[13px] border-beGray px-5 py-4"
        >
            <div class="flex justify-between">
                <div class="flex">
                    <div
                        class="mr-1 flex items-center text-[19px] font-semibold"
                    >
                        35%
                    </div>
                    <div
                        class="flex items-center text-[19px] font-light text-beGray2 line-through"
                    >
                        21,200원
                    </div>
                </div>
                <div class="flex">
                    <div class="mr-1 flex items-center">
                        <StarVue color="#f194fc"></StarVue>
                        <StarVue color="#f194fc"></StarVue>
                        <StarVue></StarVue>
                        <StarVue></StarVue>
                        <StarVue></StarVue>
                    </div>
                    <div
                        class="flex items-center text-base font-semibold text-beGray2"
                    >
                        (327)
                    </div>
                </div>
            </div>
            <div class="text-[25px] font-semibold text-beRed">15,700원</div>
            <div class="flex justify-between">
                <div class="flex items-center text-[20px] font-medium">
                    [네추럴코어] 센시티브케어 베지 3kg
                </div>
                <ShareVue></ShareVue>
            </div>
            <div
                class="mt-4 flex justify-between text-xs font-light text-black"
            >
                <div class="grid grid-cols-3 gap-x-[20px] gap-y-1">
                    <div class="flex items-center whitespace-nowrap">
                        배송비
                    </div>
                    <div
                        class="col-span-2 flex items-center whitespace-nowrap text-base font-medium text-beRed"
                    >
                        모든 상품 무료배송
                    </div>
                    <div class="flex items-center whitespace-nowrap">
                        배송예정일
                    </div>
                    <div class="col-span-2 flex items-center whitespace-nowrap">
                        배송 3일 소요 / 롯데택배
                    </div>
                </div>
                <div class="flex h-full w-[118px] items-center">
                    <div
                        class="flex h-[30px] w-[118px] items-center justify-center rounded-[16px] border-[1px] border-beRed"
                    >
                        <div
                            class="mr-1 flex items-center text-base font-light text-beRed"
                        >
                            팀구매 안내
                        </div>
                        <SearchVue></SearchVue>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="flex h-[400px] w-full flex-col border-b-[13px] border-beGray py-3"
        >
            <div class="flex flex-col border-b-[1px] px-5 pb-2">
                <div class="text-[19px] font-medium">
                    구매후기 <span class="font-bold">327</span>건
                </div>
                <div class="text-[19px] font-bold text-bePink2">평점 5.0</div>
            </div>
            <div class="mt-4 flex w-full px-5">
                <div class="mr-[10px] flex rounded-[50%]">
                    <img
                        class="h-10 w-10 rounded-[50%]"
                        src="../../assets/no-pictures.png"
                        alt="profile"
                    />
                </div>
                <div class="flex flex-col">
                    <div class="text-lg font-bold leading-tight">김단추</div>
                    <div class="flex">
                        <div class="mr-1 flex items-center">
                            <StarVue color="#f194fc" width="14"></StarVue>
                            <StarVue width="14"></StarVue>
                        </div>
                        <div
                            class="flex items-center text-xs font-normal text-beGray2"
                        >
                            2022.11.06
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="review mt-4 max-h-[42px] w-full px-5 text-base font-normal leading-tight"
            >
                센시티브케어 베지 3kg 얼마전에 특가로 올라와서 센시티브케 어
                베지 3kg 얼마전에 특가로 올라와서
                블라블라블라블라블라블라블라블라블라블라블라블라
            </div>
        </div>
    </div>
</template>

<script>
import StarVue from '@/assets/svgComponents/Star.vue';
import ShareVue from '@/assets/svgComponents/Share.vue';
import SearchVue from '@/assets/svgComponents/Search.vue';

export default {
    components: {
        StarVue,
        ShareVue,
        SearchVue,
    },
};
</script>
<style scoped>
.review {
    white-space: normal;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
