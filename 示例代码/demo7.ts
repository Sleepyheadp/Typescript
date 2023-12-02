/*typescript中元组的使用和类型约束*/
/*
    TypeScript 中提供了元组的概念，这个概念是JavaScript中没有的。
    但是不要慌张，其实元组在开发中并不常用，也可能是我的精力还不够。
    一般只在数据源是CVS这种文件的时候，会使用元组。
    其实你可以把元组看成数组的一个加强，它可以更好的控制或者说规范里边的类型。
*/
const girl = ["one","two",18]  //gril的类型为(string | number)[] 自动类型推断
//类型注解
const girl2:(string | number)[] = ["one","two",18] 
//当我们把数组中内容调换位置，typescript并不能给我们提示
const girl3:(string | number)[] = ["one",18,"two"] 

/* 引入元组 */
// 这时候我们就把数组中的每个元素类型的位置都给固定住了，这就叫做元组
const girl4:[string,number,string] = ["capoo",23,"man"]
const girl5:[string,number,string][]= [
    ["capoo",23,"man"],
    ["tank",22,"woman"]
]
console.log(girl5)
/* 元组的使用 */
/*
    有如下数据csv：
*/
    const girlY:[string,string,number][]=[
        ["xiaowang","man",18],
        ["xiaoli","man",19],
        ["xiaohong","woman",20]
    ] 