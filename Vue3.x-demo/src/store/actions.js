export default {
	// fetchUsers(context) {
	// 	setTimeout(() => {
	// 		context.commit("loadUsers", { users });
	// 	}, 1000);
	// },
	// fetchUsers({ commit }, payload) {
	// 	commit("setLoading", true);
	// 	setTimeout(() => {
	// 		commit("loadUsers", { users: users.slice(0, payload.limit) });
	// 		commit("setLoading", false);
	// 	}, 2000);
	// },
	async fetchUsers({ commit }) {
		// 这个await是什么意思？
		await new Promise((resolve) => setTimeout(resolve, 1000));
		commit("loadUsers", { users });
	},
	async fetchUsersAndBlogs({ dispatch, commit }) {
		await dispatch("fetchUsers"); // 执行fetchUsers异步方法
		await new Promise((resolve) => setTimeout(resolve, 1000));
		commit("loadBlogs", { blogs });
	},
	increment({ commit }) {
		setTimeout(() => {
			commit("increment");
		}, 1000);
	},
	// vuex-modules
	updateLimitAsync({ commit }, payload) {
		setTimeout(() => {
			commit("updatelimit", payload);
		}, 1000);
	},
};
