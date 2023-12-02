// ts中类的访问类型
// 三种访问类型：private protected public
// 1)先写一个简单的类
// class Person{
//     name:string;
// }
// const person = new Person();
// person.name = "capoo";
// console.log(person.name)

//2)public访问属性讲解
//这个时候可以打出capoo是因为我们如果不在类里对name的访问属性进行定义，那么它就会默认是piblic属性
//即：
//> public在程序里的意思就是允许在内部和外部被调用
/* 
    class Person {
        pulic name:string;
    }
*/
//比如我们在类内调用，写一个sayHello方法
//其中this.name就是类的内部调用
// class Person {
//     public name:string;
//     public sayHello(){
//         console.log(this.name + ":" + "my name")
//     }
// }
//以下是属于类的外部调用
// const person = new Person();
// person.name = "capoo";
// console.log(person.sayHello())
//3）private访问属性讲解
//private访问属性的意思是，只允许在类的内部被调用，外部不允许调用。
//比如我们把name的属性改成private，那么在外部使用时就会报错。
//报错：属性“name”为私有属性，只能在类Person中访问
// class Person {
//     private name:string;
//     public sayHello(){
//         console.log(this.name + ":" + "my name")
//     }
// }
// const person = new Person();
//person.name = "capoo";
//4）protected访问属性讲解
//protected只允许在类内及继承的子类中使用
class Person{
   protected name:string;
   public sayHello(){
       console.log(this.name + "sayHello")
   } 
}
class Teacher extends Person{
    public sayBye(){
        this.name
    }
}
const person = new Person();
//person.name = "capoo" //属性"name"受保护，只能在类"Person"及其子类中访问
//怎么给person.name赋值??只读?