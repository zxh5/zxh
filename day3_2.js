//集合 set
//创建集合
const oSet = new Set();
oSet.add(1);
oSet.add(2);
oSet.add(3).add(4).add(5);
oSet.add(5);
console.log(oSet);

const list1 = new Set([1,2,3,4,5,6]);
console.log(list1);

const list2 = new Set("hello");
console.log(list2);

//size 获取集合中元素的数目
const list3 = new Set().add(`z`).add(`x`).add(`h`);
console.log(list3.size);

list3.size = 2;
console.log(list3);

//has 检测一个值是否在这个集合中
const list4 = new Set().add(`z`).add(`x`).add(`h`);
a = list4.has('x')
console.log(a);

//删除集合中的一个元素
const list5 = new Set().add(`z`).add(`x`).add(`h`);
const b =list5.delete("x");
console.log(b);
console.log(list5);

const list6 = new Set().add(`z`).add(`x`).add(`h`);
const a = Array.from(list6);
console.log(a);

const list7 = new Set().add(`z`).add(`x`).add(`h`);
const a = [...list7];
console.log(a);

//集合去重
const oArray1 = [1,2,34,5,666,666,45,9];
const oSet1 = new Set(oArray1);
console.log(oSet1);
const oArray2 = [...oSet1];
console.log(oArray2);

//map
//创建map
const oMap = new Map();
oMap.set(1,"I");
oMap.set(2,"II").set(3,"III").set(4,"IV").set(5,"V");
console.log(oMap);
console.log(oMap.size);
const a = oMap.get(5);
console.log(a);
oMap.set("name","zxh");
const b = oMap.get("name");
console.log(oMap);
console.log(b);
console.log(oMap.has("name"));
const c = oMap.delete("name");
console.log(c);
oMap.clear();
console.log(oMap);


const oMap = new Map().set(1,"I").set(2,"II").set(3,"III").set(4,"IV").set(5,"V");
const oArray1 = [...oMap];
console.log(oArray1);




