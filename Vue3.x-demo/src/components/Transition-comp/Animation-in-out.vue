<template>
    <div class="container">
        <button @click="boxShow = !boxShow">{{ show ? '隐藏' : '显示' }}</button>
        <div :class='animationClasses' v-if="boxShow"></div>
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
const boxShow = ref(false)
const animationClasses = ref(['box'])
watchEffect(() => {
    // animation的开始和结束class不能同时设置，所以用了定时器from-to
    if (boxShow.value) {
        animationClasses.value = ["box", "box-enter-active", "box-enter-from"];
        setTimeout(() => {
            animationClasses.value.push('box-enter-to')
        }, 500);
    }
    else {
        animationClasses.value = ['box', "box-leave-active", "box-leave-from"];
        setTimeout(() => {
            animationClasses.value.push('box-leave-to')
        }, 500);
    }
})
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

.box-enter-active {
    transition: all 1s ease-in-out;
}

/* from->to 从开始到结束 */
.box-enter-from {
    opacity: 0;
}

.box-enter-to {
    opacity: 1;
}

/** 离场动画暂时不生效 */
.box-leave-active {
    transition: all 0.3s ease-in-out;
}

.box-leave-from {
    /** 不透明 */
    opacity: 1;
}

.box-leave-to {
    /** 透明 */
    opacity: 0;
}
</style>