<template>
    <RouterView v-slot="{ Component }">
        <Transition :name="transition" mode="in-out">
            <div
                class="fixed flex min-h-screen w-full items-center justify-center overflow-x-hidden overflow-y-hidden bg-slate-400 font-pretendard scrollbar-hide"
                :key="$route.name"
            >
                <component :is="Component"></component>
            </div>
        </Transition>
    </RouterView>
</template>

<script>
export default {
    data() {
        return {
            transition: '',
        };
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            if (toDepth === fromDepth) this.transition = 'slide-up';
            if (toDepth < fromDepth) this.transition = 'slide-right';
            if (toDepth > fromDepth) this.transition = 'slide-left';

            console.log(this.transition);
        },
    },
};
</script>
<style>
.transition {
    overflow: hidden;
}

.slide-left-enter-active {
    transition: all 0.3s ease-in-out;
    z-index: 2;
    transform: translateX(100%);
}
.slide-left-enter-to {
    z-index: 2;
    transform: translateX(0%);
}

.slide-right-enter-active {
    transition: all 0.3s ease-in-out;
    z-index: 2;
    transform: translateX(-100%);
}
.slide-right-enter-to {
    z-index: 2;
    transform: translateX(0%);
}

.slide-up-enter-active {
    transition: all 0.1s ease-in;
    z-index: 2;
    opacity: 0;
}
.slide-up-enter-to {
    z-index: 2;
    opacity: 1;
}

.slide-left-leave-active.slide-right-leave-active.slide-up-leave-active {
    transition: opacity 0.1s ease;
    z-index: -1;
}
.slide-left-leave-to.slide-right-leave-to.slide-up-leave-to {
    opacity: 0;
    z-index: -1;
}
</style>
