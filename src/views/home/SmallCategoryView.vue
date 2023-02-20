<template>
    <div
        class="relative h-full min-h-screen w-full max-w-[428px] bg-white pt-[55px] pb-[48px] font-pretendard"
    >
        <Header :title="title"></Header>
        <div class="flex h-full w-full flex-col px-5 pt-10">
            <div
                class="mb-5 flex w-full items-center justify-between text-[15px] font-light"
            >
                <div>총 <span class="font-semibold">00</span>개</div>
                <div class="flex">
                    <div class="border-r-[1px] border-beGray pr-3">최신순</div>
                    <div class="pl-3">필터</div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
                <Product
                    v-for="product in list"
                    :key="product.id"
                    :product="product"
                ></Product>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/global/Header.vue';
import Product from '@/components/home/globalHome/Product.vue';
import {
    getCurationTimeAttack,
    getCurationSolo,
    getCurationMunch,
    getCurationLeader,
    getCurationSpecial,
} from '@/api/get';
export default {
    components: {
        Header: Header,
        Product: Product,
    },
    data() {
        return {
            title: '',
            filterState: 0,
            list: [],
        };
    },
    created() {
        if (this.$route.params.smallCategory === 'time-attack') {
            this.title = '타임어택';
            getCurationTimeAttack(this.filterState).then((res) => {
                this.list = res.result;
            });
        }
        if (this.$route.params.smallCategory === 'solo') {
            this.title = '솔로구매';
            getCurationSolo(this.filterState).then((res) => {
                this.list = res.result;
            });
        }
        if (this.$route.params.smallCategory === 'munchs-pick') {
            this.title = '먼치스픽';
            getCurationMunch(this.filterState).then((res) => {
                this.list = res.result;
            });
        }
        if (this.$route.params.smallCategory === 'leaders-pick') {
            this.title = '리더스픽';
            getCurationLeader(this.filterState).then((res) => {
                this.list = res.result;
            });
        }
        if (this.$route.params.smallCategory === 'specialPrice') {
            this.title = '특가구매';
            getCurationSpecial(this.filterState).then((res) => {
                this.list = res.result;
            });
        }
        if (this.$route.params.smallCategory === 'team') {
            this.title = '팀구독';
        }
    },
};
</script>
