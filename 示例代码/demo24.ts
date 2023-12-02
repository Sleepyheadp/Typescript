#### ts如何使用import语法

##### 1）修改comoonents.ts文件

现在去掉`components.ts`里的`namespace`命名空间代码，写成 `ES6` 的 `export` 导出模式。代码如下：

```ts
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
```

现在三个类就都已经用`export`导出了，也就是说可以实现用`import`进行引入了。

##### 2）修改page.ts文件

来到`page.ts`文件，去掉`namespace`命名空间对应的代码，然后使用 `import` 语法进行导入`Header`、`Content`和`Footer`,代码如下：

```js
import { Header, Content, Footer } from "./components";
export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
```

现在看起来确实和工作中写的代码非常类似了。这时候可以使用`tsc`进行编译。然后可以看到编译好的代码都是`define`开头的(这是 amd 规范的代码，不能直接在浏览器中运行，可以在 Node 中直接运行)，这种代码在浏览器中是没办法被直接运行的，需要其他库(`require.js`)的支持。

##### 3）引入require.js

我这里使用了一个现成的 CDN 的`require.js`,地址你可以直接复制，然后用`<script>`标签进行引入。

> Require.js 的 CDN 地址： https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js

复制好 URL 地址后，记得使用`<script>`标签进行引入，代码如下。(在后缀为.html文件下引入)

`<script src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.js"></script>`

这时候就可以解析`define`这样的语法了。然后把`page.ts`中加入`default`关键字，如果不加是没办法直接引用到的。

```js
import { Header, Content, Footer } from "./components";

export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
```

这时候再用`tsc`进行编译一下，你会发现还是又问题。因为使用`export default`这种形式的语法，需要在`html`里用`require`来进行引入。

##### 4）require方式引入

因为你已经加入了`require.js`这个库，所以现在可以直接在代码中使用`require`了。具体代码如下：

```js
<body>
  <script>
    require(["page"], function (page) {
      new page.default();
    });
  </script>
</body>
```

写完这部，刷新页面，可以看到正常显示出来了，虽然用起来比较麻烦，但是我们还是实现了用`import`来进行引入，当我们有了`webpack`和`Parcel`的时候就不会这么麻烦，这些都交给打包工具来处理就好了。

