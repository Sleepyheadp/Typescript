import { ref } from "vue";
function useListData(data) {
	const dataRef = ref(data);
	function removeItem(id) {
		// 当点击的id和messages的id相等时，则删除，不想等满足filter条件，则保留
		dataRef.value = dataRef.value.filter((item) => item.id !== id);
	}
	function sortByKey(key, direction = "asc") {
		dataRef.value = dataRef.value.sort((a, b) => {
			if (direction === "asc") return a[key].localeCompare(b[key]);
			return -a[key].localeCompare(b[key]);
		});
	}
	return { data: dataRef, removeItem, sortByKey };
}
export default useListData;
