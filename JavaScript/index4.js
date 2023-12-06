//变量提升和状态提升

// 在 JavaScript，如果一个变量在被声明之前被使用了（注意 “声明之前” 它表示声明了而不是未声明，只是声明的晚于使用），并不会抛出错误，不在“声明语句”之前它的值永远是 undefined。我们把这种特性叫做变量提升。
console.log(a);
var a = 3
console.log(a);


b()   // 体验函数提升
function b() {
    console.log('体验函数提升')
}


// var的变量提升和let声明
function person(status) {
    if (status) {
        var value = "前端人" 
    } else {
        console.log(value) // undefined
    }
    console.log(value) // undefined
}

// function person(status) {
//     if (status) {
//         let value = "前端人" 
//     } else {
//         console.log(value) // 报错
//     }
//     console.log(value) // 报错
// }
person(false)//此时if里的语句为假，运行else语句，即不对value赋值就使用，发生函数提升，返回undefined。
//若person(true)，此时运行if语句

//禁止重复声明
// var value="前端"
// let value="后端"

// 但是在不同作用域就Ok了
var value="前端"
if(true){
    let value="后端"
    console.log(value);
}




c()
const c = function () {
    console.log("再看看这个呢");
}
// 这是因为这里实际上是变量提升，而不是函数提升，而提升后的变量 b 被当成 undefined，undefined 显然并不是函数（function），所以并不能被调用。因此上面的语句会抛出一个错误。