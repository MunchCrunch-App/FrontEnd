<template>
  <div
    class="relative max-w-[428px] w-full min-h-screen h-full pt-[55px] pb-[48px] font-pretendard"
  >
    찜
    <Footer :FooterClickState="FooterClickState"></Footer>
  </div>
</template>

<script>
import Footer from '../components/global/Footer.vue';
export default {
  data() {
    return {
      FooterClickState: 2,
    };
  },
  components: {
    Footer,
  },
};
</script>
