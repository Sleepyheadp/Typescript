export default {
	// 返回年龄大于26的user
	usersOlderThan26(state) {
		return state.users.filter((user) => user.age > 26);
	},
	// 总计(getters方法内也可以调用其他的getters方法)
	numberOfUsersOlderThan26(state, getters) {
		return getters.usersOlderThan26.length;
	},
	//
	usersOlderThan(state) {
		// age 和 user 怎么看的有点晕呢？
		// => 其实就是过滤users数组中大于传递参数值的项
		return (age) => state.users.filter((user) => user.age > age);
	},
	// vuex-modules
	limitStr(state) {
		return "限" + state.limit + "条";
	},
};
