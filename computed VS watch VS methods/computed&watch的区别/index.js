const app = Vue.createApp({
	data() {
		return {
			blogPosts: [
				"Vue 3.0x 入门实战",
				"Vue 3.x 完全指南",
				"React 18 新特性介绍",
				"JavaScript 基础语法概览",
			],
			newBlog: "", // 使用watch进行监听
			count: 0,
		};
	},
	/*
		计算属性通常是对数据进行一些处理然后返回新的值，并不会对原有的数据进行改变，有返回值。例如对数组的过滤。
		对计算属性的使用跟模版语法中的一样  {{ 计算属性名 }}
	*/
	computed: {
		vueBlogs() {
			console.log("调用了 vueBlogs() 计算属性函数");
			return this.blogPosts.filter((blog) => blog.includes("Vue"));
		},
	},
	/*
		watch监听器可以根据监听的值来修改其他的值，并且可以直接修改data中的值，没有返回值
		数组元素的内容发生改变时监听不到，因此需要设置deep:true,
	*/
	watch: {
		// blogPosts: {
		// 	handler(newVal, oldVal) {
		// 		this.count = newVal.length;
		// 	},
		// 	deep: true,
		// },
		newBlog(newVal, oldVal) {
			setTimeout(() => {
				this.blogPosts.push(newVal);
				this.count += 1;
			}, 2000); //每过2s执行一次
		},
	},
	methods: {},
});
app.mount("#app");
