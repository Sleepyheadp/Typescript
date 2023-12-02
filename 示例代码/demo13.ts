#### ts类的Getter、setter和static的使用

##### 类的getter和setter

```
class Person{
	constructor(private _age:number){}
	get age(){
		return this._age
	}
}
const xiaohong = new Person(22)
console.log(xiaohong.getAge)
```

通过getter，我们可以对_age进行处理。比如：

```
get age(){
	return this._age-10
}
```

又因为_age是private私有属性，无法在类的外部更改。所以这时候可以用setter属性进行改变

```
class Person{
	constructor(private _age:number){}
	get age(){
		return this._age-10
	}
  set age(age:number){
  	this._age=age
  }
}
const xiaohong = new Person(22)
xiaohong.age=30
console.log(xiaohong.age)
```

##### 类中的static

用static声明的属性和方法，不需要进行声明对象，就可以直接使用对象中的属性和方法。

我们平常会这样写：

```
class Person{
	sayHello(){
		return "hi man"
	}
}
const stu = new Person();
console.log(stu.sayHello())
```

static写法

```
class Person{
	static sayHello(){
		return "hi man"
	}
}
console.log(Person.sayHello())
```

