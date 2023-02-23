<template>
    <div
        class="mx-5 flex h-[46px] cursor-pointer items-center justify-center rounded-[23px] bg-beRed font-semibold text-white"
        :class="font"
    >
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        font: {
            type: String,
            default: 'text-xl',
        },
    },
};
</script>
