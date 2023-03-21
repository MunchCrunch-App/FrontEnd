<template>
    <div
        class="fixed top-0 z-30 h-full min-h-screen w-full bg-beBlack/50 px-10"
        :class="background"
        @click="$emit('closeModal')"
    >
        <div
            class="fixed bottom-0 left-[50%] z-40 flex w-full max-w-[428px] translate-x-[-50%] flex-col rounded-[20px] bg-white transition-all"
            :class="modal ? ' translate-y-0' : 'translate-y-[100%]'"
            @click.stop=""
        >
            <div class="mt-[38px] px-5">
                <div class="text-xl font-medium leading-[15px]">가격</div>
                <div
                    class="text-[42px] font-semibold"
                    :class="modalStyle.fontColor"
                >
                    15,700<span class="text-[28px]">원</span>
                </div>
                <div class="mt-5 text-xl font-medium leading-[15px]">
                    주문수량
                </div>
                <div class="mt-2 flex items-center gap-4">
                    <div
                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] text-xl font-semibold text-white"
                        :class="modalStyle.countBtn"
                        @click="countMinus"
                    >
                        -
                    </div>
                    <div class="text-[42px] font-semibold leading-none">
                        {{ count }}
                    </div>
                    <div
                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] text-xl font-semibold text-white"
                        :class="modalStyle.countBtn"
                        @click="countPlus"
                    >
                        +
                    </div>
                </div>
            </div>
            <div
                class="mt-[28px] flex h-20 w-full cursor-pointer items-center justify-center text-[22px] font-semibold text-white"
                :class="modalStyle.bgColor"
                @click="$router.push(`/order-payment/${$route.params.id}`)"
            >
                {{ modalStyle.btnTitle }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        display: {
            type: Boolean,
            default: false,
        },

        modalStyle: {
            type: Object,
            default: {
                fontColor: 'text-beRed',
                countBtn: 'bg-beRed',
                bgColor: 'bg-beRed',
                btnTitle: '2인 팀구매 오픈',
            },
        },
    },

    data() {
        return {
            count: 1,
            background: 'hidden',
            modal: false,
        };
    },

    watch: {
        display: {
            handler(value) {
                if (value === true) {
                    this.background = '';

                    setTimeout(() => (this.modal = true), 100);
                } else {
                    this.modal = false;
                    setTimeout(() => (this.background = 'hidden'), 100);
                }
            },
            immediate: true,
        },
    },

    methods: {
        countMinus() {
            if (this.count < 2) {
                return;
            } else this.count--;
        },

        countPlus() {
            this.count++;
        },
    },
};
</script>
