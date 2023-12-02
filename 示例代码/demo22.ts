#### 初识命名空间-NameSapce

以前的课程都是通过`Node`来运行代码的，这节课为了有更好的演示效果，我们要在浏览器中运行代码。这就要求我们重新创建一个项目，直接在桌面上建立一个文件夹`TSWeb`。

##### 1）搭建浏览器开发环境步骤

1. 建立好文件夹后，打开 VSCode，把文件夹拉到编辑器当中，然后打开终端，运行`npm init -y`,创建`package.json`文件。
2. 生成文件后，我们接着在终端中运行`tsc -init`,生成`tsconfig.json`文件。
3. 新建`src`和`build`文件夹，再建一个`index.html`文件。
4. 在`src`目录下，新建一个`page.ts`文件，这就是我们要编写的`ts`文件了。
5. 配置`tsconfig.json`文件，设置`outDir`和`rootDir`(在 15 行左右)，也就是设置需要编译的文件目录，和编译好的文件目录。`outDir:"./build" `和`rootDir:"./src"`
6. 然后编写`index.html`，引入`<script src="./build/page.js"></script>`,当让我们现在还没有`page.js`文件。
7. 编写`page.ts`文件，加入一句输出`console.log('hello capoo')`,再在控制台输入`tsc`,就会生成`page.js`文件
8. 再到浏览器中查看`index.html`文件，如果按`F12`可以看到`hello capoo`，说明我们的搭建正常了。

##### 2）没有命名空间时的问题

为了更好的理解，先写一下如下代码，用类的形式在`index.html`中实现`header`,`content`和`Footer`部分，类似我们常说的模板。

在`page.ts`文件里，写出下面的代码：

```ts
class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}
class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}
class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}
class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
```

写完后我们用`tsc`进行编译一次，然后修改`index.html`文件，在`<body>`标签里引入`<script>`标签，并实例化`Page`，代码如下:（实例化page类）

【注】当我们tsc编译后，ts文件中的代码，相对应的js中的代码也会改变。

```
<body>
  <script>new Page();</script>
</body>
```

page.js代码如下

```js
"use strict";
var Header = /** @class */ (function () {
    function Header() {
        var elem = document.createElement("div");
        elem.innerText = "This is Header";
        document.body.appendChild(elem);
    }
    return Header;
}());
var Content = /** @class */ (function () {
    function Content() {
        var elem = document.createElement("div");
        elem.innerText = "This is Content";
        document.body.appendChild(elem);
    }
    return Content;
}());
var Footer = /** @class */ (function () {
    function Footer() {
        var elem = document.createElement("div");
        elem.innerText = "This is Footer";
        document.body.appendChild(elem);
    }
    return Footer;
}());
var Page = /** @class */ (function () {
    function Page() {
        new Header();
        new Content();
        new Footer();
    }
    return Page;
}());
```

这时候再到浏览器进行预览，就可以看到对应的页面被展现出来了。看起来没有什么问题，但是有经验的程序员就会发现，这样写全部都是全局变量（通过查看`./build/page.js`文件可以看出全部都是`var`声明的变量）。**过多的全局变量会让我们代码变的不可维护。**

这时候你在浏览器的控制台(`Console`)中，分别输入`Header`、`Content`、`Footer`和`Page`都时可以拿到对应的变量的,说明他们全都是全局变量。

其实你理想的是，只要有`Page`这个全局变量就足够了，剩下的可以模块化封装起来，不暴露到全局。

##### 3）命名空间的使用

`命名空间`这个语法，很类似编程中常说的模块化思想，比如`webpack`打包时，每个模块有自己的环境，不会污染其他模块,不会有全局变量产生。命名空间就跟这个很类似，注意这里是类似，而不是相同。

命名空间声明的关键词是`namespace` 比如声明一个`namespace Home`,需要暴露出去的类，可以使用`export`关键词，这样只有暴漏出去的类是全局的，其他的不会再生成全局污染了。修改后的代码如下：

```ts
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }
  class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }
  class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
```

TS 代码写完后，再到`index.html`文件中进行修改（实例化），用命名空间的形式进行调用，就可以正常了。 写完后，记得用`tsc`编译一下，当然你也可以使用`tsc -w`进行监视了，只要有改变就会进行重新编译。

`new Home.page()`

现在再到浏览器中进行查看，可以看到现在就只有`Home.Page`是在控制台可以得到的，其他的`Home.Header`...这些都是得不到的，说明只有`Home.Page`是全局的，其他的都是模块化私有的。

这就是 TypeScript 给我们提供的类似模块化开发的语法，它的好处就是让全局变量减少了很多，实现了基本的封装，减少了全局变量的污染。

