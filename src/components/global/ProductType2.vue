<template>
    <div
        class="flex h-fit w-full flex-row border-b-[10px] border-beGray px-5 py-6"
        @click="$store.dispatch('getProductDetail', { id: product.id })"
    >
        <img
            class="mr-3 h-[192px]"
            :src="product.imageUrl"
            alt="productImage"
        />
        <div class="flex flex-col justify-center">
            <div
                class="mb-1 break-keep text-[16px] font-medium leading-tight text-beBlack"
            >
                {{ product.title }}
            </div>
            <div class="h-fit text-base font-bold text-beRed2">
                {{ product.discountPer }}%
            </div>
            <div class="flex h-fit items-center gap-3 leading-normal">
                <div class="h-fit text-base font-bold text-beRed">
                    {{ product.discountPrice.toLocaleString() }}원
                </div>
                <div
                    class="h-fit text-[13px] font-semibold text-beGray2 line-through"
                >
                    {{ product.originPrice.toLocaleString() }}원
                </div>
            </div>

            <div class="text-[13px] font-semibold text-beGray2">
                {{ product.order.toLocaleString() }}명 구매 완료
            </div>
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
