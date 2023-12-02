#### ts类的构造函数

不给name赋值，我们希望通过在new出新对象的时候，直接通过传递参数的时候，给name赋值，并打印出来。这个时候我们就要用到构造函数。constructor

```javascript
class Person{
	public name:string;
	constructor(name:string){
		this.name=name
	}
}
const person = new Person("capoo")
console.log(person.name)
```

简化版：日常会使用的多一些

```javascript
class Person{
	constructor(public name:string){}
}
const person = new Person("capoo")
console.log(person.name)
```

#### 类继承中的构造器写法

在子类中使用构造函数，需要用super()调用父类的构造函数，如果需要传值，则必须进行传值操作。

```javascript
class Person{
  constructor(public name:string,public sex:string){}
}
class Teacher extends Person{
  constructor(public age:number,public lover:string){
    super("capoo","man")//类Person中有几个形参，就要传入对应格式的实参
  }
}
const teacher = new Teacher(18,tank)
console.log(teacher.name)
console.log(teacher.age)
console.log(teacher.sex)
console.log("capoo的lover是"+teacher.lover)
```

当父类没有构造函数时，子类也要使用super()进行调用，否则就会报错。

```javascript
class Person{}
class Teacher extends Person{
	constructor(public age:number){
		super()//不可省略
	}
}
const teacher = new Teacher(18);
console.log(teacher.age)
```

