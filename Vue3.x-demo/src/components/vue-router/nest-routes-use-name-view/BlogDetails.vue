<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.body }}</p>
  </article>
</template>
<script>
import { getBlogPostById } from "../../../data/blogPosts"
export default {
  data() {
    return {
      blog: {}
    }
  },
  // 当我们在切换博客详情一和博客详情二的时候，发现页面数据并没有更新，因为带有动态参数，页面并没有真正的跳转
  beforeRouteEnter(to, from, next) {
    // console.log(to);
    // console.log(this);// 不能访问实例，但是可以通过第三个参数next进行访问
    next((vm) => {
      setTimeout(() => {
        vm.blog = getBlogPostById(to.params.postId)
      }, 1000);
    })
  },
  // 先空白，然后再显示数据
  beforeRouteUpdate(to) {
    this.blog = {},
      setTimeout(() => {
        this.blog = getBlogPostById(to.params.postId)
      }, 1000)
  }
}
</script>
<style scoped>
article {
  padding: 48px;
}
</style>
