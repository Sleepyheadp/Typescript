const observers = new WeakMap();

let currentObserver = null;

function observe(fn) {
	currentObserver = fn;
	fn();
	currentObserver = null;
}

function reactive(obj) {
	observers.set(obj, new Map());
	return new Proxy(obj, {
		get(target, key, receiver) {
			registerObserver(target, key);
			return Reflect.get(target, key, receiver);
		},
		set(target, key, value, receiver) {
			const result = Reflect.set(target, key, value, receiver);
			execute(target, key);
			return result;
		},
	});
}

function registerObserver(target, key) {
	if (currentObserver) {
		let targetObserver = observers.get(target);
		if (targetObserver.has(key)) {
			targetObserver.get(key).add(currentObserver);
		} else {
			targetObserver.set(key, new Set([currentObserver]));
		}
	}
}

function execute(target, key) {
	let observersForkey = observers.get(target).get(key);
	observersForkey.forEach((fn) => fn());
}

let obj = {
	a: 1,
	b: 2,
};

let reactiveObj = reactive(obj);

function sum() {
	console.log(reactiveObj.a + reactiveObj.b);
}

function sub() {
	console.log(reactiveObj.a - reactiveObj.b);
}

// 类似于调用 computed()
observe(sum);
observe(sub);

setTimeout(() => {
	reactiveObj.a = 5;
}, 1000);

setTimeout(() => {
	reactiveObj.b = 10;
}, 2000);
