// 在 JavaScript 中是没有 int，float，double 之分的，所有的数字都是 number 类型的。number 类型的浮点数和其他语言的 double、float 一样。是有精度问题的，不过小数位数小于 10 的浮点数一般是不会出问题的。
// number 有一个很特殊的值 —— NaN（Not a Number），当我们把不是数字的值赋值给 number 类型变量时就会出现这个问题。
let num = 111
console.log(num);

// let a;
// console.log(a);

// let b=null
// console.log(b);

// `+` ，`-`，`*`，`/`，就是单纯的数值运算，不过有几个需要注意的点，在运用上述操作符时，会对值进行隐式转换，会存在隐式转换
console.log(num - '0');//string类型的0被转化为number类型
console.log(num + true);//true被转化成数字1
console.log(num + '2');//2无法转化成number类型于是把111转化为字符类型


//幂运算 **
const a=2**3
const res=Math.pow(2,3)
console.log(res);
console.log(a);

//单目运算符 自增自减++ -- 单目+ -  赋值符号=
//条件运算 > < = >= <=
//==和===

//typeof 操作符

console.log(typeof "L") // string
console.log(typeof 3.1415) // number
console.log(typeof false)  //boolean
console.log(typeof null)   //object
console.log(typeof undefined) //undefined
console.log(typeof 111111111111111111111111111111111111) //number
console.log(typeof function () { }) // function
console.log(typeof {})  // object

//javascript函数和作用域
// 函数的使用分为两步，一步是创建，另一步是调用。在创建时，我们可以在函数后面的括号中设置一些变量，这些变量的值将会被赋值为函数调用时被传入函数的值。
//常见的三种调用函数的方法
const func=function num(a){
    return a**3+3*a+3
}

function Num(a){
    return a**2+2*a+2
}
const test=(a,b)=>{
    return a*b

}

console.log(Num(2));
console.log(func(2));
console.log(test(3,4));