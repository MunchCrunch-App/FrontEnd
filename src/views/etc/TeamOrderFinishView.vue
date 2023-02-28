<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <Header title="구매완료"></Header>
        <div class="flex w-full flex-col">
            <div
                class="flex w-full flex-col border-b-[10px] border-beGray pt-[116px] pb-[100px]"
            >
                <div
                    v-if="true"
                    class="flex w-full flex-col items-center text-xl font-medium"
                >
                    <div>팀구매가 오픈되었습니다!</div>
                    <div>공유하기를 통해</div>
                    <div>팀구매를 성공시켜 보세요!</div>
                </div>
                <div
                    v-else
                    class="flex w-full flex-col items-center text-xl font-medium"
                >
                    <div>팀구매가 성공하여</div>
                    <div>구매가 완료되었습니다!</div>
                </div>
                <div
                    class="mt-[56px] flex w-full items-center justify-center gap-5"
                >
                    <div class="h-[92px] w-[92px] rounded-[50%]">
                        <img
                            class="h-full w-full rounded-[50%]"
                            src="../../assets/example.png"
                            alt="profile"
                        />
                    </div>
                    <div v-if="false" class="h-[92px] w-[92px] rounded-[50%]">
                        <img
                            class="h-full w-full rounded-[50%]"
                            src="../../assets/example.png"
                            alt="profile"
                        />
                    </div>
                    <div
                        v-else
                        class="flex h-[92px] w-[92px] items-center justify-center rounded-[50%] bg-bePink2 text-base font-medium"
                    >
                        모집중
                    </div>
                </div>
                <div
                    class="mt-[70px] flex w-full justify-center gap-[22px] text-lg font-semibold text-white"
                >
                    <div
                        class="flex h-[38px] min-w-[146px] cursor-pointer items-center justify-center rounded-[19px] bg-beRed"
                        @click="$router.push('/')"
                    >
                        쇼핑하기
                    </div>
                    <div
                        class="flex h-[38px] min-w-[146px] cursor-pointer items-center justify-center rounded-[19px] bg-beRed"
                        @click="shareKakao"
                    >
                        공유하기
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full p-9 text-base font-semibold">
            <div class="flex">
                <div class="mr-[56px]">상품명</div>
                <div class="text-[17px] font-medium text-beRed">
                    네츄럴코어 센시티브케어 베지 3kg
                </div>
            </div>
            <div class="mt-3 flex">
                <div class="mr-[56px]">배송지</div>
                <div class="text-base font-light">기본 배송지</div>
            </div>
            <div class="mt-3 flex">
                <div class="mr-[56px]">배송비</div>
                <div class="text-base font-light">3,000원</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/global/Header.vue';

export default {
    components: {
        Header,
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
