/*如何定义静态类型*/
let count:number = 1;
count = 3

/*自定义静态类型*/
// `定义类？class`
interface Capoo {
    uname:string;
    age:number;
    study():string;
}
const xiaohongOne:Capoo = {
    uname:"小红",
    age:18,
    study(){
        return "学习typescript的第一天"
    }
}
console.log(xiaohongOne.uname,xiaohongOne.age,xiaohongOne.study())