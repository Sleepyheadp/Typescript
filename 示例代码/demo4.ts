/* type annotation 类型注解 */
//这段代码就是类型注解，count变量就是一个数字类型，这就叫做类型注解。
let count3:number;
count3 = 123

/** type inferrence 类型推断*/
let capoo = 123    //typescript会自动去尝试分析变量的类型


//举例 不写类型注解
let one = 1;
let two = 2;
let three = one + two;

//写类型注解 => 没有规定参数类型
function getTotal(one,two){
    return one + two;
}
const total = getTotal(1,2)

//写类型注解 => 声明形参时规定类型
function getTotal2(one:number,two:number){
    return one + two;
}
//这里的total2可以通过one和two的类型推断为number类型
let total2 = getTotal2(1,2)

//当然typescript也可以推断出对象中属性的类型
const xiaojiejie2 = {
    name:"capoo",
}