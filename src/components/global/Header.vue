<template>
    <div
        class="absolute top-0 flex h-[55px] w-full max-w-[428px] flex-row items-center justify-between bg-beRed"
    >
        <img
            class="z-10 ml-3 w-[28px] cursor-pointer"
            src="../../assets/icon-left.png"
            alt="left"
            @click="$router.go(-1)"
        />
        <div
            class="absolute flex w-full items-center justify-center text-xl font-bold text-white"
        >
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
};
</script>
