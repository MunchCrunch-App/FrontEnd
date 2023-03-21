<template>
    <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
            <div
                class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-400 font-pretendard"
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
    transition: ass 0.3s ease-out;
}
.route-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.route-leave-active {
    transition: all 0.3s ease-in;
}
</style>
