export const blogsModules = {
	namespaced: true,
	state() {
		return {
			list: ["blog1", "blog2", "blog3", "blog4", "blog5"],
		};
	},
	mutations: {
		addBlog(state, payload) {
			state.list.push(payload.blog);
		},
	},
	actions: {
		addBlogAsync({ commit, getters, rootGetters, rootState }, payload) {
			console.log(getters);
			console.log(rootGetters);
			console.log(rootState);

			setTimeout(() => {
				commit("addBlog", payload);
			}, 1000);
		},
		addBlogGlobal: {
			root: true,
			handler({ commit }, payload) {
				setTimeout(() => {
					commit("addBlog", payload);
				}, 1000);
			},
		},
	},
	getters: {
		limitedBlogCountStr(state, getters, rootState, rootGetters) {
			// return getters.limitStr + "博客";
			// Getters 现在只能访问本模块中的
			console.log(rootState); // 访问 root state
			return rootGetters.limitStr + "博客";
		},
		limitedBlogs(state, getters, rootState) {
			return state.list.slice(0, rootState.limit || -1);
		},
	},
};
