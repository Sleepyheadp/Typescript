const PaginationMixin = {
	props: ["totalPage", "defaultCurrentPage"],
	data() {
		return {
			currentPage: this.defaultCurrentPage,
		};
	},
	methods: {
		changePage(page) {
			this.currentPage = page;
		},
	},
	mounted() {
		// 组件引用Mixins的时候，Mixins中的钩子函数会先执行
		// 这里打印了两次，是因为两个组件都引用了PaginationMixins.js
		// console.log("Mixins钩子函数...");
	},
};
export default PaginationMixin;
