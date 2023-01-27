<template>
  <div class="flex flex-wrap items-center justify-center gap-5 my-5">
    <div
      class="flex flex-col w-[160px] h-fit"
      v-for="product in products"
      :key="product.id"
    >
      <img
        class="w-[160px] h-[160px] mb-3"
        :src="product.imageUrl"
        alt="productImage"
      />
      <div class="text-sm font-medium text-beBlack break-keep mb-1">
        {{ product.title }}
      </div>
      <div class="h-fit flex items-center gap-3">
        <div class="h-fit font-bold text-sm text-beRed2">
          {{ product.discountPer }}%
        </div>
        <div class="h-fit text-xs font-semibold text-beGray2 line-through">
          {{ product.originPrice.toLocaleString() }}원
        </div>
      </div>
      <div class="h-fit text-base font-bold text-beRed">
        {{ product.discountPrice.toLocaleString() }}원
      </div>
      <div class="text-xs font-semibold text-beGray2">
        {{ product.order.toLocaleString() }}명 구매 완료
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<style></style>
