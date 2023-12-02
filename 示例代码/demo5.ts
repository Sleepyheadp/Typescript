/* 函数参数和返回类型定义 */
//1、简单类型定义
function getTotal3(one:number,two:number){
    return one + two;
}
const total3 = getTotal3(1,2)

// 我们这里没有定义函数返回值的类型
const total4:number =  getTotal4(1,2)
//这种方法虽然解决了报错，但是没有从根本上解决问题
//问题在于没有定义getTotal函数的返回值类型

//解决方法：
function getTotal4(one:number,two:number):number{
    return one + two;
}
const total5 = getTotal4(1,2)

//2、函数无返回值时定义方法
function sayHello(){
    console.log("hello world!")
}

//我们给他一个类型注解 void，代表没有任何返回值
function sayHello2():void{
    console.log("hello world!")
}

//3、never返回值类型
//如果一个函数是永远也执行不完的，就可以定义返回值为never。
//（比如抛出异常的函数）
function errFunction():never{
    throw new Error();
    console.log("这里的代码执行不到了？")
}
//死循环函数
function forNever():never{
    while(true){}
    console.log("执行不到")
}

//4、函数参数为对象（解构）时
function add({one,two}){
    return one + two;
}
//totalAdd的类型为any 任何类型
const totalAdd = add({one:1,two:2});

//给参数进行类型注解 返回值也进行类型注解
function add2({one,two}:{one:number,two:number}):number{
    return one + two;
}
const three2 = add2({one:1,two:2})

// 如果参数是对象，并且里边只有一个属性时
// 错误写法：
// function getNumber({one}:number){
//     return one ;
// }
// const one = getNumber({one:1})
// 正确写法：
function getNumber({one}:{one:number}):number{
    return one;
}
const first = getNumber({one:1})