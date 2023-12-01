<template>
    <div>
        <nav>
            <a v-for="(route, path) in routes" :key="route.label" :href="path" @click.prevent="changeRoute(path)">{{
                route.label
            }}</a>
        </nav>
        <component :is='currentPage' />
    </div>
</template>
<script setup>
import PageOne from '../../components/vue-router/page-spa/PageOne.vue'
import PageTwo from '../../components/vue-router/page-spa/pageTwo.vue'
import PageThree from '../../components/vue-router/page-spa/PageThree.vue'
import { ref, computed } from 'vue'
const routes = {
    "/1": {
        component: PageOne,
        label: "页面1"
    },
    "/2": {
        component: PageTwo,
        label: '页面2'
    },
    "/3": {
        component: PageThree,
        label: '页面3'
    }
}
const currentPath = ref(location.pathname)
const currentPage = computed(
    () => routes[currentPath.value].component || PageOne
)
// 点击修改当前path
function changeRoute(path) {
    history.pushState(null, null, path);
    console.log('path->', path);
    currentPath.value = location.pathname
}
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

nav {
    padding: 24px 0;
}

nav a {
    font-size: 18px;
    color: white;
    margin-right: 24px;
    /* cursor: pointer; */
}

/* button {
    border: none;
    background: linear-gradient(
        90deg,
        hsl(240deg, 50%, 50%),
        hsl(280deg, 50%, 50%)
    );
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
} */
</style>