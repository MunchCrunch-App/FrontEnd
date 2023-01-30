<template>
  <div
    class="absolute top-0 flex flex-row items-center justify-between max-w-[428px] w-full h-[55px] bg-beRed"
  >
    <div class="ml-4">
      <img
        class="w-[88px] h-[37px]"
        src="../../assets/munchcrunch-logo.webp"
        alt="logo"
      />
    </div>
    <div
      class="flex flex-row mx-auto w-[128px] h-[32px] bg-beRed2 rounded-[20px] text-[14px] font-medium"
    >
      <div
        class="flex items-center justify-center w-full cursor-pointer"
        :class="
          petState === 0 ? 'bg-white text-beRed rounded-2xl' : 'text-white'
        "
        @click="petState = 0"
      >
        강아지
      </div>
      <div
        class="flex items-center justify-center w-full cursor-pointer"
        :class="
          petState === 1 ? 'bg-white text-beRed rounded-2xl' : 'text-white'
        "
        @click="petState = 1"
      >
        고양이
      </div>
    </div>
    <div class="flex flex-row items-center mr-4 gap-4">
      <img
        class="w-[25.6px] h-[24.6px]"
        src="../../assets/icon_search.svg"
        alt="search"
      />
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
