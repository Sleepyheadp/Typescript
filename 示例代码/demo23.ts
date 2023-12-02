#### 深入命名空间-NameSpace

##### 1）用命名空间实现组件化

上面我们通过命名空间实现了模块化和全局变量的污染，但是我们工作中分的要更细致一些，会单独写一个`components`的文件，然后进行组件化。

在`src`目录下新建一个文件`components.ts`，编写代码如下：

```ts
namespace Components {
  export class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }

  export class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }

  export class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }
}
```

这里需要注意的是，我每个类(`class`)都使用了`export`导出，导出后就可以在`page.ts`中使用这些组件了。比如这样使用-代码如下。

```ts
namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
```

这时候你可以使用`tsc`进行重新编译，但在预览时，你会发现还是会报错，找不到`Components`,想解决这个问题，我们必须要在`index.html`里进行引入`components.js`文件。

````html
<script src="./build/page.js"></script>
<script src="./build/components.js"></script>
````

【注】但这样引入太麻烦了，可不可以像`webpack`一样，只生成一个文件那？那答案是肯定的。

##### 2）多文件编译成一个文件

直接打开`tsconfig.json`文件，然后找到`outFile`配置项，这个就是用来生成一个文件的设置，但是如果设置了它，就不再支持`"module":"commonjs"`设置了，我们需要把它改成`"module":"amd"`,然后在去掉对应的`outFile`注释，设置成下面的样子。

```
{
	"module":"amd",
	"outFile":"./build/page,js"
}
```

配置好后，删除掉`build`下的`js`文件，然后用`tsc`进行再次编译。

然后删掉`index.html`文件中的`component.js`,在浏览器里还是可以正常运行的。

##### 3）子命名空间

也就是说在命名空间里，再写一个命名空间,比如在`Components.ts`文件下修改代码如下。

```js
namespace Components {
  export namespace SubComponents {
    export class Test {}
  }
  //someting ...
}
```

写完后在控制台再次编辑`tsc`，然后你在浏览器中也是可以查到这个命名空间的`Components.SubComponents.Test`(需要刷新页面后才会显示)。

