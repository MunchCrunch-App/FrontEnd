<template>
    <Layout :header="true" :footer="true">
        <Header></Header>

        <div
            class="box-border flex h-[46px] w-full items-center justify-evenly px-5 text-beBlack"
        >
            <div
                v-for="(tab, index) in largeTabsData"
                :key="index"
                class="flex h-full w-full cursor-pointer items-center justify-center border-b-[3px]"
                :class="isCategoryState(tab.state)"
                @click="onClickTab(tab.state)"
            >
                {{ tab.title }}
            </div>
        </div>
        <div class="h-[13px] w-full bg-beGray"></div>

        <swiper
            :threshold="40"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :auto-height="true"
        >
            <swiper-slide
                class="flex h-full w-full flex-col items-center justify-center"
            >
                <TimeAttackCarousel></TimeAttackCarousel>
                <div class="h-[13px] w-full bg-beGray"></div>
                <div
                    class="flex h-[98px] w-full items-center justify-center gap-3 px-5"
                >
                    <div
                        v-for="(tab, index) in smallTabsData"
                        :key="index"
                        class="flex w-[54px] cursor-pointer flex-col items-center justify-center gap-2"
                        @click="
                            $router.push({
                                name: 'smallCategory',
                                params: {
                                    smallCategory: tab.path,
                                },
                            })
                        "
                    >
                        <img class="h-[38px] w-[40px]" :src="tab.image" />
                        <div class="text-xs font-medium">
                            {{ tab.title }}
                        </div>
                    </div>
                </div>
                <BannerCarousel></BannerCarousel>
                <div class="m-5 grid grid-cols-2 gap-5">
                    <ProductType1
                        v-for="product in recommendationProductList"
                        :key="product.id"
                        :product="product"
                    ></ProductType1>
                </div>
            </swiper-slide>

            <swiper-slide
                class="flex h-fit w-full flex-col items-center justify-center"
            >
                <TimeAttackCarousel></TimeAttackCarousel>
                <BannerCarousel></BannerCarousel>
                <div class="m-5 grid grid-cols-2 gap-5">
                    <ProductType1
                        v-for="product in specialPriceProductList"
                        :key="product.id"
                        :product="product"
                    ></ProductType1>
                </div>
            </swiper-slide>

            <swiper-slide
                class="flex h-full w-full flex-col items-center justify-center"
            >
                <TimeAttackCarousel></TimeAttackCarousel>
                <BannerCarousel></BannerCarousel>
                <div class="m-5 grid grid-cols-2 gap-5">
                    <ProductType1
                        v-for="product in feedsProductList"
                        :key="product.id"
                        :product="product"
                    ></ProductType1>
                </div>
            </swiper-slide>

            <swiper-slide
                class="flex h-full w-full flex-col items-center justify-center"
            >
                <TimeAttackCarousel></TimeAttackCarousel>
                <BannerCarousel></BannerCarousel>
                <div class="m-5 grid grid-cols-2 gap-5">
                    <ProductType1
                        v-for="product in snacksProductList"
                        :key="product.id"
                        :product="product"
                    ></ProductType1>
                </div>
            </swiper-slide>

            <swiper-slide
                class="flex h-full w-full flex-col items-center justify-center"
            >
                <TimeAttackCarousel></TimeAttackCarousel>
                <BannerCarousel></BannerCarousel>
                <div class="m-5 grid grid-cols-2 gap-5">
                    <ProductType1
                        v-for="product in goodsproductList"
                        :key="product.id"
                        :product="product"
                    ></ProductType1>
                </div>
            </swiper-slide>
        </swiper>
    </Layout>
    <Footer :FooterClickState="FooterClickState"></Footer>
    <ScrollToTop></ScrollToTop>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import Header from '@/components/home/globalHome/HomeHeader.vue';
import Footer from '@/components/global/Footer.vue';
import TimeAttackCarousel from '@/components/home/globalHome/TimeAttackCarousel.vue';
import BannerCarousel from '@/components/home/globalHome/BannerCarousel.vue';
import ProductType1 from '@/components/global/ProductType1.vue';
import timeAttack from '@/assets/munchcrunch-time-attack.webp';
import solo from '@/assets/munchcrunch-solo.webp';
import munchspick from '@/assets/munchcrunch-munchspick.webp';
import leader from '@/assets/munchcrunch-button-leader.webp';
import specialPrice from '@/assets/munchcrunch-special-price.webp';
import team from '@/assets/munchcrunch-team.webp';
import ScrollToTop from '@/components/global/ScrollToTop.vue';
import { mockApi } from '@/api/api';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
        Layout,
        TimeAttackCarousel: TimeAttackCarousel,
        BannerCarousel: BannerCarousel,
        ProductType1: ProductType1,
        Header,
        Footer,
        Swiper,
        SwiperSlide,
        ScrollToTop,
    },
    data() {
        return {
            FooterClickState: 0,
            swipeRef: null,
            categoryState: 0,
            recommendationProductList: [],
            specialPriceProductList: [],
            feedsProductList: [],
            snacksProductList: [],
            goodsproductList: [],
            smallTabsData: [
                {
                    title: '타임어택',
                    image: timeAttack,
                    path: 'time-attack',
                },
                {
                    title: '솔로구매',
                    image: solo,
                    path: 'solo',
                },
                {
                    title: '먼치스픽',
                    image: munchspick,
                    path: 'munchs-pick',
                },
                {
                    title: '리더스픽',
                    image: leader,
                    path: 'leaders-pick',
                },
                {
                    title: '특가구매',
                    image: specialPrice,
                    path: 'specialPrice',
                },
                {
                    title: '팀구독',
                    image: team,
                    path: 'team',
                },
            ],
            largeTabsData: [
                {
                    title: '추천',
                    state: 0,
                },
                {
                    title: '특가',
                    state: 1,
                },
                {
                    title: '사료',
                    state: 2,
                },
                {
                    title: '간식',
                    state: 3,
                },
                {
                    title: '용품',
                    state: 4,
                },
            ],
        };
    },
    computed: {
        isCategoryState() {
            return (state) => {
                return this.categoryState === state
                    ? 'border-beRed font-bold text-beRed'
                    : 'border-transparent font-medium ';
            };
        },
    },
    methods: {
        onSwiper(swiper) {
            this.swipeRef = swiper;
        },
        onSlideChange(swiper) {
            this.categoryState = swiper.activeIndex;
            // if (swiper.activeIndex === 1) this.getFeedsProductList();
            // if (swiper.activeIndex === 2) this.getSnacksProductList();
            // if (swiper.activeIndex === 3) this.getGoodsProductList();
        },
        onClickTab(index) {
            this.swipeRef?.slideTo(index, 200);
            this.categoryState = index;
            // if (index === 2) this.getFeedsProductList();
            // if (index === 3) this.getSnacksProductList();
            // if (index === 4) this.getGoodsProductList();
        },
        async getRecommendationProductList() {
            let res = await mockApi.get('home/recommendation-itemlist');
            this.recommendationProductList = res.data.result;
        },
        async getSpecialPriceProductList() {
            let res = await mockApi.get('home/special-price-itemlist');
            this.specialPriceProductList = res.data.result;
        },
        async getFeedsProductList() {
            let res = await mockApi.get('home/feeds-itemlist');
            this.feedsProductList = res.data.result;
        },
        async getSnacksProductList() {
            let res = await mockApi.get('home/snacks-itemlist');
            this.snacksProductList = res.data.result;
        },
        async getGoodsProductList() {
            let res = await mockApi.get('home/goods-itemlist');
            this.goodsproductList = res.data.result;
        },
    },
    created() {
        this.getRecommendationProductList();
        this.getSpecialPriceProductList();
        this.getFeedsProductList();
        this.getSnacksProductList();
        this.getGoodsProductList();
        // this.getRecommendationProductList();
        // this.getSpecialPriceProductList();
        window.addEventListener('scroll', this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
};
</script>
