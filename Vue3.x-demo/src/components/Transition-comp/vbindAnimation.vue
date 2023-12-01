<template>
    <div>
        <p>v-bind绑定动画秒数：</p>
        <div class="box2"></div>
        <input type="text" v-model="duration">
    </div>
</template>
<script setup>
import { ref } from 'vue'
const duration = ref(50)
</script>
<style scoped>
.box2 {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg,
            hsl(140deg, 60%, 50%),
            hsl(200deg, 90%, 50%));
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
    margin: 30px;
    transition: all 0.5s ease-in-out;
    /* animation: rotateBox 10s linear infinite; */
    animation: rotateBox v-bind(duration + 's') linear infinite;
}

/* .box2:hover {
    transform: scale(1.25) skewY(-20deg) rotateY(20deg);
} */

@keyframes rotateBox {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>