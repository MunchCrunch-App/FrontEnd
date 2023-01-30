<template>
  <div class="flex flex-col max-w-[160px] h-fit">
    <img class="h-[160px] mb-3" :src="product.imageUrl" alt="productImage" />
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
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style></style>
