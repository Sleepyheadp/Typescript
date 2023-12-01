const app = Vue.createApp({
	data() {
		return {
			msg: "你好！",
			name: "张三",
		};
	},
	computed: {
		greetings() {
			return `${this.msg} ${this.name}`;
		},
	},
	methods: {
		changeName(name) {
			this.name = name;
		},
	},
	watch: {
		name(newName) {
			console.log("watch 监听：" + newName);
		},
	},
	// 通过vm就可以调用vue的各种实例了
	/*
    vm.$watch('name',newName=>{
      console.log('拿到了新值:'+newName)
    })
    vm.changeName('李四')
    vm.$data 取到所有的值
  */
});
const vm = app.mount("#app");
