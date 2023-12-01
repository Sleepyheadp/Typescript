let obj = {
	a: 1,
	b: 2,
};
let reactiveObj = new Proxy(obj, {
	set(target, key, value, receiver) {
		let result = Reflect.set(target, key, value, receiver);
		sum();
		return result;
	},
});
function sum() {
	console.log(reactiveObj.a + reactiveObj.b);
}
sum();
setTimeout(() => {
	reactiveObj.a = 3;
}, 1000);
setTimeout(() => {
	reactiveObj.b = 4;
}, 2000);
