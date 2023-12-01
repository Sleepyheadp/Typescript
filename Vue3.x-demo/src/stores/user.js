import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
	const user = ref({
		name: "张三",
		phone: "18611112222",
		email: "sanzhang@test.com",
	});
	function isLoggedIn() {
		return user.value !== null;
	}
	return {
		user,
		isLoggedIn,
	};
});
