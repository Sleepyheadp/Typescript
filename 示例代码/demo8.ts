/* typescript中的interface接口 */

//1、做一个自动筛选的小功能 - 理解接口
const screenResume =(name:string,age:number,bust:number) => {
    age < 24 && bust >= 90 && console.log(name + "进入面试");
    age > 24 || bust < 90 && console.log(name + "不好意思");
}
//需要看到这些人的简历
const getResume = (name:string,age:number,bust:number)=>{
    console.log(name + "年龄:" + age + "," + "尺寸:" + bust)    
}
screenResume("小红",18,90)
screenResume("小李",19,80)
getResume("小红",18,90)
getResume("小李",19,80)

//1）类型别名
//这个时候发现类型注解重复了。我们可以通过类型别名来解决 type

type LadyInterface = {name:string,age:number,bust:number}
const screenResume2 = (girl:LadyInterface) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || girl.bust < 90 && console.log(girl.name + "不好意思");
}
const getResume2 = (girl:LadyInterface)=>{
    console.log(girl.name + "年龄:" + girl.age + "," + "尺寸:" + girl.bust)    
    
}
screenResume("小红",18,90)
screenResume("小李",19,80)
getResume("小红",18,90)
getResume("小李",19,80)

// 2）还可以通过interface接口解决
interface LadyInterface2 {name:string;age:number;bust:number}
const screenResume3 = (girl:LadyInterface2) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || girl.bust < 90 && console.log(girl.name + "不好意思");
}
const getResume3 = (girl:LadyInterface)=>{
    console.log(girl.name + "年龄:" + girl.age + "," + "尺寸:" + girl.bust)    
    
}
screenResume("小红",18,90)
screenResume("小李",19,80)
getResume("小红",18,90)
getResume("小李",19,80)

/* interface接口和类型别名的区别 */
//`接口类型可以直接给类型，比如string，而接口必须是一个对象`
type interType = string;

//但是接口不能这样写，它必须代表的是一个对象，也就是说，在你初始化的时候，必须写成interface定义的形式
const interType2:LadyInterface2 = {
    name:"xiaohong",
    age:18,
    bust:90
}

//2、接口非必选值得定义
//可选值  在：号前加一个"?"
interface girlSymbol {
    name:string;
    age:number;
    bust:number;
    waistline?:number //非必选属性
}
const getResume4 = (girlW:girlSymbol) => {
    console.log(girlW.name + "年龄是:" + girlW.age + "胸围是:" + girlW.bust)
    girlW.waistline && console.log(girlW.name + "腰围是" + girlW.waistline)

}
const girlW = {
    name:"小红",
    age:18,
    bust:90,
    waistline:30,
}
getResume4(girlW)
// getResume4("小李",18,90,30) //报错