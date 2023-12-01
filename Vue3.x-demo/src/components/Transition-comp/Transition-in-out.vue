<template>
    <div class="container">
        <button @click="boxShow = !boxShow">{{ show ? '隐藏' : '显示' }}</button>
        <transition name="fadeAndScale">
            <div class='box' v-if="boxShow"></div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const boxShow = ref(false)
const animationClasses = ref(['box'])
</script>
<style scoped>
.box {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg,
            hsl(240deg, 60%, 50%),
            hsl(300deg, 90%, 50%));
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
}

.fadeAndScale-enter-from {
    opacity: 0;
}

.fadeAndScale-enter-to {
    opacity: 1;
}

.fadeAndScale-enter-active {
    transition: all 1s ease-in-out;
    animation: scaleBox 1s ease-in-out;
}

.fadeAndScale-leave-from {
    opacity: 1;
}

.fadeAndScale-leave-to {
    opacity: 0;
}

.fadeAndScale-leave-active {
    transition: all 0.3s ease-in;
    animation: scaleBox 0.3s ease-in reverse;
}

/* 缩放盒子 */
@keyframes scaleBox {
    0% {
        transform: scale(0);
    }

    33% {
        transform: scale(1.1);
    }

    66% {
        transform: scale(0.9);
    }

    100% {
        transform: scale(1);
    }
}
</style>