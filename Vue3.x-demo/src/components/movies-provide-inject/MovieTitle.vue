<template>
  <div>
    <h2>{{ title }}</h2>
    <!-- <h2>{{ movie.title }}</h2> -->
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  // 获取祖先元素定义的数据，直接可以使用 vue2.x
  // inject: ['title']
  setup() {
    // inject 第二个参数为默认值
    // const title = inject('title')
    // return { title }

    const title = inject('title')
    return { title }
  }
};
</script>
<style scoped>
h2 {
  color: hsl(240deg, 100%, 80%);
}
</style>
