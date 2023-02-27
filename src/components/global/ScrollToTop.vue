<template>
    <div
        v-show="scrollState"
        class="fixed bottom-[80px] z-20 box-border flex w-full max-w-[428px] items-center justify-end pr-5"
    >
        <img
            class="h-[34px] w-[34px] cursor-pointer"
            src="@/assets/munchcrunch_button_gotop.png"
            alt="top"
            @click="scrollToTop"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollState: false,
        };
    },
    methods: {
        onScroll() {
            if (window.scrollY >= 900) {
                this.scrollState = true;
            } else this.scrollState = false;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
};
</script>
