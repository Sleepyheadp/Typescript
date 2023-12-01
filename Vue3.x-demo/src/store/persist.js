export default function persistState(store) {
	// 每次在页面销毁的时候将state的值存入localstorage
	// window.addEventListener("beforeunload", (e) => {
	//   window.localStorage.setItem("vuex", JSON.stringify(store.state));
	// });
	// 监听mutations的变化，实时存入localStorage
	store.subscribe((mutation, state) => {
		window.localStorage.setItem("vuex", JSON.stringify(state));
	});

	const prevState = window.localStorage.getItem("vuex");
	console.log(prevState);
	if (prevState) {
		store.replaceState(JSON.parse(prevState));
	}
}
