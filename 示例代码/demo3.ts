/* 基础静态类型和对象类型 */

//基础静态类型 number、string、null、undefined、symbol、boolean、void
let count2 : number = 1; //注意const定义常量不可以改变
let myName : string = 'capoo';
//1、对象类型
const xiaojiejie:{
    name:string,
    age:number,
}={
    name:"xiaohong",
    age:18,
} //声明并赋值
console.log(xiaojiejie.name)

//2、数组类型：声明多个对象
const xiaojiejies:string[] = ["tom","jerry","tank"]

//3、类类型
class Person {}
const xiaohong:Person = new Person();

//4、函数类型  必须是函数并且返回值是string类型
const see:()=>string = ()=>{
    return "tank"
}