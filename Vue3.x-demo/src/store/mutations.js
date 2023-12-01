import { INCREMENT } from "../mutations_type";
export default {
	randomColor(state) {
		state.color = [
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
		];
	},
	[INCREMENT](state) {
		state.num++;
	},
	pushToArr(state, payload) {
		state.arr.push(payload.ele);
	},
	changeUserName(state, payload) {
		state.user.name = payload.name;
	},
	loadUsers(state, payload) {
		state.users = payload.users; // payload需要是对象类型
	},
	loadBlogs(state, payload) {
		state.blogs = payload.blogs;
	},
	setLoading(state, loading) {
		state.loading = loading;
	},
	updateUser(state, payload) {
		state.user[payload.field] = payload.value;
	},
	// vuex-modules
	updateLimit(state, payload) {
		state.limit = payload.limit;
	},
};
