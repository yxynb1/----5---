# JavaScript

## JavaScript 历史

网页需要交互 -> Java 信徒苦速度慢久矣 -> JS 应运而生 -> 简单、灵活、体积小（问题还多） -> 意外的辉煌起来了

## JavaScript 特点

avaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

## JavaScript 基础语句

### 变量声明

JavaScript 中有三种变量声明方式它们分别是 `const`、`let`、`var`。

其中，`let` 与 `const`是在 ES6 标准后新加入的生命方式，在此之前仅有 `var` 一种命名变量的方式。

const 和 let 的作用域都是“块”，而 var 的作用域就比较复杂。const 声明的变量在**值**上都是不可变的， 而 let 与 var 声明的变量是可变的。

```JavaScript
const a = 4
// a = 3
let b = 4
b = 3 // 3
```

除此之外，JS 变量的命名区分大小写。

> var 与 const、let 在作用域上有些许差别，关于命名的使用，如果不呢个区分区别，我们的建议是能用 const 就用 const，不行就用 var，let 作为最后的选择。

```javaScript
var a = 1;
const b = 2;
let c = 3;
```

### 注释语句

JS 提供了两种注释的方式，它们分别是 、

```JavaScript
/*
let a =4;
*/
// console.log(4);
```

### 输出语句

console.log(...)，`console.log(...)` 的参数有多种形式

1. 它可以只接受一个字符串，不过我们也可以传入其它类型的值，在输出的时候会调用参数的`.toString()`，输出完毕后会自动换行。（支持使用 `+` 来拼接字符串）

2. 它可以接受多个字符串，以 `,` 分隔，这样会以不换行的形式（但是会添加分隔符）依序输出传入的参数。

3. 它接受类似于 `printdf()` 的输出形式。（很遗憾的是它似乎并不能支持全部）

```javaScript
var a = 2;
var b = 3;
var c = 4.3434;
console.log(a, b);  // 2 3
console.log("%d%d",a,b);    // 2 3
console.log("%f", c);   // 4.3434
console.log("%.3f", c); // %.3f  4.3434
```

如果要编写一个程序输出 `Hello World`，我们只需要...

```javaScript
console.log('Hello World!') //Hello World
```

### 如何运行？

1. 在 VS Code 中，如果安装了 Code Runner 插件，可以直接点击 VS Code 右上角的小三角来运行。

2. 我们在第一节课的时候就安装了 node.js，运用 node.js 我们可以使用第二种运行代码的方式：在控制台输入

   ```powershell
   node ./pathname/filename.js
   ```

3. 我们也可以运用 node.js 在不创建文件的情况下编写临时的 JavaScript 代码，只需要在终端输入 `node` 命令。 我们还可以使用 `win` + `r` ，然后键入 node ，来运行 node 环境。在这里编写的所有代码，可以导出为文件。

4. 我们还可以在一个 HTML 文件内嵌入 script 标签的形式，以浏览器为环境运行 js 代码。

### JavaScript 基本类型

JavaScript 有七种（实际上跟据不同的定义这里会有不同的值）基本类型，它们既不是对象，又没有属性，最重要的是它们是不可变的。它们中的六个分别是

- number
- string
- boolean
- null
- undefined
- bigint

> 还有一个类型是 symbol ，但我们并不会讲到它。
> 除此之外，还有就是 obeject 与 function, 也就是对象与函数，它们比较特殊。

下面我们来逐一介绍这些类型。

#### 数字类型 —— number

在 JavaScript 中是没有 int，float，double 之分的，所有的数字都是 number 类型的。number 类型的浮点数和其他语言的 double、float 一样。是有精度问题的，不过小数位数小于 10 的浮点数一般是不会出问题的。

number 有一个很特殊的值 —— NaN（Not a Number），当我们把不是数字的值赋值给 number 类型变量时就会出现这个问题。

> NaN 与所有值（包括 NaN）都不等，需要使用 isNaN() 来判断是否为数字。

#### 字符串类型 —— string

在 JavaScript 中并没有字符类型（char），字符串需要用 `""` 或 `''` 来表示，比如 "Ming"、'麦麦' ……

> 需要注意的是，虽然 `""` 和 单引号 `''` ，都是声明字符串字面量的形式，但是为了优化体验，尽量统一使用同一种声明方式。
> 还有一种模板字符串的方式，它使用 \` 来表示字符串。

#### 布尔类型 —— boolean

boolean 类型包括 `false` 与 `true` 两个值，它们分别表示逻辑运算的 `真` 和 `假`，这一点与其他的语言一样。

#### null 与 undefined

undefined 表示 空，null 也表示 空。但实际上两者有很大的区别，undefined 和 null 是两种完全不同的东西。undefined 是 undefined 类型的唯一值，表示变量未定义（已经声明）。

```JavaScript
var a;   //var a = undefined
console.log(a)    // undefined
```

而 null 是 null 类型的唯一值，它表示对象定义了，但没有引用任何的内存（或者说 对象/值 ），如

```JavaScript
var a = null  // 此时 a 存在，但没有引用任何内存
console.log(a)    // null
```

> null 和 undefined 都有一些特殊的用途，比如 null 可以可以创建一个真正的全空对象，它不以 Object 为原型，而 undefined 也可以利用隐式转换来确保值一定存在。

#### 对象 —— object

除去上述所有的基本类型，JavaScript 中的其他所有“类型”都是对象。包括但不限于 Function (函数)、Object、String、Number......

### JavaScript 运算符

#### 加减乘除

它们分是 `+` ，`-`，`*`，`/`，就是单纯的数值运算，不过有几个需要注意的点，在运用上述操作符时，会对值进行隐式转换，

```JavaScript
var a = 3
console.log(a + true);
console.log(a + '');
console.log(a - '0');
```

因为 JS 底层不存在 `char`，所以除了数字外的字符与数字相运算会得到 `NaN`。当然，其他字符串也会得到这个结果。

#### 幂运算 `**`

幂运算符号是 `**`，它相当于其他语言中的 `Math.pow(x,y)`，也就是数学中的幂运算 ${x^y}$。

#### 单目运算符

1. 自增自减 `++` 与 `--`，`a++`，相当于 `a = a + 1`，而 `a++` 也确实是存在一次赋值操作的。

   > 先计算后传值与先传值后计算?

2. 单目 `+` 与 单目 `-`，它们可以将非数字类型准换位数值类型，不可转的值为 NaN。

   ```JavaScript
   var a = '3'
   var b = '3l'
   console.log(+a)   // 3
   console.log(+b)   // NaN
   ```

   > 它相当于调用了一次为 数字调用了一次 Number()，并返回数值（注意 Number() 之后得到的是一个数值）

#### 赋值运算符 `=`

```JavaScript
a = 3;
b = a;   // 3
```

> 因为 js 类型的是动态型，赋值语句似乎并不会产生隐式的类型转换。

#### 条件运算 `>`， `<`，`>=`，`<=`

用于数值的比较，如数值按照数值的大小进行比较，字符串按照字典序进行比较。

> 在比较不同的类型时，有时会进行隐式的类型转换，有时候会抛出错误，这取决于谁在前面。

#### 逻辑运算 `&&`， `||`，`!`

相当于“逻辑与”，“逻辑或”和“逻辑非”，并且运算优先级为 `!` > `&&` > `||`，最后得到的值为 `true` 或`false`。

#### 模运算 `%`

相当于数学符号 mod 对数值取模。

#### 相等性判断 `==` 与 `===`

[MDN 严格相等 与 相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

> 在 JavaScript 中 == 与 === 不同之处在于，当不同类型的值进行比较时 == 会在比较之前对值进行隐式的类型转换，所以比较的并非是原始值，也因此 `==` 会出现很多意想不到的乐子......

## 操作符

### typeof

它会返回后面的值的“基本类型”

```JavaScript
console.log(typeof "Ming") // string
console.log(typeof 114514) // number
console.log(typeof false)  //boolean
console.log(typeof null)   //object
console.log(typeof undefined) //undefined
console.log(typeof 111111111111111111111111111111111111) //number
console.log(typeof function () { }) // function
console.log(typeof {})  // object
```

> 细心的同学可能注意到这点和上面的基本类型有些出入，实际上我也没找到关于这个的合理解释，所以还是看看远处的 TypeScript 吧，家人们。

### JavaScript 函数 与 作用域

函数是 JS 中非常特殊的一类东西，就像上面的操作符中返回的那样，我们也可以将函数称为一种“基本的类型”，（显然这里的基本类型和我们提到的基本类型并不是一类东西）。

JavaScript 中声明一个函数需要用到 关键字 `funcntion` 具体声明方式为

```JavaScript
   function a () {
      //...
   }
   const b = function(a){
      //...
   }
```

> 这是有两种不同的声明方式，声明之后，它们有着近乎相同的用法（有着一些细微的差异）。

函数的使用分为两步，一步是创建，另一步是调用。在创建时，我们可以在函数后面的括号中设置一些变量，这些变量的值将会被赋值为函数调用时被传入函数的值。比如

```JavaScript
   function f(x) {
      //...
      return x**2 +2 * x + 1;
   }
   f(2)
```

声明与调用分别类似于数学概念中的 ${f(x) = x^3 + 3x + 3}$ 与 ${f(2)}$

> 不同的是数学中的函数是根据一定关系得到映射关系，而 JavaScript 中的函数可以进行一系列的操作。它们被叫做相同而名字，可能也是因为在历史设计时有相似的地方，即函数一开始也是为了得到这样映射关系下的值。不过，显然现在的“方法”与“传统函数”有着更大的差异。

#### 函数作用域

函数在调用时会产生一个特殊的作用域，称为函数作用域。他与块作用域有着些许差异，不过为了能学的下去，我们可以先暂时任为它们没有差异。

#### 块作用域

使用一个大括号引出来的范围， for 循环 ， if...else... 和 do...while 的大括号，同样具有这样的作用。

块作用域仅适用于 `let` 与 `const`，var 并没有块作用域一说。

> 但是函数作用域可以将 var 出来的变量的作用范围限制在函数作用域内。

### 重新声明

允许在程序的任何位置使用 var 重新声明 JavaScript 变量

在相同的作用域，或在相同的块中，通过 let 重新声明一个 var 变量是不允许的

在相同的作用域，或在相同的块中，通过 let 重新声明一个 let 变量是不允许的

在相同的作用域，或在相同的块中，通过 var 重新声明一个 let 变量是不允许的

在不同的作用域或块中，通过 let 重新声明变量是允许的

> const 等同于 let

### 变量提升 与 函数提升

在 JavaScript，如果一个变量在被声明之前被使用了（注意 “声明之前” 它表示声明了而不是未声明，只是声明的晚于使用），并不会抛出错误，不在“声明语句”之前它的值永远是 undefined。我们把这种特性叫做变量提升。

```JavaScript
console.log(a) // undefined
var a = 3
console.log(b) // undefined
var b = 4
console.log(b) // 4
```

与之相对应的还有函数提升，只要我们在程序中声明了函数，我们可以在任何事件调用它，即使调用语句在声明语句之前。

```JavaScript
b()   // 体验函数提升
function b (){
   console.log('体验函数提升')
}
```

还有另外一种特殊的形式

```JavaScript
b()   // b is not a function
var b = function(){
   console.log('由于报错这句话并不会输出')
}
```

这是因为这里实际上是变量提升，而不是函数提升，而提升后的变量 b 被当成 undefined，undefined 显然并不是函数（function），所以并不能被调用。因此上面的语句会抛出一个错误。

> 其实这里也可以解释 null 和 undefined 的差异问题。

### for() ，do...while() ，if...else

...

### 引用类型 与 对象类型 —— object

接下来是重头戏，面向对象语言中的对象。在 JS 中，除了上面提到的基本类型，其他类型全部都是对象。

#### 对象的基本形式

JS 中的对象的基本形式是 `键值对`，基本形式如下面代码块，一个键后跟随一个冒号，后面是这个键指向的值。对象中的键称为对象的属性，属性的值可以是任何可行的值，可以是其他对象，也可以是数字、函数。

```javascript
{
   age:18,
   name:'Ming'
}
```

> JS 中 包括“类”在内，其实都是对象，虽然有 类 的概念 但 JS 中是不存在 类 的，只有模拟类的实现。JS 的 面向对象与其他语言的面向对象有些区别，或者说，其他语言的面向对象都是面向类，只有 JS 才是面向对象（暴论）。

#### 对象的两种声明形式

我们可以直接通过声明一个变量并将一个对象赋值给他的形式，来声明一个对象。（字面量形式）

```javaScript
var a = {
   age:18,
   name:'Ming'
}
```

还可以通过 new 关键字通过对象的`构造函数`来创建一个对象

```javaScript
   var a = new Object({
   age:18,
   name:'Ming'
})
```

##### 构造函数有哪些?

内置的构造函数有 String，Number，Boolean，Null，Error，Date，RegExp,Object 等......

当然还可以自己创建构造函数，比如下面的这个构造函数

```JavaScript
function b() {
   var a = 0;  //var 可以省略
}
var c = new b()
```

是的你没看错，构造函数其实就是普通的函数。

> 如果你输出 c.a，你会发现它的值是 undefined ，为了能真正的使函数内的值称为新建对象的属性的值，我们还需要用到 this。

#### 访问对象属性

对象属性有两种访问形式，一种是通过 `.` 操作符，还有一种是通过 `[]` 操作符，`[]` 的属性是一个字符串，，而且可以在其中做一些字符串操作。当访问不存在的属性时会得到 undefined。

```JavaScript
var a = {
   age:18,
   name:'Ming'
}
console.log(a.age)   // 18
console.log(a['name'])  // "Ming"
console.log(a["ag" +"e"])  // 18
console.log(a.birthday) // undefined
```

#### 为对象添加属性

我们可以直接通过下面的形式为一个现有的对象添加属性

```JavaScript
var a = {
   age:18,
   name:'Ming'
}
a.marjor = "软件工程"
console.log(a.marjor)   // 软件工程
```

除此以外还有一种方式，这种形式较为复杂，主要用于为对象添加其他复杂属性，包括对象是否可枚举、是否可读写......所以一般情况下使用第一种

```JavaScript
   var a = {
   age:18,
   name:'Ming'
}
Object.defineProperty(a, "major", {
    value: "软件工程"
})
console.log(a.major) // "软件工程"
```

### 如果还有时间

#### 引用类型

```JavaScript
var a = {
   age:18,
   name:'Ming'
}
var b = a
console.log(a.major) // undefined
console.log(b.age);  // 18
b.major = "软件工程"
a.age = 19
console.log(b.age);  // 19
console.log(a.major) // "软件工程"
```

#### 原型是什么?

#### instanceof