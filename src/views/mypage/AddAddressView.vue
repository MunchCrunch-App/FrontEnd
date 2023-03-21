<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="새 배송지 추가하기 "></MypageHeader>
        <div
            class="my-[44px] w-full px-[28px] text-base font-semibold text-beGray2"
        >
            <input
                class="mb-3 flex min-h-[60px] w-full items-center justify-center border-[1px] border-beGray4 text-center outline-none placeholder:text-center"
                v-model="name"
                placeholder="이름"
            />
            <input
                class="mb-3 flex min-h-[60px] w-full items-center justify-center border-[1px] border-beGray4 text-center outline-none placeholder:text-center"
                v-model="phone"
                placeholder="전화번호"
            />
            <div
                v-show="searchBtnState"
                class="mb-3 flex min-h-[60px] w-full cursor-pointer items-center justify-center bg-beRed text-center text-xl font-bold text-white"
                @click="sample3_execDaumPostcode"
            >
                주소검색
            </div>
            <div
                id="wrap"
                style="
                    display: none;
                    border: 1px solid;
                    width: 100%;
                    height: 300px;
                    margin: 5px 0;
                    position: relative;
                "
            >
                <img
                    src="//t1.daumcdn.net/postcode/resource/images/close.png"
                    id="btnFoldWrap"
                    style="
                        cursor: pointer;
                        position: absolute;
                        right: 0px;
                        top: -1px;
                        z-index: 1;
                    "
                    @click="foldDaumPostcode"
                    alt="접기 버튼"
                />
            </div>
            <div v-show="!!address">
                <input
                    class="mb-3 flex min-h-[60px] w-full items-center justify-center border-[1px] border-beGray4 text-center outline-none placeholder:text-center"
                    v-model="address"
                    placeholder="주소"
                />
                <input
                    class="mb-[30px] flex min-h-[60px] w-full items-center justify-center border-[1px] border-beGray4 text-center outline-none placeholder:text-center"
                    v-model="detailAddress"
                    id="detailAddress"
                    placeholder="상세주소"
                />

                <div class="flex flex-col justify-center">
                    <div class="text-lg font-semibold text-black">
                        공동현관 비밀번호
                    </div>
                    <div
                        class="mt-2 flex items-center text-[17px] font-light text-black"
                    >
                        <div class="mr-7 flex items-center">
                            <div
                                class="mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                            ></div>
                            <div class="whitespace-nowrap">없음</div>
                        </div>
                        <div class="flex items-center">
                            <div
                                class="mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                            ></div>
                            <div class="flex items-center">
                                <div class="mr-1 whitespace-nowrap">
                                    비밀번호 :
                                </div>
                                <input
                                    type="text"
                                    id="password"
                                    class="max-w-[180px] outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-9 flex flex-col justify-center">
                    <div class="text-lg font-semibold text-black">수령방식</div>
                    <div
                        class="mt-2 flex items-center text-[17px] font-light text-black"
                    >
                        <div class="mr-7 flex items-center">
                            <div
                                class="mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                            ></div>
                            <div class="whitespace-nowrap">문 앞</div>
                        </div>
                        <div class="flex items-center">
                            <div
                                class="mr-1 box-border h-[18px] w-[18px] rounded-[50%] border-2 border-beGray4"
                            ></div>
                            <div class="flex items-center">
                                <div class="mr-1 whitespace-nowrap">
                                    직접입력 :
                                </div>
                                <input
                                    type="text"
                                    id="password"
                                    class="max-w-[180px] outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    data() {
        return {
            name: null,
            phone: null,
            address: null,
            detailAddress: null,
            doorPassword: null,
            receiveMethod: null,
            searchBtnState: true,
            element_wrap: '',
        };
    },
    watch: {
        address: {
            handler(value) {
                if (value === '' || value === null) {
                    this.searchBtnState = true;
                    this.address = null;
                    this.detailAddress = null;
                    this.doorPassword = null;
                    this.receiveMethod = null;
                }
            },
            immediate: true,
        },
    },
    methods: {
        foldDaumPostcode() {
            // iframe을 넣은 element를 안보이게 한다.
            this.element_wrap.style.display = 'none';
            this.searchBtnState = true;
        },
        sample3_execDaumPostcode() {
            this.searchBtnState = false;

            // 현재 scroll 위치를 저장해놓는다.
            const currentScroll = Math.max(
                document.body.scrollTop,
                document.documentElement.scrollTop,
            );
            new window.daum.Postcode({
                oncomplete: (data) => {
                    // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    let addr = ''; // 주소 변수
                    let extraAddr = ''; // 참고항목 변수

                    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === 'R') {
                        // 사용자가 도로명 주소를 선택했을 경우
                        addr = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        addr = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === 'R') {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (
                            data.bname !== '' &&
                            /[동|로|가]$/g.test(data.bname)
                        ) {
                            extraAddr += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (
                            data.buildingName !== '' &&
                            data.apartment === 'Y'
                        ) {
                            extraAddr +=
                                extraAddr !== ''
                                    ? ', ' + data.buildingName
                                    : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (extraAddr !== '') {
                            extraAddr = ' (' + extraAddr + ')';
                        }
                        // 조합된 참고항목을 해당 필드에 넣는다.
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    this.address = `(${data.zonecode}) ${addr} ${extraAddr}`;

                    // 커서를 상세주소 필드로 이동한다.
                    document.getElementById('detailAddress').focus();

                    // iframe을 넣은 element를 안보이게 한다.
                    // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                    this.element_wrap.style.display = 'none';

                    // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                    document.body.scrollTop = currentScroll;
                },
                onresize: (size) => {
                    this.element_wrap.style.height = size.height + 'px';
                },
                width: '100%',
                height: '100%',
            }).embed(this.element_wrap);

            // iframe을 넣은 element를 보이게 한다.
            this.element_wrap.style.display = 'block';
        },
    },
    mounted() {
        this.element_wrap = document.getElementById('wrap');
    },
};
</script>
