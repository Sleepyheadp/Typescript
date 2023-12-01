// 示例：双向绑定
const app = Vue.createApp({
	data() {
		return {
			username: "",
		};
	},
	methods: {
		handleInput(e) {
			this.username = e.target.value;
			// console.log("value", e.target.value);
		},
	},
});
app.mount("#app");
