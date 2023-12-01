<template>
    <div>
        <h2>{{ blogPost.title }}</h2>
        <p>{{ blogPost.body }}</p>
        <router-link to="/blogList">回到列表页</router-link>
        <router-link :to="`/${blogPost.id - 10}`">上一篇</router-link>
        <router-link :to="`/${blogPost.id + 10}`">下一篇</router-link>
    </div>
</template>

<script>
import { getBlogPostById } from "../../../data/blogPosts";
export default {
    props: ['postId'],
    data() {
        return {
            blogPost: {}
        }
    },
    created() {
        console.log(this.postId);
        console.log(typeof this.postId); // 默认是string类型
        this.blogPost = getBlogPostById(this.postId)
        // => 最好使用props的这种形式，通过$route.params不利于组件的复用
        // this.blogPost = getBlogPostById(this.$route.params.postId)
    },
    // 为什么要监听props => postId
    // 因为我们在修改地址栏url的时候，只是路由的动态参数发生了变化，页面并没有切换，created函数只会
    // 执行一次，所以需要对props进行监听，每当数据变化的时候进行页面渲染。
    watch: {
        // "$route.params": {
        //     handler(params, oldParams) {
        //         this.blogPost = getBlogPostById(params.postId);
        //     },
        //     immediate: true,
        // },
        "postId": {
            handler() {
                this.blogPost = getBlogPostById(this.postId)
            }
        }
    },
}
</script>
<style scoped></style>