<template>
  <div
    class="flex justify-center items-center w-full min-h-screen bg-slate-400"
  >
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Layout from "./components/global/Layout.vue";
export default {
  components: {
    Layout: Layout,
  },
};
</script>
