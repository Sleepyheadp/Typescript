<template>
    <div>
        <router-link :to="{ name: 'home', params: { id: 100 } }">首页</router-link>
        <router-link :to="{ name: 'about', params: { id: 200 } }">关于</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>
<style scoped></style>