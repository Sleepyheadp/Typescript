// 示例：给 v-bind 和 v-on 设置动态参数
const app = Vue.createApp({
  data() {
    return {
      attr: "placeholder",
      value: "请输入一些字符",
      event: "change",
    };
  },
  methods: {
    handleChange() {
      console.log("input 变化");
    },
  },
});
app.mount("#app");
