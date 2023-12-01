// 示例：根据条件添加或删除 class 样式
const app = Vue.createApp({
  data() {
    return {
      textClass: "text-blue",
      stateClass: "danger",
      isHidden: false,
    };
  },
});
app.mount("#app");
