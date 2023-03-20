<template>
    <div
        class="mx-auto flex h-fit w-full max-w-[184px] cursor-pointer flex-col"
        @click="$router.push(`/detail/${product.id}`)"
    >
        <img
            class="mb-3 h-[160px]"
            :src="product.imageUrl"
            alt="productImage"
        />
        <div class="mb-1 break-keep text-[15px] font-medium text-beBlack">
            {{ product.title }}
        </div>
        <div class="flex h-fit items-center gap-3">
            <div class="h-fit text-base font-bold text-beRed2">
                {{ product.discountPer }}%
            </div>
            <div
                class="h-fit text-[13px] font-semibold text-beGray2 line-through"
            >
                {{ product.originPrice.toLocaleString() }}원
            </div>
        </div>
        <div class="h-fit text-base font-bold text-beRed">
            {{ product.discountPrice.toLocaleString() }}원
        </div>
        <div class="text-[13px] font-semibold text-beGray2">
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
