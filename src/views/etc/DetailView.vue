<template>
    <div
        class="relative flex h-full min-h-screen w-full max-w-[428px] flex-col bg-white font-pretendard"
    >
        <div class="h-[428px] w-full">
            <img class="h-full w-full" src="@/assets/example.png" alt="image" />
            <img
                class="absolute top-[20px] left-[20px] w-8 cursor-pointer"
                src="@/assets/icon-left.png"
                alt="left"
                @click="$router.go(-1)"
            />
        </div>

        <div
            class="flex h-fit min-h-[200px] w-full flex-col border-b-[13px] border-beGray px-5 py-4"
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
                <div class="cursor-pointer">
                    <ShareVue @click="shareKakao"></ShareVue>
                </div>
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

        <div class="flex w-full flex-col border-b-[13px] border-beGray">
            <div
                class="flex h-[52px] items-center border-b-[1px] border-beGray px-5 text-[19px] font-medium"
            >
                열린 팀구매 참여하기 (2인팀)
            </div>
            <div
                class="flex h-[52px] items-center justify-between border-b-[1px] border-beGray px-5 text-[18px] font-medium"
            >
                <div class="relative mr-1 min-w-[60px]">
                    <img
                        class="h-10 w-10 rounded-[50%] border-[1px] border-white"
                        src="../../assets/example.png"
                        alt="profile"
                    />
                    <img
                        class="absolute bottom-0 right-0 h-10 w-10 rounded-[50%] border-[1px] border-white"
                        src="../../assets/example.png"
                        alt="profile"
                    />
                </div>
                <div class="flex h-9 w-full justify-between">
                    <div class="flex h-full items-center">St***(1/2명)</div>
                    <div
                        class="flex h-9 w-[90px] items-center justify-center rounded-[3px] bg-beRed text-base font-semibold text-white"
                    >
                        팀구매 참여
                    </div>
                </div>
            </div>
            <div
                class="flex h-[52px] items-center justify-between border-b-[1px] border-beGray px-5 text-[18px] font-medium"
            >
                <div class="relative mr-1 min-w-[60px]">
                    <img
                        class="h-10 w-10 rounded-[50%] border-[1px] border-white"
                        src="../../assets/example.png"
                        alt="profile"
                    />
                    <img
                        class="absolute bottom-0 right-0 h-10 w-10 rounded-[50%] border-[1px] border-white"
                        src="../../assets/example.png"
                        alt="profile"
                    />
                </div>
                <div class="flex h-9 w-full justify-between">
                    <div class="flex h-full items-center">Go***(2/2명)</div>
                    <div
                        class="flex h-9 w-[90px] items-center justify-center rounded-[3px] bg-white text-base font-semibold text-beGray2"
                    >
                        모집완료
                    </div>
                </div>
            </div>
        </div>

        <div
            class="flex h-[430px] w-full flex-col border-b-[13px] border-beGray pt-3"
        >
            <div class="flex flex-col border-b-[1px] px-5 pb-2">
                <div class="text-[19px] font-medium">
                    구매후기 <span class="font-bold">327</span>건
                </div>
                <div class="text-[19px] font-bold text-bePink2">평점 5.0</div>
            </div>
            <ReviewContent></ReviewContent>
            <div class="my-[18px] h-[40px] w-full px-5">
                <div
                    class="flex h-full cursor-pointer items-center justify-center rounded-[20px] border-[1px] border-beBlack text-base font-bold"
                    @click="$router.push(`/review-list/${$route.params.id}`)"
                >
                    <span class="text-beRed">327개</span>
                    &nbsp; 구매후기 전체 보기
                </div>
            </div>
        </div>

        <div
            class="relative flex w-full flex-col overflow-hidden border-b-[13px] border-beGray"
            :class="productInfoShow ? 'h-full' : 'max-h-[620px]'"
        >
            <div
                class="mt-[42px] flex w-full items-center justify-center text-[19px] font-bold"
            >
                상품소개
            </div>
            <div class="mt-[28px] h-full w-full px-[15px]">
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt=""
                />
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt=""
                />
            </div>
            <div
                v-if="!productInfoShow"
                class="absolute bottom-[24px] right-[50%] flex h-[46px] w-[calc(100%_-_40px)] translate-x-[50%] cursor-pointer items-center justify-center border-[1px] border-beGray4 bg-white px-5 text-base font-semibold"
                @click="productInfoShow = true"
            >
                상품정보 전체보기
            </div>
            <div
                v-if="productInfoShow"
                class="absolute bottom-[24px] right-[50%] flex h-[46px] w-[calc(100%_-_40px)] translate-x-[50%] cursor-pointer items-center justify-center border-[1px] border-beGray4 bg-white px-5 text-base font-semibold"
                @click="productInfoShow = false"
            >
                전체보기 닫기
            </div>
        </div>

        <div
            class="flex w-full flex-col overflow-hidden border-b-[13px] border-beGray text-[19px] font-medium"
        >
            <div
                class="flex h-[56px] w-full cursor-pointer items-center border-b-[1px] border-beGray px-5"
                @click="
                    $router.push(`/product-question-list/${$route.params.id}`)
                "
            >
                상품문의(00)
            </div>
            <div
                class="flex h-[56px] w-full items-center border-b-[1px] border-beGray px-5"
            >
                배송/교환/반품/환불 정책
            </div>
            <div class="flex h-[56px] w-full items-center px-5">회사정보</div>
        </div>

        <div
            class="mt-[18px] mb-[108px] grid grid-cols-2 gap-x-5 gap-y-[18px] px-5"
        >
            <div class="h-[184px] max-w-[184px]">
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt="product"
                />
            </div>
            <div class="h-[184px] max-w-[184px]">
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt="product"
                />
            </div>
            <div class="h-[184px] max-w-[184px]">
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt="product"
                />
            </div>
            <div class="h-[184px] max-w-[184px]">
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt="product"
                />
            </div>
            <div class="h-[184px] max-w-[184px]">
                <img
                    class="h-full w-full"
                    src="../../assets/example.png"
                    alt="product"
                />
            </div>
        </div>
        <ToastModal></ToastModal>

        <DetailFooter></DetailFooter>

        <ScrollToTop></ScrollToTop>
    </div>
</template>

<script>
import StarVue from '@/assets/svgComponents/Star.vue';
import ShareVue from '@/assets/svgComponents/Share.vue';
import SearchVue from '@/assets/svgComponents/Search.vue';
import ScrollToTop from '@/components/global/ScrollToTop.vue';
import HeartIcon from '@/assets/svgComponents/HeartIcon.vue';
import ReviewContent from '@/components/global/ReviewContent.vue';
import DetailFooter from '@/components/global/DetailFooter.vue';
import ToastModal from '@/components/global/ToastModal.vue';

export default {
    components: {
        StarVue,
        ShareVue,
        SearchVue,
        ScrollToTop,
        HeartIcon,
        ReviewContent,
        DetailFooter,
        ToastModal,
    },

    data() {
        return {
            productInfoShow: false,
        };
    },

    methods: {
        shareKakao() {
            window.Kakao.Share.sendDefault({
                objectType: 'commerce',
                content: {
                    title: '언제 어디든, 더 쉽고 편하게 당신의 일상을 더 즐겁게, 헤이 라이언의 이야기를 들려드릴게요.',
                    imageUrl:
                        'http://k.kakaocdn.net/dn/dScJiJ/btqB3cwK1Hi/pv5qHVwetz5RZfPZR3C5K1/kakaolink40_original.png',
                    link: {
                        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                        mobileWebUrl: 'http://192.168.101.224:4000/detail/1',
                        webUrl: 'http://192.168.101.224:4000/detail/1',
                    },
                },
                commerce: {
                    productName: '카카오미니',
                    regularPrice: 100000,
                    discountRate: 10,
                    discountPrice: 90000,
                },
                buttons: [
                    {
                        title: '구매하기',
                        link: {
                            mobileWebUrl:
                                'http://192.168.101.224:4000/detail/1',
                            webUrl: 'http://192.168.101.224:4000/detail/1',
                        },
                    },
                ],
            });
        },
    },
};
</script>
