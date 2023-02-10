<template>
  <div
    class="relative max-w-[428px] w-full min-h-screen h-full pt-[55px] pb-[48px] font-pretendard"
  >
    카테고리 샵
    <Footer :FooterClickState="FooterClickState"></Footer>
  </div>
</template>

<script>
import Footer from '../components/global/Footer.vue';
export default {
  components: {
    Footer,
  },
  data() {
    return {
      FooterClickState: 1,
    };
  },
};
</script>
