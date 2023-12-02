#### 联合类型和类型保护

【注】只有联合类型存在的情况下，才需要类型保护。普通的类型注解，并不需要这种特殊操作。

##### 1）联合类型展示

所谓联合类型，可以认为一个变量可能有两种或两种以上的类型。用代码举个例子，声明两个接口`person1`接口和`person2`接口，然后在写一个`judgeWho`(判断是谁)的方法，里边传入一个`animal`(任意值)，这时候可以能是`person1`,也可能是`person2`。所以我们使用了联合类型，关键符号是`|`(竖线)。

```js
interface Person1 {
  eat: boolean;
  say: () => {};
}

interface Person2 {
  eat: boolean;
  skill: () => {};
}

function judgeWho(animal: Person1 | Person2) {}
```

通过这个简单的例子，你应该知道什么是联合类型了。

```js
function judgeWho(animal: Person1 | Person2) {
  animal.say();
}
```

但这时候问题来了，如果我直接写一个这样的方法，就会报错，因为`judgeWho`不能准确的判断联合类型具体的实例是什么。

这时候就需要再引出一个概念叫做`类型保护`，类型保护有很多种方法，这节讲几个最常使用的。

##### 2）类型保护-类型断言

类型断言就是通过断言的方式确定传递过来的准确值，比如上面的程序，如果会`anjiao`（按脚），说明他就是技师，这时候就可以通过断言`animal as Teacher`,然后直接调用`skill`方法,程序就不再报错了。同样如果不会按脚，说明就是不同的服务员，这时候调用`say()`方法，就不会报错了。这就是通过断言的方式进行类型保护。也是最常见的一种类型保护形式。具体看代码:

```js
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}
```

##### 2）类型保护-in语法

我们还经常使用`in`语法来作类型保护，比如用`if`来判断`animal`里有没有`skill()`方法。

这里你可以赋值上面的`judgeWho()`方法，然后改一下名字，我这里改成了`judgeWhoTwo()`方法，具体程序如下:

```js
function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
```

这里的`else`部分能够自动判断，得益于`TypeScript`的自动判断。

##### 3）类型保护-typeof语法

先来写一个新的`add`方法，方法接收两个参数，这两个参数可以是数字`number`也可以是字符串`string`,如果我们不做任何的类型保护，只是相加，这时候就会报错。代码如下:

```js
function add(first: string | number, second: string | number) {
  return first + second;
}
```

解决这个问题，就可以直接使用`typeof`来进行解决。

```js
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}
```

像上面这样写，就不报错了。这样就可以进行继续开心的编写程序了。

##### 4）类型保护-instanceof语法

比如现在要作类型保护的是一个`对象`，这时候就可以使用`instanceof`语法来作。现在先写一个`NumberObj`的类，代码如下：

```js
class NumberObj {
  count: number;
}
```

然后我们再写一个`addObj`的方法，这时候传递过来的参数，可以是任意的`object`,也可以是`NumberObj`的实例，然后我们返回相加值，当然不进行类型保护，这段代码一定是错误的。

```tsx
function addObj(first: object | NumberObj, second: object | NumberObj) {
  return first.count + second.count;
}
```

报错不要紧，直接使用`instanceof`语法进行判断一下，就可以解决问题。

```typescript
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
```

另外要说的是，instanceof 只能用在类上。