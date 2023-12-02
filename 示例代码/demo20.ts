#### ts的函数泛型-难点

##### 1）编写一个联合类型demo

现在跟着我作一个简单的`join`方法，方法接受两个参数`first`和`second`,参数有可能是字符串类型，也有可能是数字类型。方法里为了保证都可以使用，所以我们只作了字符串的基本拼接。

```tsx
function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}
join("capoo", "tank");
```

这个方法现在没有任何问题，但现在有这样一个需求，就是`first`参数如果传的是字符串类型，要求`second`也传字符串类型.同理，如果是`number`类型，就都是`number`类型。

那需要学习`泛型`来解决这个问题。

##### 2）初始泛型概念-generic

> 泛型：[generic - 通用、泛指的意思],那最简单的理解，泛型就是泛指的类型。

泛型的定义使用`<>`（尖角号）进行定义的，比如现在给`join`方法一个泛型，名字就叫做`Connect`(注意语义化),后边的参数，也使用刚定义的泛型名称。然后在正式调用这个方法时，就需要具体指明泛型的类型。

```js
function join<Connect>(first: Connect, second: Connect) {
  return `${first}${second}`;
}
join < string > ("Capoo", "Tank");
```

如果要是`number`类型，就直接在调用方法的时候进行更改就可以了。

```js
join < number > (1, 2);
```

这就是最简单的泛型理解，因为在实际开发中，有很多对象和类的情况，里边的具体类型我们没办法了解，所以提供了这种泛型的概念。

##### 3）泛类中数组的使用

如果传递过来的值要求是数字，如何用泛型进行定义?两种方法，第一种是直接使用`[]`，第二种是使用`Array<泛型>`。

第一种写法:

```js
function myFun<ANY>(params: ANY[]) {
  return params;
}
myFun < string > ["123", "456"];
```

第二种写法:

```js
function myFun<ANY>(params: Array<ANY>) {
  return params;
}
myFun < string > ["123", "456"];
```

在工作中，我们经常使用`<T>`来作泛型的表示，当然这不是硬性的规定，只是大部分程序员的习惯性写法。

##### 4）多个泛型的定义

这里拿`join`方法举例，定义多个泛型，比如第一个泛型用`T`,第二个用`P`代表。

```ts
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join < number, string > (1, "2");
```

会了两种，你也就会了三种以上，泛型在造轮子的时候经常使用，因为造轮子很多东西都需要灵活性。泛型给了我们很好的灵活性。需要注意的是，如果函数定义了多个泛型，使用时要对应的定义出具体的类型。

##### 5）泛型的类型推断

泛型也是支持类型推断的，比如下面的代码并没有报错，这就是`类型推断`的功劳。

```ts
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join(1, "2");  //没有添加类型 <number,string>
```

但不建议大量使用类型推断，这会让你的代码易读和健壮性都会下降，了解即可。