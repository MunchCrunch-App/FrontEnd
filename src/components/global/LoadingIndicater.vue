<template>
    <transition name="fade">
        <div class="spring-spinner relative rounded-full bg-beRed2">
            <img
                src="../../assets/munchcrunch-logo.webp"
                class="absolute top-[50%] left-[50%] w-[70px] translate-x-[-50%] translate-y-[-50%]"
            />
            <div class="spring-spinner-part top">
                <div class="spring-spinner-rotator"></div>
            </div>
            <div class="spring-spinner-part bottom">
                <div class="spring-spinner-rotator"></div>
            </div>
        </div>
        <!-- <div v-show="loading">
        <img class="h-20 w-20 z-10" src="/assets/icons/beluv_loading_new.gif" />
      </div> -->
    </transition>
</template>
<script>
export default {};
</script>
<style scoped>
.spring-spinner,
.spring-spinner * {
    box-sizing: border-box;
}

.spring-spinner {
    height: 100px;
    width: 100px;
}

.spring-spinner .spring-spinner-part {
    overflow: hidden;
    height: calc(100px / 2);
    width: 100px;
}

.spring-spinner .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
}

.spring-spinner .spring-spinner-rotator {
    width: 100px;
    height: 100px;
    border: calc(100px / 7) solid transparent;
    border-right-color: #e50014;
    border-top-color: #e50014;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 2s ease-in-out infinite;
    transform: rotate(-200deg);
}

@keyframes spring-spinner-animation {
    0% {
        border-width: calc(100px / 7);
    }
    25% {
        border-width: calc(100px / 23.33);
    }
    50% {
        transform: rotate(115deg);
        border-width: calc(100px / 7);
    }
    75% {
        border-width: calc(100px / 23.33);
    }
    100% {
        border-width: calc(100px / 7);
    }
}
</style>
