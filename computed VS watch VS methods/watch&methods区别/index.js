// 示例：方法和监听器的区别
const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入门实战",
        "Vue 3.x 完全指南",
        "React 18 新特性介绍",
        "JavaScript 基础语法概览",
      ],
      newBlog: "",
    };
  },
  methods: {
    addANewBlog() {
      // 模拟耗时操作
      setTimeout(() => {
        this.blogPosts.push(this.newBlog);
      }, 2000);
    },
    handleButtonClick() {
      this.newBlog = "Vue 3.x 计算属性和监听器的区别";
    },
  },
  watch: {
    newBlog(newVal) {
      this.addANewBlog();
    },
  },
});
app.mount("#app");
