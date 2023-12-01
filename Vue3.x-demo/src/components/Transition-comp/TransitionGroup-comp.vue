<template>
    <main>
        <div class="container">
            <transition-group name="fade" tag="div">
                <RectangleBox v-for="(num, index) in nums" :key="num" @click="nums.splice(index, 1)">
                    {{ num }}
                </RectangleBox>
            </transition-group>
            <button @click="nums.splice(next % nums.length, 0, next++)">添加元素</button>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import RectangleBox from "./multiple-component-switching-animation/RectangleBox.vue";
const next = ref(7)
const nums = ref([0, 1, 2, 3, 4, 5, 6])
</script>
<style scoped>
.container {
    display: grid;
    gap: 48px;
}

.container>div {
    display: flex;
    gap: 24px;
}

.container button {
    justify-self: start;
}

button {
    border: none;
    background: linear-gradient(90deg,
            hsl(200deg, 50%, 50%),
            hsl(240deg, 50%, 50%));
    padding: 12px 18px;
    margin-top: 12px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
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