#### 类的只读类型和抽象类

##### 类的只读属性readonly

正常写法：

```typescript
class Person{
	constructor(public name:string){}
}
const person = new Person("capoo")
person.name="tank"
console.log(person.name)
```

加入关键词readonly

```typescript
class Person{
	public readonly _name:string;
	constructor(name:string){
		this._name=name
	}
}
const person = new Person("capoo");
person._name = "tank"
console.log(person._name) 
//直接报错：Cannot assign to '_name' because it is a read-only property.
```

##### 抽象类的使用

大概的意思就是每个类都有自己对应的方法和属性。关键词是abstract。

```typescript
abstract class person{
	abstract skill(){...}
}
```

有了这个类，其余的类就可以继承这个类，然后要求必须实现skill()方法

```typescript
class one extends Person{
	skill(){
		console.log("我是one")
	}
}
class two extends Person{
	skill(){
		console.log("我是two")
	}
}
class three extends Person{
	skill(){
		console.log("我是three")
	}
}
```

