<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <Header :title="title"></Header>
    </div>
</template>

<script>
import Header from '@/components/global/Header.vue';
export default {
    components: {
        Header: Header,
    },
    data() {
        return {
            title: '',
        };
    },
    created() {
        if (this.$route.params.smallCategory === 'time-attack') {
            this.title = '타임어택';
        }
        if (this.$route.params.smallCategory === 'solo') {
            this.title = '솔로구매';
        }
        if (this.$route.params.smallCategory === 'munchs-pick') {
            this.title = '먼치스픽';
        }
        if (this.$route.params.smallCategory === 'leaders-pick') {
            this.title = '리더스픽';
        }
        if (this.$route.params.smallCategory === 'specialPrice') {
            this.title = '특가구매';
        }
        if (this.$route.params.smallCategory === 'team') {
            this.title = '팀구독';
        }
    },
};
</script>
