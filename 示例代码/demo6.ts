/* typescript中数组类型的定义 */

//1、一般数组类型的定义
//自动类型推断
const numberArr = [1,2,3]
//类型注解
//number[] 的意思是必须是一个数组并且数组元素类型为number
const numberArr2:number[] = [1,2,3] 
const stringArr:string[] = ["one","two","three"]

//也就是说你可以定义任何类型的数组
const undefinedArr:undefined[] = [undefined,undefined]

//当一个数组中有多种类型的时候，例如number、string
const someArr:(number | string)[] = [1,"a"]

//2、数组中对象类型的定义
const girls:{name:string,age:number}[] = [ 
    {name:"tom",age:18},
    {name:"jerry",age:28}
]

//类型别名 type定义 
// 上面这种写法比较繁琐，因此我们引入 “类型别名”的概念，通过type定义
type Lady = {name:string,age:number};
const girls2:Lady[] = [
    {name:"xiaowang",age:18},
    {name:"xiaoli",age:28}
]
//ta的作用和类定义相似，还可以用来限制数组的类型
class Madam {
    name:string;
    age:number
}
const girls3:Madam[]=[
    {name:"zhangsan",age:18},
    {name:"lisi",age:28}
]