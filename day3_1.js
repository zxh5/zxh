//创建对象
//1.通过object函数
let myObject = new Object();
myObject.name = "zxh";
myObject.age = 20;
console.log(myObject);

//2通过对象字面量创建对象
const oStudent ={};
oStudent.name = "zxh"
oStudent.age = 20;

const oStudent1 = {
    name: "zxh",
    age:21,
};
console.log(oStudent1.name);
console.log(typeof oStudent1); //object

//array数组
const a1 = new Array();

const a2 = [];
console.log(typeof a2); //object
console.log(a2 instanceof Array);//判断a2是不是数组的实例化
console.log(a2[0]);

a2[0] = "a";
a2[1] = "2";
a2[5] = true;
console.log(a2[2]);
const a3=[1,2,3,"abc",true,undefined,null,a2];

//删除数组元素
const avengers = ["美团","饿了么","盼盼"];
delete avengers[2];
console.log(avengers);

//解构数组
const number1 = [1,2,3,4];
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a},b=${b},c=${c}`);

const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a},b=${b},c=${c}`);

const [a,b] = ["zxh",true,1,2,2,1];
console.log(`a=${a},b=${b}`);

//给数组长度赋值
const avengers = ["美团","饿了么","盼盼"];
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);

//pop 删除数组最后一个元素
const avengers = ["美团","饿了么","盼盼"];
avengers.pop();
console.log(avengers);
//push 添加一个新元素到数组的末尾
avengers.push("zxh");
console.log(avengers)
//shift 删除数组中的第一个元素
const avengers = ["美团","饿了么","盼盼"];
console.log(avengers.shift());
console.log(avengers);
//unshift 添加一个元素到数组的第一位
const avengers = ["美团","饿了么","盼盼"];
avengers.unshift("zxh");
console.log(avengers);

//将数组元素和在一起
const avengers = ["美团","饿了么","盼盼"];
const heroes = ["蝙蝠侠","蜘蛛精","海绵宝宝"];
const ah = avengers.concat(heroes);
console.log(avengers,heroes,ah);

const avengers = ["美团","饿了么","盼盼"];
const heroes = ["蝙蝠侠","蜘蛛精","海绵宝宝"];
const ah = [...avengers,...heroes];
console.log(ah);

//join 变成字符串
const avengers = ["美团","饿了么","盼盼"];
const av1 = avengers.join();
const av2 = avengers.join("&");
console.log(av1);
console.log(av2);

//slice 切片
const avengers = ["美团","饿了么","盼盼","圆圆"];
const av3 = avengers.slice(1,3);
console.log(avengers);
console.log(av3);

const avengers = ["美团","饿了么","盼盼","圆圆"];
const av4 = avengers.splice(1,2,"zxh","ysj");
console.log(avengers);
console.log(av4);

//按字母顺序排列
const number1 = [1,2,23,34,55,4]
const a = number1.sort();
console.log(number1);
console.log(a);

//倒序排列
const str = ["a","b","c","1"];
// const b = str.reverse();
// console.log(b);
str.reverse();
console.log(str);

//indexOf 返回所在位置
const avengers = ["美团","饿了么","盼盼","圆圆"];
const a = avengers.indexOf("美团");
console.log(a);
// includes 判断是否在数组中
const avengers = ["美团","饿了么","盼盼","圆圆"];
const b = avengers.includes("美团");
console.log(b);

//二维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0]);
console.log(ma[0][1]);

//把一维数组变成二维
const arr1 = ["jun","jul","aug"];
const arr2 = ["zxh","ysj","hhh"];
const z = [arr1,arr2];
console.log(z);
const arr4 = [...arr1,...arr2];
console.log(arr4);