// 示例：其它表单控件处理
const app = Vue.createApp({
	data() {
		return {
			username: "",
			gender: "",
			interests: [],
			occupation: "",
			intro: "",
		};
	},
	methods: {
		handleSubmit(e) {
			// e.preventDefault(); //设置了修饰符就不需要了(取消事件默认行为)
			console.log(
				this.username,
				this.gender,
				this.interests,
				this.occupation,
				this.intro
			);
		},
	},
});
app.mount("#app");
