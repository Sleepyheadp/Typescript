#### 在ts中使用JQuery

这个需求也经常使用，就是在 TypeScript 的代码中使用其他类库，其实这里就涉及到一个`类型文件(Type file)`的问题，网上有大量别人写好的类型文件，我们只要下载使用就可以了。

##### 1）引入JQuery框架库

接着上节课的代码，在`TSTest`文件夹的`src`目录下，引入`JQuery`文件，这里采用`CDN`的形式进行引入。

直接在`index.html`加入`<script>`标签，代码如下：

```js
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
```

有了 jquery 框架，就可以在`TypeScript`文件中进行使用`JQuery`的语法了。

然后在`page.ts`文件中编写如下代码。

```js
const teacher: string = "jspang";
console.log(teacher);

$(function () {
  alert("jspang");
});
//【注】这个时候有报错，识别不了$。解决办法：sudo cnpm i --save-dev @types/jquery
```

写完后到终端中输入`yarn test`进行编译和启动服务。然后在地址栏输入了`http://localhost:1234`,可以看到程序可以正常输出，也没有任何的报错。

##### 2）安装types.jquery（解决办法）

第一种：就是安装别人写好的文件

但是在`vscode`中是会报错的，这时候就需要我们安装类型文件`type file`,直接可以用 npm 进行安装。

```js
npm i @types/jquery
```

第二种:简单粗暴

还有一种简单粗暴的方法的方式就是直接在`page.ts`文件的头部加入这句代码：

```js
declare var $: any;
```

第三种：自己写一个`.d.ts`声明文件的类库，如果你用的类库很少见，就需要自己写了。这个写起来还是很麻烦的。我只是简单的学过，但在工作中从来没自己写过，所以也不推荐给大家。比如 JQuery 就有几十个接口，如果你要写，这个文件会写很长，所以原则就是有别人写好的就直接用，实在没有就用粗暴的方法，如果实在不行，再考虑写`.d.ts`声明文件。