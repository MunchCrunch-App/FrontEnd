<template>
  <div
    class="fixed bottom-0 z-10 flex items-center justify-evenly w-full max-w-[428px] h-[48px] box-border bg-white"
  >
    <div class="cursor-pointer">
      <HomeIcon
        :color="FooterClickState === 0 ? `#E50014` : `#000000`"
        @click="onChangeFooter('/')"
      />
    </div>
    <div class="cursor-pointer">
      <ListIcon
        :color="FooterClickState === 1 ? `#E50014` : `#000000`"
        @click="onChangeFooter('/categoryshop')"
      ></ListIcon>
    </div>
    <div class="cursor-pointer">
      <HeartIcon
        :color="FooterClickState === 2 ? `#E50014` : `#000000`"
        @click="onChangeFooter('/mypick')"
      ></HeartIcon>
    </div>
    <div class="cursor-pointer">
      <MyPageIcon
        :color="FooterClickState === 3 ? `#E50014` : `#000000`"
        @click="onChangeFooter('/mypage')"
      ></MyPageIcon>
    </div>
  </div>
</template>

<script>
import HomeIcon from '@/assets/svgComponents/HomeIcon.vue';
import ListIcon from '@/assets/svgComponents/ListIcon.vue';
import HeartIcon from '@/assets/svgComponents/HeartIcon.vue';
import MyPageIcon from '@/assets/svgComponents/MyPageIcon.vue';

export default {
  props: {
    FooterClickState: Number,
  },
  components: {
    HomeIcon: HomeIcon,
    ListIcon: ListIcon,
    HeartIcon: HeartIcon,
    MyPageIcon: MyPageIcon,
  },
  data() {
    return {};
  },
  methods: {
    onChangeFooter(path) {
      this.$router.push(path);
    },
  },
};
</script>
