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
                        src="../assets/munchcrunch_icon_search@2x.png"
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
                class="flex h-[46px] w-full flex-row items-center justify-between px-5"
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
                        src="../assets/icon-x.png"
                        alt="x"
                    />
                </div>
            </div>

            <div class="mt-3 w-full px-5">
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="feedState = !feedState"
                    >
                        <div>사료</div>
                        <img
                            class="w-[20px]"
                            src="../assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="feedState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="item in feedList"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>

            <div class="w-full px-5">
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="snackState = !snackState"
                    >
                        <div>간식</div>
                        <img
                            class="w-[20px]"
                            src="../assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="snackState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="item in snackList"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>

            <div class="w-full px-5">
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="nutrientState = !nutrientState"
                    >
                        <div>영양제</div>
                        <img
                            class="w-[20px]"
                            src="../assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="nutrientState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="item in nutrientList"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>

            <div v-show="tabState !== false" class="w-full px-5">
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="outdoorState = !outdoorState"
                    >
                        <div>산책/아웃도어</div>
                        <img
                            class="w-[20px]"
                            src="../assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="outdoorState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="item in outdoorList"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>

            <div class="w-full px-5">
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="toyState = !toyState"
                    >
                        <div>장난감</div>
                        <img
                            class="w-[20px]"
                            src="../assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="toyState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="item in toyList"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>

            <div class="mb-9 w-full px-5">
                <div
                    class="flex h-[60px] w-full items-center text-xl font-medium"
                >
                    <div
                        class="flex h-full w-full cursor-pointer items-center justify-between"
                        @click="bathState = !bathState"
                    >
                        <div>목욕/위생</div>
                        <img
                            class="w-[20px]"
                            src="../assets/icon-left.png"
                            alt="bottom-arrow"
                        />
                    </div>
                </div>
                <div
                    v-show="bathState"
                    class="mb-3 grid w-full grid-cols-2 gap-3 bg-beGray py-5 px-[35px]"
                >
                    <div
                        class="col-span-1 cursor-pointer text-[17px] font-light"
                        v-for="item in bathList"
                        :key="item"
                    >
                        {{ item }}
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
                        src="../assets/munchcrunch-banner.jpg"
                        alt="banner"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        class="h-full w-full cursor-pointer"
                        src="../assets/munchcrunch-banner2.webp"
                        alt="banner"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        class="h-full w-full cursor-pointer"
                        src="../assets/munchcrunch-banner3.jpg"
                        alt="banner"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <Footer :FooterClickState="FooterClickState"></Footer>
    </div>
</template>

<script>
import Footer from '../components/global/Footer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';

export default {
    components: { Footer: Footer, Swiper, SwiperSlide },
    data() {
        return {
            modules: [Autoplay],
            FooterClickState: 1,
            tabState: true,
            feedState: false,
            feedList: [
                '전체보기',
                '건식사료',
                '습식사료',
                '소프트사료',
                '처방식사료',
                '화식',
                '기타',
            ],
            snackState: false,
            snackList: [
                '전체보기',
                '캔',
                '파우치',
                '뼈/육포/저키',
                '껌',
                '동결건조',
                '비스켓/스낵',
                '파우더',
                '음료/우유',
                '기타',
            ],
            nutrientState: false,
            nutrientList: [
                '전체보기',
                '종합영양제',
                '장/유산균',
                '피부/모질',
                '뼈/관절',
                '심장/혈관',
                '신장/요로',
                '치아/구강',
                '눈',
                '간',
                '면역/항산화',
                '실버',
                '기타',
            ],
            outdoorState: false,
            outdoorList: [
                '전체보기',
                '하네스',
                '리드줄',
                '목줄',
                '인시표',
                '이동용품',
                '산책용품',
                '기타',
            ],
            toyState: false,
            toyList: [
                '전체보기',
                '패브릭',
                '로프/터그',
                '고무/라텍스',
                '노즈워크/훈련',
                '기타',
            ],
            bathState: false,
            bathList: [
                '전체보기',
                '샴푸/컨디셔너',
                '브러쉬',
                '치아관리',
                '보습청결',
                '배변용품',
                '넥카라/매너벨트',
                '타올',
            ],
        };
    },
};
</script>
