/* ts中类的概念和使用 */
//1）类的基本使用
class Lady {
    content = "hi man";
    sayHello(){
        return this.content
    }
}
const goddess = new Lady();
//console.log(goddess.sayHello()) //hi man

//2)类的继承 extends
class LadyOne {
    content = "hello";
    sayHello(){
        return this.content
    }
}
class LadyOneSon extends LadyOne {
    //新类自己定义的方法
    sayWorld(){
        return "world"
    };
    //3）类的重写  
    // 新创建的类的值覆盖了继承的值，但是原类的值不变
    sayHello(){
        return "rewrite-hello"
    };
}

const person2 = new LadyOne()
// console.log(person2.sayHello())
const person1 = new LadyOneSon()
// console.log(person1.sayHello())
// console.log(person1.sayWorld())

//4）super关键字的使用
class LadyOneSon1 extends LadyOne{
    sayHello(){
        return super.sayHello() + "你好"
    }
}
const person3 = new LadyOneSon1()
console.log(person3.sayHello()) // hello你好
