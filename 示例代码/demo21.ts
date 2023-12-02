#### ts类的泛型-难点

###### 1）编写一个基本类

我们先编写了一个基本类`selectPerson`，在类的构造函数中传递一组person。

```ts
class SelectPerson{
	constructor(private person:string[]){}
	getPerson(index:number):string{
		return this.person[index]
	}
}
const selectPerson = new SelectPerson(["小红","小王","小李"]) //类的实例化，并传值
console.log(selectPerson.getPerson(1)) //小王
```

这个时候我们修改一个，既可以用string类型也可以用number类型的数组。

```ts
class selectPerson{
	constructor(private person:string[]| number[]){}
	getPerson(index:number):string | number{
		return this.person[index]
	}
}
```

##### 2）初始类的泛型

对上述代码利用泛型<>进行改进

```ts
class SelectPerson<T>{
    constructor(private person:T[]){}
    getPerson(index:number):T{
        return this.person[index]
    }
}
const selectPerson = new SelectPerson<string>(["小红","小王","小李"]);
console.log(selectPerson.getPerson(1))
```

这时候代码并不报错，也使用了泛型，但是注意在实例化对象的时候，需要对泛型的值进行确定，比如是string类型时：

`const person = new SelectPerson()<string>["小红","小王","小李"]`

##### 3）泛类中的继承

现在需求又变了，要求返回是一个对象的`name`，也就是下面的代码：

```
return this.person[index.name]
```

报错：`Property 'name' does not exist on type 'T'.`

现在的代码肯定是报错的。意思是传递过来的值必须是对象类型，里边还要有`name`属性。这个时候就要用到继承了，我们用接口的方式来实现,每个接口都要有`name`属性。代码如下：

```ts
interface Girl {
	name:string;
}
```

有了接口后用`extends`关键字实现泛型继承，代码如下：

```js
class SelectGirl<T extends Girl> {
 ...
}
```

这句代码的意思是泛型里必须有一个`name`属性，因为它继承了`Girl`接口。

现在程序还是报错的，因为我们`getGirl`方法的返回类型还不对，这时候应该是一个`string`类型才对，所以代码应该改为下面的样子：

```ts
interface Girl {
  name: string;//在这里已经规定好了类型为string,所以不需要在实例化的时候重复定义
}
class SelectPerson<T extends Girl> {
  constructor(private person: T[]) {}
  getPerson(index: number): string {
    return this.person[index].name;
  }
}
const selectPerson = new SelectPerson([
  { name: "小红" },
  { name: "小王" },
  { name: "小李" },
]);//本来传入的是字符串，现在是对象的形式，并且必须带有name属性。
console.log(selectPerson.getPerson(1));
```

我们回过头来看一下这段代码的意思，就是我们在`SelectPerson`类中使用了泛型，意思是我不知道我以后要用什么类型，但是我有一个约束条件，这个类型，必须要有一个`name`属性。这个在工作中经常使用，所以必须要好好理解这的知识。

##### 4）泛型约束

现在的泛型可以是任意类型，可以是`对象`、`字符串`、`布尔`、`数字`都是可以的。但你现在要求这个泛型必须是`string`或者`number`类型。我们还是拿上面的例子，不过把代码改为最初的样子。

```js
class SelectPerson<T>{
    constructor(private person:T[]){}
    getPerson(index:number):T{
        return this.person[index]
    }
}
const selectPerson = new SelectPerson<string>(["小红","小王","小李"]);
console.log(selectPerson.getPerson(1))
```

然后进行约束，这时候还是可以使用关键字`extends`来进行约束，把代码改成下面的样子。

```js
class SelectPerson<T extends number | string> {
  //.....
}
```

