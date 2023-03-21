<template>
    <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
            <div
                class="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden overflow-y-hidden bg-slate-400 font-pretendard scrollbar-hide"
                :key="$route.name"
            >
                <component :is="Component"></component>
            </div>
        </Transition>
    </RouterView>
</template>

<script>
export default {
    components: {},
};
</script>
<style>
.route-enter-from {
    opacity: 0;
    transform: translateX(100%);
}
.route-enter-active {
    transition: opacity 0.2s ease;
}
.route-enter-to {
    opacity: 1;
}
.route-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.route-leave-active {
    transition: all 0.5s ease;
}
.route-leave-from {
    opacity: 1;
}
</style>
