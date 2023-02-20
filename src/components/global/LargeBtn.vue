<template>
    <div
        class="mx-5 flex h-[46px] items-center justify-center rounded-[23px] bg-beRed text-xl font-semibold text-white"
    >
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
};
</script>
