#### Enum枚举类型讲解

##### 举例：通过掷骰子随机选择做什么，进行程序化模拟。

初级写法：

```
function getServe(status: number) {
  if (status === 0) {
    return "massage";
  } else if (status === 1) {
    return "SPA";
  } else if (status === 2) {
    return "dabaojian";
  }
}
const result = getServe(0);
console.log(`我要去${result}`);
```

中级写法：

```
const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2,
};
function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}
const result = getServe(Status.SPA);
console.log(`我要去${result}`);
```

高级写法：

```
enum Status {
  MESSAGE,
  LISTEN,
  TALK,
}
function getServe(status: any) {
  if (status === Status.MESSAGE) {
    return "message";
  } else if (status === Status.LISTEN) {
    return "listen";
  } else if (status === Status.TALK) {
    return "talk";
  }
}
const result = getServe(Status.LISTEN);
console.log(`我要去${result}`);
```

##### 枚举类型的对应值

当调用时传一个`1`,也会输出`我要去listen`

`const result = getServe(1)`

这是因为枚举类型是有对应的数字值的，默认是从0开始。

```
console.log(Status.MESSAGE) //0
console.log(Status.LISTEN)  //1
console.log(Status.TALK)    //2
```

如果不想默认从0开始，而是从1开始，可以这样写：

```
enum Status {
	MASSAGE = 1,
	LISTEN,
	TALK
}
```

##### 枚举通过下标反查

`console.log(Status.MASSAGE,Status[1])`

