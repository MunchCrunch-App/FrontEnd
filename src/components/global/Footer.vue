<template>
  <div
    class="absolute bottom-0 flex items-center justify-evenly w-full h-[70px] bg-white"
  >
    <div class="cursor-pointer">
      <HomeIcon
        :color="FooterClickState === 0 ? `#E50014` : `#000000`"
        @click="FooterClickState = 0"
      />
    </div>
    <div class="cursor-pointer">
      <ListIcon
        :color="FooterClickState === 1 ? `#E50014` : `#000000`"
        @click="FooterClickState = 1"
      ></ListIcon>
    </div>
    <div class="cursor-pointer">
      <HeartIcon
        :color="FooterClickState === 2 ? `#E50014` : `#000000`"
        @click="FooterClickState = 2"
      ></HeartIcon>
    </div>
    <div class="cursor-pointer">
      <MyPageIcon
        :color="FooterClickState === 3 ? `#E50014` : `#000000`"
        @click="FooterClickState = 3"
      ></MyPageIcon>
    </div>
  </div>
</template>

<script>
import HomeIcon from "../../assets/svgComponents/HeartIcon.vue";
import ListIcon from "../../assets/svgComponents/ListIcon.vue";
import HeartIcon from "../../assets/svgComponents/HeartIcon.vue";
import MyPageIcon from "../../assets/svgComponents/MyPageIcon.vue";

export default {
  components: {
    HomeIcon: HomeIcon,
    ListIcon: ListIcon,
    HeartIcon: HeartIcon,
    MyPageIcon: MyPageIcon,
  },
  data() {
    return {
      FooterClickState: 0,
    };
  },
};
</script>
