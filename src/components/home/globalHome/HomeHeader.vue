<template>
    <div
        class="fixed top-0 z-50 flex h-[55px] w-full max-w-[428px] flex-row items-center justify-between bg-beRed"
    >
        <div class="ml-4 cursor-pointer" @click="$router.push('/')">
            <img
                class="h-[37px] w-[88px]"
                src="../../../assets/munchcrunch-logo.webp"
                alt="logo"
            />
        </div>
        <div
            class="mx-auto flex h-[32px] w-[128px] flex-row rounded-[20px] bg-beRed2 text-[14px] font-medium"
        >
            <div
                class="flex w-full cursor-pointer items-center justify-center"
                :class="
                    petState === 0
                        ? 'rounded-2xl bg-white text-beRed'
                        : 'text-white'
                "
                @click="petState = 0"
            >
                강아지
            </div>
            <div
                class="flex w-full cursor-pointer items-center justify-center"
                :class="
                    petState === 1
                        ? 'rounded-2xl bg-white text-beRed'
                        : 'text-white'
                "
                @click="petState = 1"
            >
                고양이
            </div>
        </div>
        <div class="mr-4 flex flex-row items-center gap-4">
            <img
                class="h-[24.6px] w-[25.6px] cursor-pointer"
                src="../../../assets/icon_search.svg"
                alt="search"
                @click="$router.push('/search')"
            />
            <img class="h-8 w-8" src="../../../assets/bell.svg" alt="search" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            petState: 0,
        };
    },
};
</script>
