<template>
    <div>
        <div v-for="blogPost in blogPosts" :key="blogPost.id">
            <router-link :to="`/${blogPost.id}`" class="title">{{ blogPost.title }}</router-link>
            <div class="body">{{ blogPost.body }}</div>
            <!-- 通过字符串跳转 -->
            <button @click="$router.push(`/${blogPost.id}`)">查看全文</button>
            <!-- 使用配置对象跳转 -->
            <!-- <button @click="$router.push({
                name: 'blogPost',
                params: { postId: blogPost.id }
            })">查看全文</button> -->
            <!-- 通过$router.replace方法实现跳转：会替代当前路径为根路径 -->
            <!-- <button @click="$router.replace({
                name: 'blogPost',
                params: { postId: blogPost.id }
            })">查看全文</button> -->
            <!-- 前进或者后退 0是刷新当前页面-->
            <!-- <button @click="$router.go(-2)">查看全文</button> -->
        </div>
        <!-- 浏览器地址栏输入：/blogList/name=Capoo&age=18 -->
        <p>query:{{ $route.query }}</p>
        <!-- query:{ "name": "Capoo", "age": "18" } -->
    </div>
</template>
<script>
import { getAllPosts } from "../../../data/blogPosts"
export default {
    data() {
        return {
            blogPosts: []
        }
    },
    created() {
        this.blogPosts = getAllPosts()
    }
}
</script>
<style scoped></style>