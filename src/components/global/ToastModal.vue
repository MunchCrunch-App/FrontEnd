<template>
    <div
        class="absolute top-0 z-30 h-full min-h-screen w-full bg-beBlack/50 px-10"
        :class="display"
        @click="$emit('closeModal')"
    >
        <div
            class="fixed bottom-0 left-[50%] z-30 flex w-full max-w-[428px] translate-x-[-50%] flex-col rounded-[20px] bg-white"
        >
            <div class="mt-[38px] px-5">
                <div class="text-xl font-medium leading-[15px]">가격</div>
                <div class="text-[42px] font-semibold text-beRed">
                    15,700<span class="text-[28px]">원</span>
                </div>
                <div class="mt-5 text-xl font-medium leading-[15px]">
                    주문수량
                </div>
                <div class="mt-2 flex items-center gap-4">
                    <div
                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] bg-beRed text-xl font-semibold text-white"
                        @click="countMinus"
                    >
                        -
                    </div>
                    <div class="text-[42px] font-semibold leading-none">
                        {{ count }}
                    </div>
                    <div
                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] bg-beRed text-xl font-semibold text-white"
                        @click="countPlus"
                    >
                        +
                    </div>
                </div>
            </div>
            <div
                class="mt-[28px] flex h-20 w-full items-center justify-center bg-beRed text-[22px] font-semibold text-white"
            >
                2인 팀구매 오픈
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1,
        };
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
