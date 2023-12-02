/* typescript中的interface接口2 */
//1）允许加入任何值
interface girlSymbolAdd {
    [propname:string]:any;
}
//意思是属性的名字是string类型，属性的值可以是任意类型
const getSex = (girl:girlSymbolAdd) => {
    girlP.sex && console.log(girl.sex)
}
//定义参数
const girlP = {
    //这里的sex可以是其他任意字符串 aaa
    sex:"女" 
}
getSex(girlP)

//2)接口里的方法
interface girlSymbol2 {
    talkSth():string;
}
const girlS = {
    talkSth(){
        return "hello world!"
    }
}
//3)接口和类的约束
class xiaojiejieA implements GirlA {
    name:"one";
    age:18;
    bust:90;
    sayHello(){
        return "111"
    };
}
//这个时候我们需要声明GirlA接口（否则没法继承）
interface GirlA  {
    name:string;
    age:number;
    bust:number;
    sayHello():string,
}
//接口间的继承
interface Teacher extends GirlA {
    teach():string;
}
//这时如果只看teacher的信息，则
const getResumeTeacher = (girl:Teacher) =>{
    console.log(girl.name)
}
//先定义GirlA的girlA
const girlA = {
    name:"two",
    age:20,
    bust:80,
    sayHello(){
        return "222"
    },
    //在这里写teach方法，就可以与Teacher类中的teach方法匹配
    teach(){
        return "我是teach方法"
    }
}
//这个时候我们发现，Teacher继承的GirlA中没有teach方法，
//我们只是在继承的时候给Teacher类添加了这么一个方法，并没有在继承的GirlA中添加这么一个方法
getResumeTeacher(girlA)