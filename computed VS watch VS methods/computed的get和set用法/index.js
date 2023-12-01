// 示例：计算属性和监听器的区别
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
			newBlogPost: "", // 使用 computed 的方式
			count: 4, // 使用 watch 的方式
		};
	},
	computed: {
		count() {
			return this.blogPosts.length;
		},
		newBlog: {
			get() {
				return this.newBlogPost;
			},
			set(value) {
				this.newBlogPost = value; // 需要手动赋值，无法访问之前的值，烦琐
				setTimeout(() => {
					this.blogPosts.push(value); // 虽然代码中可以修改其它属性，但推荐只对它所计算的属性进行修改，并且不要进行异步的修改。
				}, 2000);
			},
		},
	},
	watch: {
		// blogPosts: {
		//   handler(newVal) {
		//     this.count = newVal.length;
		//   },
		//   deep: true,
		// },
		// newBlog(newVal) {
		//   // 模拟耗时操作
		//   setTimeout(() => {
		//     this.blogPosts.push(newVal);
		//   }, 2000);
		// },
	},
});
app.mount("#app");
