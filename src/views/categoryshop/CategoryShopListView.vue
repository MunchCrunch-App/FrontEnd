<template>
    <div
        class="relative flex h-screen w-full max-w-[428px] flex-col overflow-y-scroll bg-white pt-[55px] pb-[48px] font-pretendard scrollbar-hide"
    >
        <div
            class="fixed top-0 flex h-[56px] w-full max-w-[428px] flex-row items-center justify-between border-b-[1px] border-beGray bg-white"
        >
            <img
                class="z-10 ml-3 w-[28px] cursor-pointer"
                src="../../assets/icon-left.png"
                alt="left"
                @click="$router.go(-1)"
            />
            <div
                class="absolute flex w-full cursor-pointer items-center justify-center text-xl font-bold"
                @click="
                    () => {
                        categoryMadalDisplay = null;
                    }
                "
            >
                <div>{{ selectedCategory.name }}</div>
                <img
                    class="w-[20px]"
                    src="../../assets/icon-left.png"
                    alt="large-category"
                />
            </div>
            <img
                class="z-10 mr-3 w-[20px] cursor-pointer"
                src="../../assets/munchcrunch_icon_search@2x.png"
                alt="left"
                @click="$router.push('/search')"
            />
        </div>

        <div class="h-[200px] w-full">
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

        <div class="min-h-[50px] w-full border-b-[1px] border-beGray">
            <swiper
                class="flex h-full justify-center"
                :slidesPerView="'auto'"
                :space-between="26"
                :slides-offset-before="20"
                :slides-offset-after="20"
                :modules="modules"
                @touchStart="(swiper, event) => event.stopPropagation()"
            >
                <swiper-slide
                    class="h-full w-fit"
                    v-for="subCategory in selectedSubCategory"
                    :key="subCategory.id"
                >
                    <div
                        class="flex h-full cursor-pointer items-center justify-center text-[15px]"
                        :class="
                            selectedSubCategoryId === subCategory.id
                                ? 'font-bold text-beRed'
                                : ' font-light '
                        "
                        @click="selectSubCategory(subCategory.id)"
                    >
                        {{ subCategory.name }}
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div
            class="flex min-h-[50px] w-full items-center justify-between px-5 text-[15px] font-light"
        >
            <div>
                ??? <span class="font-bold">{{ productList.length }}</span
                >???
            </div>
            <div
                class="flex cursor-pointer items-center"
                @click="
                    () => {
                        filterMadalDisplay = null;
                    }
                "
            >
                <div>{{ selectedFilter.title }}</div>
                <img class="h-3 w-3" src="../../assets/icon-left.png" alt="" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-5 px-5">
            <ProductType1
                v-for="product in productList"
                :key="product.id"
                :product="product"
            ></ProductType1>
        </div>

        <Footer :FooterClickState="FooterClickState"></Footer>
    </div>

    <Modal
        :display="categoryMadalDisplay"
        @closeModal="categoryMadalDisplay = 'hidden'"
    >
        <div class="mb-5 flex w-full flex-col items-center justify-center">
            <div class="mb-5 text-2xl font-semibold text-beGray2">????????????</div>
            <div
                v-for="category in categoryList"
                :key="category.id"
                class="mt-5 cursor-pointer text-[22px] font-semibold"
                :class="
                    selectedCategory.id === category.id ? 'text-beRed' : null
                "
                @click="selectCategory(category.id)"
            >
                {{ category.name }}
            </div>
        </div>
    </Modal>

    <Modal
        :display="filterMadalDisplay"
        @closeModal="filterMadalDisplay = 'hidden'"
    >
        <div class="mb-5 flex w-full flex-col items-center justify-center">
            <div class="mb-5 text-2xl font-semibold text-beGray2">??????</div>
            <div
                v-for="filter in filterList"
                :key="filter.state"
                class="mt-5 cursor-pointer text-[22px] font-semibold"
                :class="
                    selectedFilter.state === filter.state ? 'text-beRed' : null
                "
                @click="selectFilter(filter.state)"
            >
                {{ filter.title }}
            </div>
        </div>
    </Modal>
</template>

<script>
import Footer from '@/components/global/Footer.vue';
import ProductType1 from '@/components/global/ProductType1.vue';
import Modal from '@/components/global/Modal.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { getCategoryList, getMyPick } from '@/api/get';

export default {
    components: {
        ProductType1,
        Modal,
        Footer,
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            categoryMadalDisplay: 'hidden',
            filterMadalDisplay: 'hidden',
            modules: [Autoplay],
            FooterClickState: 1,
            display: 'hidden',
            productId: null,
            productList: [],
            categoryList: [],
            selectedCategory: {},
            selectedSubCategory: [],
            selectedSubCategoryId: 0,
            filterList: [
                { title: '?????????', state: 0 },
                { title: '????????????', state: 1 },
                { title: '?????? ?????? ???', state: 2 },
                { title: '?????? ?????? ???', state: 3 },
                { title: '?????? ?????? ???', state: 4 },
            ],
            selectedFilter: { title: '?????????', state: 0 },
        };
    },

    methods: {
        selectCategory(id) {
            let nowCategory = this.categoryList.filter(
                (category) => category.id === id,
            );
            this.selectedCategory = nowCategory[0];
            this.selectedSubCategory = this.selectedCategory.subCategories;
        },

        selectSubCategory(id) {
            this.selectedSubCategoryId = id;
        },

        selectFilter(state) {
            let nowFliter = this.filterList.filter(
                (filter) => filter.state === state,
            );
            this.selectedFilter = nowFliter[0];
        },

        getMyPickList() {
            getMyPick().then((res) => {
                this.productList = res.result;
            });
        },

        getCategoryList() {
            getCategoryList().then((res) => {
                this.categoryList = res.result.categories;
                let nowCategory = this.categoryList.filter(
                    (category) =>
                        category.id === Number(this.$route.params.category),
                );
                this.selectedCategory = nowCategory[0];
                this.selectedSubCategory = this.selectedCategory.subCategories;
            });
        },
    },

    created() {
        this.getMyPickList();
        this.getCategoryList();
        this.selectedSubCategoryId = Number(this.$route.params.subcategory);
    },
};
</script>
