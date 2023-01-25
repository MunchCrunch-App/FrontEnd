<template>
  <div
    class="absolute top-0 flex flex-row items-center justify-between w-full h-[70px] bg-beRed"
  >
    <div class="ml-5">
      <img class="w-[120px] h-12" src="../../assets/logo.png" alt="logo" />
    </div>
    <div
      class="flex flex-row mx-auto w-[170px] h-[42px] bg-beRed2 text-[18px] rounded-[20px]"
    >
      <div
        class="flex items-center justify-center w-full text-white cursor-pointer"
        :class="petState === 0 ? 'bg-white text-beRed rounded-[20px]' : null"
        @click="petState = 0"
      >
        강아지
      </div>
      <div
        class="flex items-center justify-center w-full text-white cursor-pointer"
        :class="petState === 1 ? 'bg-white text-beRed rounded-[20px]' : null"
        @click="petState = 1"
      >
        고양이
      </div>
    </div>
    <div class="flex flex-row mr-5 gap-5">
      <img class="w-8 h-8" src="../../assets/icon_search.svg" alt="search" />
      <img class="w-8 h-8" src="../../assets/bell.svg" alt="search" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      petState: 0,
    };
  },
};
</script>

<style></style>
