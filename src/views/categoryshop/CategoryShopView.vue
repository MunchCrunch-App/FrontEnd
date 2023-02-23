<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white pb-[48px] font-pretendard"
    >
        <div class="h-full w-full">
            <div
                class="flex h-14 w-full cursor-pointer items-center justify-center"
                @click="$router.push('/search')"
            >
                <div
                    class="flex h-10 w-[390px] items-center rounded-[19.5px] border-[1px] border-solid border-beBlack pl-5"
                >
                    <img
                        class="w-[18px]"
                        src="@/assets/munchcrunch_icon_search@2x.png"
                        alt="search"
                    />
                    <div
                        type="text"
                        class="ml-3 flex h-full w-full items-center rounded-[19.5px] bg-transparent text-[17px] text-beGray2 outline-none"
                    >
                        찾으시는 상품을 검색해보세요
                    </div>
                </div>
            </div>

            <div
                class="mb-3 flex h-[46px] w-full flex-row items-center justify-between px-5"
            >
                <div
                    class="flex h-full items-center gap-[30px] text-xl font-medium"
                >
                    <div
                        class="flex h-full cursor-pointer items-center border-b-[3px]"
                        :class="
                            tabState
                                ? ' border-beRed font-bold text-beRed'
                                : 'border-transparent'
                        "
                        @click="tabState = true"
                    >
                        강아지
                    </div>
                    <div
                        class="flex h-full cursor-pointer items-center border-b-[3px]"
                        :class="
                            !tabState
                                ? ' border-beRed font-bold text-beRed'
                                : 'border-transparent'
                        "
                        @click="tabState = false"
                    >
                        고양이
                    </div>
                </div>
                <div class="flex">
                    <img
                        class="h-full w-[16px]"
                        src="@/assets/icon-x.png"
                        alt="x"
                    />
                </div>
            </div>

            <div
                v-for="category in categoryList"
                :key="category.id"
                class="w-full px-5"
            >
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="category.tabState = !category.tabState"
                    >
                        <div>{{ category.name }}</div>
                        <img
                            class="w-[20px]"
                            src="@/assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="category.tabState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="subCategory in category.subCategories"
                        :key="subCategory.id"
                        @click="
                            $router.push(
                                `/categoryshop/list/${category.id}/${subCategory.id}`,
                            )
                        "
                    >
                        {{ subCategory.name }}
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-auto mb-5 h-[92px] w-full px-5">
            <swiper
                class="h-full w-full bg-white"
                :centeredSlides="true"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                }"
                :loop="true"
                :modules="modules"
                @touchStart="(swiper, event) => event.stopPropagation()"
            >
                <swiper-slide>
                    <img
                        class="h-full w-full cursor-pointer"
                        src="@/assets/munchcrunch-banner.jpg"
                        alt="banner"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        class="h-full w-full cursor-pointer"
                        src="@/assets/munchcrunch-banner2.webp"
                        alt="banner"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        class="h-full w-full cursor-pointer"
                        src="@/assets/munchcrunch-banner3.jpg"
                        alt="banner"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <Footer :FooterClickState="FooterClickState"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/global/Footer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { getCategoryList } from '@/api/get';

export default {
    components: { Footer, Swiper, SwiperSlide },
    data() {
        return {
            modules: [Autoplay],
            FooterClickState: 1,
            tabState: true,
            categoryList: [],
        };
    },
    methods: {
        getCategoryList() {
            getCategoryList().then((res) => {
                res.result.categories.forEach((category) => {
                    category.tabState = false;
                });
                this.categoryList = res.result.categories;
            });
        },
    },
    created() {
        this.getCategoryList();
    },
};
</script>
