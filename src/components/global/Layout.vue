<template>
    <div
        class="relative h-screen w-full max-w-[428px] overflow-y-scroll bg-white scrollbar-hide"
        :class="isClass"
        @scroll="onScroll"
    >
        <slot></slot>
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
            //console.log(e);
        },
    },
};
</script>
