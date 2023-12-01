<template>
  <ul>
    <AppListItem v-for="(item, index) in globalError" :key="index">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["globalError"],
  components: {
    AppListItem,
  },
  mounted() {
    // 主动抛出异常
    // throw new Error('globalError-发生了异常')
  },
};
</script>
<style scoped></style>
