<template>
    <div
        class="absolute top-0 z-30 h-full min-h-screen w-full bg-beGray5 px-10"
        :class="display"
        @click="$emit('closeModal')"
    >
        <div
            class="fixed top-[50%] left-[50%] z-40 box-border flex min-h-[190px] w-[80%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[26px] bg-white px-5 pb-[28px] pt-[34px]"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        display: {
            type: String,
            default: null,
        },
    },
};
</script>
