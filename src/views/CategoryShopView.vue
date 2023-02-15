<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pb-[48px] font-pretendard"
    >
        <div class="flex h-14 w-full items-center justify-center">
            <div
                class="flex h-10 w-[390px] items-center rounded-[19.5px] border-[1px] border-solid border-beBlack pl-5"
            >
                <img
                    class="w-[18px]"
                    src="../assets/munchcrunch_icon_search@2x.png"
                    alt="search"
                />
                <input
                    type="text"
                    class="ml-3 h-full w-full rounded-[19.5px] bg-transparent outline-none placeholder:text-[17px]"
                    placeholder="찾으시는 상품을 검색해보세요"
                />
            </div>
        </div>
        <div
            class="flex h-[46px] w-full flex-row items-center justify-between px-5"
        >
            <div class="flex h-full items-center">
                <div>강아지</div>
                <div>고양이</div>
            </div>
            <div class="flex">
                <img
                    class="h-full w-[16px]"
                    src="../assets/icon-x.png"
                    alt="x"
                />
            </div>
        </div>

        <Footer :FooterClickState="FooterClickState"></Footer>
    </div>
</template>

<script>
import Footer from '../components/global/Footer.vue';
export default {
    components: { Footer: Footer },
    data() {
        return {
            FooterClickState: 1,
        };
    },
};
</script>
