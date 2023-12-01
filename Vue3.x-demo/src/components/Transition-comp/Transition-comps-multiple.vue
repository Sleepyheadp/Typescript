<template>
    <main>
        <div class="container">
            <Transition name="fade" mode="out-in">
                <!-- <div class="box" :class="box" :key="box"></div> -->
                <component :is="shape"></component>
            </Transition>
        </div>
    </main>
</template>
<script setup>
import { ref, computed, Transition } from "vue";
import CircleDot from './multiple-component-switching-animation/CircleDot.vue'
import RectangleBox from './multiple-component-switching-animation/RectangleBox.vue'
const shapes = [CircleDot, RectangleBox];
const current = ref(0);
const shape = computed(() => shapes[current.value]);
setInterval(() => {
    current.value = (current.value + 1) % shapes.length;
}, 1500);
</script>
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
            #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
}

#app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
}

.container {
    display: grid;
    height: 300px;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-enter-active {
    transition: all 0.7s ease-in-out;
}

.fade-leave-active {
    transition: all 0.3s ease-in;
}
</style>  