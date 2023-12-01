const observers = new WeakMap();

let currentObserver = null;

function observe(fn) {
	currentObserver = fn;
	fn();
	currentObserver = null;
}

let obj = {
	a: 1,
	b: 2,
};
// observe
let reactiveObj = new Proxy(obj, {
	get(target, key, receiver) {
		if (currentObserver) {
			let targetObserver = observers.get(target);
			if (targetObserver.has(key)) {
				targetObserver.get(key).add(currentObserver);
			} else {
				targetObserver.set(key, new Set([currentObserver]));
			}
		}
		return Reflect.get(target, key, receiver);
	},
	set(target, key, value, receiver) {
		let observersForkey = observers.get(target).get(key);
		let result = Reflect.set(target, key, value, receiver);
		observersForkey.forEach((fn) => fn());
		return result;
	},
});

observers.set(obj, new Map());

function sum() {
	console.log(reactiveObj.a + reactiveObj.b);
}

observe(sum);

setTimeout(() => {
	reactiveObj.a = 5;
}, 1000);

setTimeout(() => {
	reactiveObj.b = 10;
}, 2000);
