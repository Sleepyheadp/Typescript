let obj = {
	a: 1,
	b: 2,
};

// 第二个参数就是我们要拦截的操作
let objProxy = new Proxy(obj, {
	get(target, key, receiver) {
		console.log(`访问了${target}中的${key}，值为${target[key]}`);
		// 这里return 10,则返回值都为10
		// return target[key];
		// 除了利用obj.key和obj[key]的形式，我们还可以利用reflect类把相关的操作传递给原对象
		return Reflect.get(target, key, receiver);
	},
	set(target, key, value, receiver) {
		console.log(`修改了${target}中的${key}，值为${value}`);
		return Reflect.set(target, key, value, receiver);
		// return value;
	},
});
// 虽然这里修改了值，但是没有调用Reflect.set()，原对象的值同样不会修改
objProxy.a = 5;
console.log("objProxy.a = ", objProxy.a);
// 此时原对象中的值也发生了修改，因为我们使用Reflect.set修改了obj.a的值，并没有对其进行拦截操作
// 如果我们不调用Reflect.set原对象的值就不会修改
console.log("obj.a = ", obj.a);
