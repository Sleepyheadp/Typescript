import PageOne from "../components/vue-router/page-spa/PageOne.vue";
import PageTwo from "../components/vue-router/page-spa/PageTwo.vue";
import PageThree from "../components/vue-router/page-spa/PageThree.vue";
import NestHome from "../components/vue-router/nest-routes/nest-home.vue";
import NestAbout from "../components/vue-router/nest-routes/nest-about.vue";
import NestAboutWork from "../components/vue-router/nest-routes/nest-about-work.vue";
import NestAboutEdu from "../components/vue-router/nest-routes/nest-about-edu.vue";
// 路由懒加载
// import BlogPostPage from "../components/vue-router/blog-pages/BlogPostPage.vue";
// import BlogListPage from "../components/vue-router/blog-pages/BlogListPage.vue";
const BlogPostPage = () =>
	import("../components/vue-router/blog-pages/BlogPostpage.vue");
const BlogListPage = () =>
	import("../components/vue-router/blog-pages/BlogListPage.vue");
// 命名视图
import HomePage from "../components/vue-router/name-view/HomePage.vue";
import FooterView from "../components/vue-router/name-view/FooterView.vue";
import FooterViewAbout from "../components/vue-router/name-view/FooterViewAbout.vue";
import AboutMe from "../components/vue-router/name-view/AboutMe.vue";
import Navbar from "../components/vue-router/name-view/Navbar.vue";
import MyBlogs from "../components/vue-router/name-view/MyBlogs.vue";
// 嵌套路由使用命名视图
import AddBlog from "../components/vue-router/nest-routes-use-name-view/AddBlog.vue";
import BlogDetails from "../components/vue-router/nest-routes-use-name-view/BlogDetails.vue";
import BlogManagement from "../components/vue-router/nest-routes-use-name-view/BlogManagement.vue";
import RightSidebar from "../components/vue-router/nest-routes-use-name-view/RightSidebar.vue";
// 导航守卫
import HomePageNav from "../components/vue-router/nest-routes-use-name-view/HomePage.vue";
import LoginPage from "../components/vue-router/nest-routes-use-name-view/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";
// 动态添加路由
import DynamicAddRoute from "../page/vueRouter/DynamicAddRoute.vue";
// 定义一个登陆状态的变量
const loggedIn = false; // 默认未登陆
const routes = [
	{
		path: "/",
		// component: HomePageNav,
		component: BlogListPage,
		// component: DynamicAddRoute,
		// components: {
		// 	nav: Navbar,
		// 	default: HomePage,
		// 	footer: FooterView,
		// },
	},
	{
		path: "/login",
		name: "login",
		component: LoginPage,
	},
	{
		path: "/blogs",
		component: BlogManagement,
		meta: { private: true }, // 3. 合并，值必须一致，否则重复的属性，会以最后一个属性值为准，子路由的 meta 属性可以省略
		children: [
			{
				path: "add",
				components: {
					default: AddBlog,
					rightSideBar: RightSidebar,
				},
				// meta: {
				// 	private: true,
				// },
			},
			{
				path: "details/:postId",
				component: BlogDetails,
				// 验证在动态参数的url路径中跳转时，beforeEnter不会重复执行，需要注意。
				beforeEnter(to, from) {
					// console.log(from);
					// console.log(to);
				},
				// meta: {
				// 	private2: true,
				// },
			},
		],
		// 对于按路由配置的导航守卫需要注意，如果是含有动态参数的url，在它们之间跳转时由于是组件复用，并没有发生页面的跳转，所以导航守卫不会重新执行。
		// beforeEnter: [authBlogsPage],
	},
	{
		path: "/blogsNest",
		components: {
			nav: Navbar,
			default: MyBlogs,
		},
	},
	{
		path: "/abouts",
		components: {
			nav: Navbar,
			default: AboutMe,
			footer: FooterViewAbout,
		},
	},
	{
		path: "/1",
		component: PageOne,
	},
	{
		path: "/2",
		component: PageTwo,
	},
	{
		path: "/3",
		component: PageThree,
	},
	{
		path: "/home/:id",
		name: "home",
		component: NestHome,
	},
	// alias1、配置了name属性后设置alias
	{
		path: "/about/:id",
		name: "about",
		component: NestAbout,
		children: [
			{ path: "work", component: NestAboutWork },
			{ path: "edu", component: NestAboutEdu },
		],
		alias: "/connect/:id",
	},
	// alias2、设置多个alias路由别名
	// redirect1、普通重定向：从blogList重定向到/根路径
	// {
	// 	path: "/blogList",
	// 	redirect: "/", // 重定向的路径首先要存在，才能重定向到指定的路径
	// },
	{
		path: "/blogList",
		component: BlogListPage,
		name: "blogList",
		alias: ["/blog", "/list"],
		meta: {
			transition: "fade",
		},
	},
	// redirect3、重定向的目标也可以是一个命名的路由
	{
		path: "/listHome",
		redirect: {
			name: "blogList",
		},
	},
	// alias3、带动态参数的，别名在前面起（自己定义别名
	{
		path: "/:postId",
		component: BlogPostPage,
		name: "blogPost",
		alias: "/pId/:postId",
		// props: true,
		// props: { postId: 50 },// 传递静态参数
		props: (route) => {
			console.log(route);
			// 设置postId的类型
			return { postId: Number(route.params.postId) };
		},
		meta: {
			transition: "fadeAndMove",
		},
	},
	// redirect2、重定向中含有动态参数
	{
		path: "/posts/:postId",
		redirect: (to) => {
			return {
				path: `/${to.params.postId}`,
			};
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
	linkExactActiveClass: "",
	linkActiveClass: "",
	scrollBehavior(to, form, savedPosition) {
		// return { top: 100 };
		// return {
		// 	top: 200,
		// 	behavior: "smooth", // 有一个平滑的效果
		// };
		// 延迟
		// return new Promise((resolve) => {
		// 	setTimeout(
		// 		() =>
		// 			resolve({
		// 				top: 200,
		// 				behavior: "smooth",
		// 			}),
		// 		1000
		// 	);
		// });
		// return {
		// 	el: "#app",
		// 	top: -60,
		// };
		// console.log(savedPosition); // null
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});
// 全局前置守卫：做一些登陆验证的操作，在跳转之前
router.beforeEach(async (to, from) => {
	// 这个时候可以验证登陆状态，但是我们在地址栏输入其他地址时/blogs/add，不会进行登陆状态的判断
	// to.path === "/blogs" => to.path.startsWith("/blogs")
	// 限制以blogs开头的路径都要进行登陆验证
	// if (to.path.startsWith("/blogs")) {
	// 	if (!loggedIn) {
	// 		// return "/login";
	// 		// return {
	// 		// 	name: "login",
	// 		// };
	// 	}
	// }

	// meta 路由元数据
	// console.log(to);
	// 1、判断matched -> meta
	// if (to.matched.some((record) => record.meta.private) && !loggedIn) {
	// 	return "/login";
	// }
	//2、meta合并
	if (to.meta.private && !loggedIn) {
		return "/login";
		// return false; // 组织其进行跳转，验证aborted
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 3000)
		);
		return false;
	}
});
router.beforeResolve((to) => {
	if (to.path.startsWith("/blogs")) {
		if (loggedIn) {
			// console.log("用户已登陆");
		}
	}
});
router.afterEach((to) => {
	document.title = to.path;
});
function authBlogsPage(to, from) {
	if (!loggedIn) {
		return "/login";
	}
}
export default router;
