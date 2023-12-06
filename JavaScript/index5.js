// JS 中的对象的基本形式是 `键值对`，基本形式如下面代码块，一个键后跟随一个冒号，后面是这个键指向的值。
// 对象中的键称为对象的属性，属性的值可以是任何可行的值，可以是其他对象，也可以是数字、函数。

const Perosn={
    name:"Lay",
    age:20
}

console.log(Perosn);

const object=new Object({
    name:'Lay',
    age:20
})
console.log(object);

// //访问对象的属性

console.log(Perosn.name);
console.log(Perosn["age"]);//.age 和["age"]是同样的用法
console.log(Perosn.major);

// //为对象添加属性
Perosn.major="信息安全"
console.log(Perosn.major);


// ？const声明对象
// const变量不能修改指针，但是可以修改值，
// 比如我们定义一个对象，我们就可以修改对象里的属性值，但是不可以重写整个对象
const L = {
    age:20,
    name:'Lay'
 }
 Object.defineProperty(L, "major", {
     value: "信息安全"
 })
 console.log(L.major) // "软件工程"