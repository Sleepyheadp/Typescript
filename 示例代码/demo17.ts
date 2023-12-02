#### 配置文件compilerOptions配置内容详解

##### 1）rootDir和outDir

现在你的`js`文件直接编译到了根目录下，和`ts`文件混在了一起。工作中我们希望打包的`js`都生成在特定的一个文件夹里,比如`build`。

这时候你就可以通过配置`outDir`来配置，当然你也可以通过`rootDir`来指定`ts`文件的位置，比如我们把所有的 ts 文件都放到 src 下。那配置文件就应该这样写。

```js
{
    "outDir": "./build" ,
    "rootDir": "./src" ,
}
```

这时候你再在`Terminal`中输入`tsc`,就会有不同的效果了。

##### 2）编译ES6语法到ES5语法 allowJS

首先我们在`src`目录下用`ES6`语法写了一个`demo2.js`文件，代码如下：

`export const name = "capoo"`

如果你不做任何配置，这时候使用`tsc`是没有效果的。你需要到`tsconfig.js`文件里进行修改，修改的地方有两个。

```js
"target":'es5' ,  // 这一项默认是开启的，你必须要保证它的开启，才能转换成功
"allowJs":true,   // 这个配置项的意思是联通 compiled
```

这两项都开启后，在使用`tsc`编译时，就会编译`js`文件了。

##### 3）sourceMap属性

如果把`sourceMap`的注释去掉，在打包的过程中就会给我们生成`sourceMap`文件.

> sourceMap 简单说，Source map 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便。

这里我不对 Source map 文件详细讲解，如果你感兴趣，可以自行百度一下吧。

##### 4）noUnusedLocals和noUnusedParameters

有如下代码：

```
const capoo:string = "capoo"
export const name = "capoo"
```

这个时候我们发现`capoo`这个变量没有任何地方使用，但是我们编译的话，依然会编译出来，这就造成了资源的浪费。

编译后的文件demo.js

```
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
var tank = null;
exports.name = "capoo";
```

这时候我们可以开启`noUnusedLocals：true`，开启后我们的程序会直接给我们提示不能这样编写代码，有没有使用的变量。

`noUnusedParameters`是针对于名优使用的函数的，方法和`noUnusedLocals：true`一样，小伙伴们自己尝试吧。