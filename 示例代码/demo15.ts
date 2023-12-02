#### include、exclude和files

我们在运行tsc命令时，默认为编译所有文件。如果我们只想编译其中的一个，该怎么做？

##### 1）使用include配置

`include`属性用来指定要编译的文件（在t config.json文件中配置）

【注】写配置文件时，需要注意配置文件不支持单引号。

```
{
	"include":["demo.ts"],
	"compilerOptions":{
		//...
	}
}
```

##### 2）使用exclude配置

exclude意思是不包含，除什么之外。以下代码的意思是编译除demo2.ts的其他所有文件

```
{
	"exclude":["demo2.ts"],
	"compilerOptions":{
		//...
	}
}
```

##### 3）使用files配置

用法和include相同

```
{
	"files":["demo.ts"],
	"compilerOptions":{
		//...
	}
}
```

