#### 用Parcel打包ts代码

##### 1）建立一个新项目

这里给出新建项目的步骤，如果你已经熟悉此过程，可以跳过。

1. 教学需要，这里我们重新建立一个项目`TSTest`,在桌面新建立一个文件夹，然后在`VSCode`中打开。
2. 打开终端，输入`npm init -y`,创建`package.json`文件
3. 在终端中输入`tsc --init`,创建`tsconfig.json`文件
4. 修改`tsconfig.json`配置`rootDir`和`outDir`.
5. 新建`src`文件夹，在里边建立`index.html`,`page.ts`文件
6. 编写`index.html`文件，并引入`page.ts`文件
7. 编写`page.ts`文件。

index.html 文件代码：

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./page.ts"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

page.ts 文件代码：

```js
const teacher: string = "jspang";
console.log(teacher);
```

这时候我们并不能正常的预览出效果，我们需要`Parcel`的帮忙。

##### 2）parcel的安装和使用

Parcel 可以通过`npm`或者`yarn`来进行安装，我这里`npm`安装很慢，会 5 分钟左右，所以我使用`yarn`来进行安装。代码如下。

```js
yarn add --dev parcel@next
```

安装好以后，打开`package.json`文件，可以看到这样一段代码，我安装的版本是`^2.0.0-beta.1`,如果你学习时和这个版本不一样，操作可能会稍有不同。

修改`package.json`里边的代码。

```js
{
  "scripts": {
    "test": "parcel ./src/index.html"
  },
}
```

这个意思就是使用`parcel`对`index.html`进行一个编译。

然后打开终端输入`yarn test`,这时候终端会给出一个地址`http://localhost:1234`,把地址放到浏览器上，可以看到浏览器的控制台会输出`capoo`。

这说明`Parcel`会自动对`index.html`中引入的`TypeScript`文件进行编译，然后打包好后，就可以直接使用了。

使用`Parcel`大大简化了我们的配置过程。