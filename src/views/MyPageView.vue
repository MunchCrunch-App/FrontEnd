<template>
  <div
    class="relative max-w-[428px] w-full min-h-screen h-full pt-[55px] pb-[48px] font-pretendard"
  >
    마이페이지
    <Footer :FooterClickState="FooterClickState"></Footer>
  </div>
</template>

<script>
import Footer from '../components/global/Footer.vue';
export default {
  data() {
    return {
      FooterClickState: 3,
    };
  },
  components: {
    Footer,
  },
};
</script>
