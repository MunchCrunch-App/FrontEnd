<template>
    <div class="mt-4 flex w-full px-5">
        <div class="mr-[10px] flex rounded-[50%]">
            <img
                class="h-10 w-10 rounded-[50%]"
                src="../../assets/example.png"
                alt="profile"
            />
        </div>
        <div class="flex flex-col">
            <div class="text-lg font-bold leading-tight">김단추</div>
            <div class="flex">
                <div class="mr-1 flex items-center">
                    <Star color="#f194fc" width="14"></Star>
                    <Star width="14"></Star>
                    <Star width="14"></Star>
                    <Star width="14"></Star>
                    <Star width="14"></Star>
                </div>
                <div class="flex items-center text-xs font-normal text-beGray2">
                    2022.11.06
                </div>
            </div>
        </div>
    </div>

    <div
        class="review mt-4 max-h-[42px] w-full px-5 text-base font-normal leading-tight"
    >
        센시티브케어 베지 3kg 얼마전에 특가로 올라와서 센시티브케 어 베지 3kg
        얼마전에 특가로 올라와서
        블라블라블라블라블라블라블라블라블라블라블라블라
    </div>

    <div class="mt-6 flex h-[125px] w-full justify-between px-5">
        <div class="h-[125px] w-[125px] rounded-[6px]">
            <img
                class="h-full w-full rounded-[6px]"
                src="../../assets/example.png"
                alt="product"
            />
        </div>
        <div class="h-[125px] w-[125px] rounded-[6px]">
            <img
                class="h-full w-full rounded-[6px]"
                src="../../assets/example.png"
                alt="product"
            />
        </div>
        <div class="relative h-[125px] w-[125px] rounded-[6px]">
            <img
                class="h-full w-full rounded-[6px]"
                src="../../assets/example.png"
                alt="product"
            />
            <div
                class="relative top-0 left-0 flex h-full w-full translate-y-[-100%] items-center justify-center rounded-[6px] bg-black/50 text-[30px] font-semibold text-white"
            >
                +3
            </div>
        </div>
    </div>

    <div v-if="slotState" class="mt-[22px] px-5">
        <div class="flex w-full gap-2 border-b-[1px] pb-6 font-light">
            <div
                class="flex h-[46px] w-full cursor-pointer items-center justify-center border-[1px] border-beGray4"
                :class="
                    helpState
                        ? 'border-none bg-beRed font-semibold text-white'
                        : null
                "
                @click="onHelpStateChange"
            >
                도움이 돼요
            </div>
            <div
                class="flex h-[46px] w-full cursor-pointer items-center justify-center border-[1px] border-beGray4"
                :class="
                    unHelpState
                        ? 'border-none bg-beRed font-semibold text-white'
                        : null
                "
                @click="onUnHelpStateChange"
            >
                도움이 안돼요
            </div>
        </div>
    </div>
</template>

<script>
import Star from '@/assets/svgComponents/Star.vue';

export default {
    components: {
        Star,
    },

    props: {
        slotState: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            helpState: false,
            unHelpState: false,
        };
    },

    methods: {
        onHelpStateChange() {
            this.helpState = !this.helpState;
            if (this.helpState === true && this.unHelpState === true) {
                this.unHelpState = false;
            }
        },
        onUnHelpStateChange() {
            this.unHelpState = !this.unHelpState;
            if (this.unHelpState === true && this.helpState === true) {
                this.helpState = false;
            }
        },
    },
};
</script>

<style scoped>
.review {
    white-space: normal;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
