const app = Vue.createApp({
	data() {
		return {
			showAnswer: false,
			countDown: 5,
			timer: null,
		};
	},
	methods: {
		toggleAnswer() {
			this.showAnswer = !this.showAnswer;
		},
	},
	computed: {
		label() {
			return this.showAnswer ? "隐藏答案" + this.countDown : "显示答案";
		},
	},
	watch: {
		showAnswer(newVal, oldVal) {
			if (newVal) {
				// 初始化timer的值
				this.countDown = 5;
				// 首先判断定时器是否存在，存在时则清除定时器
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}
				// 定时器内部操作：5s后关闭答案
				this.timer = setInterval(() => {
					this.countDown -= 1;
					if (this.countDown === 0) {
						// 多了一个判断，当定时器为0时则隐藏答案
						this.showAnswer = false;
						clearInterval(this.timer);
						this.timer = null;
					}
				}, 1000);
			}
		},
	},
});
app.mount("#app");
