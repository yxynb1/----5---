//三元运算符


let age=19
// if(age==20){
//     console.log("要奔3啦！");
// }else{
//     console.log("依然年轻");
// }
age==20?console.log("要奔3啦！"):console.log("依然年轻");
// console.log("--------------------------------------------------------");
// age++
// age==20?console.log("要奔3啦！"):console.log("依然年轻");

const a = 3;
let b = 1
b == a ? console.log("first") : b++; b == a ? console.log("second") : b++, b == a ? console.log("third") : console.log("end");
console.log(b);
//解决了三层的嵌套



循环遍历
for(let i=0;i<=3;i++){
    console.log(`i的值是${i}`);//shift+1旁边那个按键可以打出冒号
}
//$符号表示输出数字
const value=[0,1,2]

for(const item of value){
    console.log(item);
}
//map遍历
const newData=value.map(item=>{
    console.log(`item的值${item}`);
    return item*2
})
console.log(newData);