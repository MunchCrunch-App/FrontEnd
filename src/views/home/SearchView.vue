<template>
    <Layout :header="true">
        <Header title="검색"></Header>

        <div class="flex h-[90px] w-full items-center justify-center px-5">
            <div
                class="flex h-10 w-[390px] items-center rounded-[19.5px] border-[1px] border-solid border-beBlack pl-5"
            >
                <img
                    class="w-[18px]"
                    src="@/assets/munchcrunch_icon_search@2x.png"
                    alt="search"
                />
                <input
                    ref="searchinput"
                    type="text"
                    class="ml-3 h-full w-full rounded-r-[19.5px] bg-transparent outline-none placeholder:text-[17px]"
                    placeholder="검색어를 입력해주세요"
                />
            </div>
        </div>
        <div class="box-border flex w-full flex-col items-start px-5">
            <div class="mb-8 flex w-full flex-col items-start">
                <div class="text-xl font-medium">인기 검색어</div>
                <div class="text-[15px] font-extralight text-beGray2">
                    최근 검색 횟수가 급상승한 검색어에요
                </div>
            </div>
            <div class="mx-5 w-full pr-10">
                <div
                    class="box-border flex h-10 w-full items-center border-b-[1px] border-beGray"
                    v-for="(keyword, index) in popularKeywordList"
                    :key="index"
                >
                    <div
                        class="mr-5 flex w-2 items-center justify-center text-xl font-medium text-beRed"
                    >
                        {{ index + 1 }}
                    </div>
                    <div class="text-lg font-light">{{ keyword }}</div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import Header from '@/components/global/Header.vue';

export default {
    components: { Layout, Header },
    data() {
        return {
            popularKeywordList: [
                '닭고기 사료',
                '돼지고기 사료',
                '배변패드',
                '배변봉투',
                '화식',
                '덴탈껌',
                '모래',
                '개껌',
                '화식',
                '탈구방지',
            ],
        };
    },
    methods: {
        autoFocus() {
            this.$refs.searchinput.focus();
        },
    },
    mounted() {
        this.autoFocus();
    },
};
</script>
