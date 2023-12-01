<template>
  <main>
    <p v-if="error">componentError：报错了哦</p>
    <ul v-else>
      <AppListItem v-for="(item, index) in componentError" :key="index">{{ item }}</AppListItem>
    </ul>
  </main>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["componentError"],
  components: {
    AppListItem,
  },
  data() {
    return {
      error: false
    }
  },
  // 箭头函数内部无this指向
  // 此处就捕获了AppListItem.vue的报错信息
  // 组件内的报错信息会冒泡向上传递
  errorCaptured(err, vm, info) {
    this.error = true;
    // 这里如果不阻止后续的错误传递，则会传递到父组件home.vue中，而其中没有捕获错误的逻辑，因此会报错。
    // 这个时候我们就需要在父组件中处理报错信息
    // return false
  },
};
</script>
<style scoped></style>
