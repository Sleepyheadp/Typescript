const app = Vue.createApp({
	data() {
		return {
			blogPosts: [
				"Vue 3.0x 入门实战",
				"Vue 3.x 完全指南",
				"React 18 新特性介绍",
				"JavaScript 基础语法概览",
			],
			counter: 0,
		};
	},
	computed: {
		vueBlogs() {
			console.log("调用了 vueBlogs() 计算属性函数");
			return this.blogPosts.filter((blog) => blog.includes("Vue"));
		},
	},
	methods: {
		getVueBlogs(count) {
			console.log("调用了 vueBlogs() 方法");
			return this.blogPosts
				.filter((blog) => blog.includes("Vue"))
				.slice(0, count);
		},
	},
});
app.mount("#app");
