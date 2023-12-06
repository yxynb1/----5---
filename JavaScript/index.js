//let和const是ES6标准后新加入的生命方式，在之前仅仅只有var一种

//const和let的作用域都是块，而var的作用域比较复杂。
//const声明的变量值上是不可以再改变的，而let和var可以


// const x = 1;
// x=2
// let a = 4;
// a=5;


/*1. 它可以只接受一个字符串，不过我们也可以传入其它类型的值，在输出的时候会调用参数的`.toString()`，输出完毕后会自动换行。（支持使用 `+` 来拼接字符串）

2. 它可以接受多个字符串，以 `,` 分隔，这样会以不换行的形式（但是会添加分隔符）依序输出传入的参数。

3. 它接受类似于 `printdf()` 的输出形式。（遗憾的是它并不能support all）*/


const a=2;
const b=3;
const c=3.14;

console.log(a);
console.log("%d%d",a,b);
console.log("%f",c);
console.log("%.1f",c);

//当然还有我们最经典的Hello World
console.log("Hello World!");

/*1. 在 VS Code 中，如果安装了 Code Runner 插件，可以直接点击 VS Code 右上角的小三角来运行。

2. 我们在第一节课的时候就安装了 node.js，运用 node.js 我们可以使用第二种运行代码的方式：在控制台输入 node index.js


3. 我们也可以运用 node.js 在不创建文件的情况下编写临时的 JavaScript 代码，只需要在终端输入 `node` 命令。 我们还可以使用 `win` + `r` ，然后键入 node ，来运行 node 环境。

4. 我们还可以在一个 HTML 文件内嵌入 script 标签的形式，以浏览器为环境运行 js 代码。*/



