import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
export const useNoteStore = defineStore("notes", () => {
	const notes = ref([
		{
			id: 1,
			title: "Pinia 学习记录",
			content:
				"这是 Pinia 学习记录，这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录",
		},
		{
			id: 2,
			title: "React 学习记录",
			content:
				"这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录",
		},
		{
			id: 3,
			title: "Vue 学习记录",
			content:
				"这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录",
		},
		{
			id: 4,
			title: "JavaScript 学习记录",
			content:
				"这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录",
		},
	]);

	const searchTerm = ref("");

	const searchedNotes = computed(() => {
		if (searchTerm.value === "") {
			return notes.value;
		} else {
			return notes.value.filter((note) => {
				return note.title.includes(searchTerm.value);
			});
		}
	});
	const userStore = useUserStore();
	async function addNote(title, content) {
		if (userStore.isLoggedIn()) {
			setTimeout(() => {
				notes.value.push({
					id: notes.length + 1,
					title,
					content,
				});
			}, 2000);
		} else {
			alert("用户未登陆");
		}
		searchTerm.value = "";
	}

	return {
		notes,
		addNote,
		searchTerm,
		searchedNotes,
	};
});
