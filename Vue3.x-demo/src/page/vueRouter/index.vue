<template>
    <div>
        <!-- 通过JS实现vue的路由功能 -->
        <!-- <vueRouterJS></vueRouterJS> -->
        <!-- vue-router router-link router-view -->
        <!-- <vueRouter></vueRouter> -->
        <!-- 路由嵌套：子路由 -->
        <!-- <RouterSonComp></RouterSonComp> -->

        <!-- 命名视图 -->
        <!-- <nav>
            <router-view name="nav"></router-view>
        </nav> -->
        <!-- 不设置name，则默认为default -->
        <!-- <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-view name="footer"></router-view>
        </footer> -->
        <!-- 嵌套路由中使用命名视图 -->
        <!-- 路由过渡动画 -->
        <!-- v-slot="{Component}" 意思是将当前的路由组件（Component）解构出来 -->
        <!-- <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </router-view> -->
        <router-view v-slot="{ Component }">
            <transition :name="$route.meta.transition || 'fade'" mode="out-in">
                <component :is="Component"></component>
                <!-- 对于 /1，/2类似的跳转，组件会进行复用，过渡不会执行。添加 key 可以强制执行过渡 -->
                <!-- <component :is="Component" :key="route.path" /> -->
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import vueRouterJS from './vueRouterJS.vue'
import vueRouter from './vueRouter.vue'
import RouterSonComp from './router-son-comp.vue'
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fadeAndMove-enter-active {
    transition: all 0.4s;
}

.fadeAndMove-enter-from {
    transform: translateY(-10px);
    opacity: 0;
}
</style>