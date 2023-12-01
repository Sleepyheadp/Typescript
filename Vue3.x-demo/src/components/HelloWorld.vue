<!-- <script>
Vue3.x的写法
defineProps({
  msg: String,
  version: {
    type: Number,
    default: 3,
    validator(val) {
      return val > 2
    }
  }
})
</script> -->


<script>
export default {
  // props: ['msg', 'version']
  props: {
    msg: {
      type: String,
      default: 'Vite + Vue'
    },
    version: {
      // 传参类型
      type: Number,
      // 参数默认值
      default: '2',
      // 添加传参时的验证条件。当val == 2时接收参数
      // 一般不在传参时做逻辑处理吧？
      validator(val) {
        return Number(val) == 2
      }
    }
  }
}
</script>

<template>
  <div>
    <p>hello {{ msg }} {{ version }}</p>
    <slot name="more"></slot>
  </div>
</template>

<style scoped></style>
