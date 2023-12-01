<template>
    <div>
        <!-- <vbindAnimation></vbindAnimation> -->
        <!-- <AnimationInOut></AnimationInOut> -->
        <!-- <TransitionInOut></TransitionInOut> -->
        <!-- <TransitionComps></TransitionComps> -->
        <!-- <TransitionCompsMultiple></TransitionCompsMultiple> -->
        <!-- <TransitionGroupComp></TransitionGroupComp> -->
        <AnimateCSS></AnimateCSS>
        <AnimateJS></AnimateJS>
    </div>
</template>
<script setup>
import AnimationInOut from '../components/Transition-comp/Animation-in-out.vue';
import TransitionComps from '../components/Transition-comp/Transition-comps.vue';
import TransitionInOut from '../components/Transition-comp/Transition-in-out.vue';
import vbindAnimation from '../components/Transition-comp/vbindAnimation.vue';
// 多个vue组件切换动画 animation
import TransitionCompsMultiple from '../components/Transition-comp/Transition-comps-multiple.vue'
// 处理列表项的进场/离场动画
import TransitionGroupComp from '../components/Transition-comp/TransitionGroup-comp.vue'
// Animation CSS 动画库
import AnimateCSS from "../components/Transition-comp/AnimateCSS.vue"
// JS 实现动画
import AnimateJS from "../components/Transition-comp/AnimateJS.vue"
</script>
<style></style>