const blogPosts = [
	{
		id: 10,
		title: "我是文章一",
		body: "文章一内容",
	},
	{
		id: 20,
		title: "我是文章二",
		body: "文章二内容",
	},
	{
		id: 30,
		title: "我是文章三",
		body: "文章三内容",
	},
	{
		id: 40,
		title: "我是文章四",
		body: "文章四内容",
	},
	{
		id: 50,
		title: "我是文章五",
		body: "文章五内容",
	},
	{
		id: 60,
		title: "我是文章六",
		body: "文章六内容",
	},
	{
		id: 70,
		title: "我是文章七",
		body: "文章七内容",
	},
	{
		id: 80,
		title: "我是文章八",
		body: "文章八内容",
	},
];
export function getAllPosts() {
	return blogPosts;
}
export function getBlogPostById(id) {
	// array的find方法：找到符合条件的item，并返回该项。
	return blogPosts.find((blog) => blog.id === Number(id));
}
