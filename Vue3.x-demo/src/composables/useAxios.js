import axios from "axiois";
function useAxios() {
	const instance = axios.create({
		timeout: 1000,
		// baseUrl:'http://localhost:3000', // 我们已经设置的代理所以没必要再配置baseUrl
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer SOMEJWTTOKEN",
		},
	});
	// 如何拦截请求，在请求之前做一些操作
	instance.interceptors.request.use(
		(config) => {
			console.log("config:", config);
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	// 如何拦截响应，在响应之前做一些操作。
	instance.interceptors.response.use(
		(config) => {
			console.log(config);
			return config;
		},
		(error) => {
			console.log(error);
			return Promise.reject();
		}
	);
	return { instance };
}
export default useAxios;
