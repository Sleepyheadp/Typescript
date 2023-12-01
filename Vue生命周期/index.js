// 示例：生命周期
const app = Vue.createApp({
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const res = await fetch("./posts.json");
      const postsData = await res.json();
      this.posts = postsData;
    },
  },
  created() {
    this.fetchPosts();
  },
});
const vm = app.mount("#app");
