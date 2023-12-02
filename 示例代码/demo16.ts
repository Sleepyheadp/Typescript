#### 配置文件-初识compilerOptions配置项

##### 1）removeComments属性

`removeComments`是`complerOptions`里的一个子属性，它的用处是告诉TypeScript对编译出来的js文件是否显示注释（注解）。

true:不显示注解；false：显示注解。

##### 2）strict属性

`strict`属性如果设置为`true`,就代表我们的编译和书写规范，要按照`TypeScript`最严格的规范来写，

##### 3）nolmplicitAny属性

`noImplicitAny:true`

为false时，属性的作用是允许你的注解类型为any时不用特意声明，true则表示必须对any注解类型进行声明，斗则会报错。

```
function capoo(name:any){
	return name
}
```

##### 4）strictNullChecks属性

`strictNullChecks:false`意思是不强制检查null类型。

```
const capoo:string =null;
```

当`strictNullChecks:true`时，则会报错：不能将类型"null"分配给类型"string"

##### 5）ts-node遵循tsconfig.json文件



