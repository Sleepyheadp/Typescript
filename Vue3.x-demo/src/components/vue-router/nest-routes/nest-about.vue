<template>
    <div>
        这是关于我的页面...id:{{ $route.params.id }}
        <router-link to="/about/work">工作经历</router-link>
        <router-link to="/about/edu">教育经历</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>
<style scoped></style>