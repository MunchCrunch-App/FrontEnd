<template>
  <div
    class="flex justify-center items-center w-full min-h-screen bg-slate-400"
  >
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/global/Header.vue';
import Footer from './components/global/Footer.vue';

export default {
  components: {
    Header: Header,
    Footer: Footer,
  },
};
</script>
