<template>
    <div
        class="relative h-screen w-full max-w-[428px] overflow-y-scroll bg-white scrollbar-hide"
        :class="isClass"
        id="layout"
        @scroll="onScroll"
    >
        <slot></slot>
        <div
            v-show="scrollState"
            class="fixed bottom-[80px] z-20 box-border flex w-full max-w-[428px] items-center justify-end pr-5"
            @scroll="onScroll"
        >
            <img
                class="h-[34px] w-[34px] cursor-pointer"
                src="@/assets/munchcrunch_button_gotop.png"
                alt="top"
                @click="scrollToTop"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        flex: {
            type: Boolean,
            default: false,
        },
        header: {
            type: Boolean,
            default: false,
        },
        footer: {
            type: Boolean,
            default: false,
        },
        detailFooter: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            scrollState: false,
        };
    },
    computed: {
        isClass() {
            let text = '';
            if (this.flex) text = 'flex flex-col';
            if (this.header) text = text.concat(' ', 'pt-[56px]');
            if (this.footer) text = text.concat(' ', 'pb-[48px]');
            if (this.detailFooter) text = text.concat(' ', 'pb-[108px]');
            return text;
        },
    },
    methods: {
        onScroll(e) {
            if (e.target.scrollTop >= 900) {
                this.scrollState = true;
            } else this.scrollState = false;
        },
        scrollToTop() {
            document
                .getElementById('layout')
                .scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
};
</script>
