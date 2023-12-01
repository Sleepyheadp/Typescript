import { createStore, createLogger } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { usersModules } from "./modules/users-modules";
import { blogsModules } from "./modules/blogs-modules";
import persistState from "./persist";
export const store = createStore({
	plugins: [
		createLogger({
			collapsed: false, // 默认展开
			// logActions: false,
			// logMutations: false,
			filter(mutation, stateBefore, stateAfter) {
				// stateBefore 或 stateAfter 可以用于过滤符合某些 state 变化的 mutations
				return mutation.type === "addUser";
			},
			actionFilter(action, state) {
				return action.type === "addUserAsync";
			},
			transformer(state) {
				// 只关注 Users 下的 list state 的变化
				return state.users.list;
			},
			mutationTransformer(mutation) {
				return `触发了 ${mutation.type}，payload 为 ${JSON.stringify(
					mutation.payload
				)}`;
			},
			actionTransformer(action) {
				return `触发了 ${action.type}，payload 为 ${JSON.stringify(
					action.payload
				)}`;
			},
			// logger: {
			// 	log: (log, styles, details) => console.error(log, styles, details), // details，例如触发的 action、mutation 等信息，和状态的变化
			// },
		}),
		persistState,
	],
	modules: {
		usersModules,
		blogsModules,
	},
	state() {
		return {
			color: [100, 100, 100],
			name: "Capoo",
			age: 25,
			work: "frontEnd",
			tip: "hello world!",
			num: 1,
			arr: [1, 2, 3],
			user: {
				id: 1,
				name: "John",
				age: 25,
				username: "",
				gender: "",
				occupation: "",
			},
			users: [],
			blogs: [],
			loading: false,
			// modules-vuex
			limit: 0,
		};
	},
	mutations: mutations,
	actions: actions,
	getters: getters,
});
