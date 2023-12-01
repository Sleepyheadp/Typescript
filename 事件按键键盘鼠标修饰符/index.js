// 示例：处理键盘、鼠标事件的修饰符
const app = Vue.createApp({
	data() {
		return {
			comments: ["好", "非常好", "赞"],
			comment: "",
		};
	},
	methods: {
		addComment() {
			this.comments.push(this.comment);
			this.comment = "";
		},
	},
});
app.mount("#app");
