//建立数组存储比分
let arr1=[89,120,103]
let arr2=[116,94,123]
let arr3=[97,134,105]
//创建变量平均分、数值和
let avg1=0
let sum1=0
let avg2=0
let sum2=0
let sum3=0
let avg3=0
let sum4=0
let avg4=0
let sum5=0
let avg5=0
let sum6=0
let avg6=0
//遍历数组，求和
for(let i in arr1){
    let a=arr1[i];
    sum1=sum1+a
}
//求平均分
avg1=sum1/arr1.length
console.log("John的平均分为："+avg1.toPrecision(3))

for(let i in arr2){
    let b=arr2[i]
    sum2=sum2+b
}
avg2=sum2/arr2.length
console.log("Mike的平均分为："+avg2.toPrecision(3))

win=(avg1>avg2?"John获胜，Mark的平均分为："+avg1:"Mike获胜，Mike的平均分为："+avg2)
console.log(win)

//更改数组分数
arr1[0]=150
console.log(arr1)

//遍历数组，求和
for(let i in arr1){
    let a=arr1[i];
    sum3=sum3+a
}
//求平均分
avg3=sum3/arr1.length
console.log("mark的平均分为："+avg3.toPrecision(3))

for(let i in arr2){
    let b=arr2[i]
    sum4=sum4+b
}
avg4=sum4/arr2.length
console.log("John的平均分为："+avg4.toPrecision(3))

//改变分数后比较平均分
if(avg3>avg4){
    console.log("Mark获胜，平均分为："+avg3.toPrecision(3))
}else if(avg3<avg4){
    console.log("John获胜，平均分为："+avg3.toPrecision(3))
}else{
    console.log("平均分相同，为平局")
}

//求Mary的平均分
for(let i in arr3){
    let a=arr3[i];
    sum5=sum5+a
}
//求平均分
avg5=sum5/arr3.length
console.log("Mary的平均分为："+avg5.toPrecision(3))

//比较平均分
if(avg1>avg2&&avg2>avg5){
    console.log("John获胜，平均分为："+avg1.toPrecision(3))
}else if(avg1>avg5&&avg5>avg2){
    console.log("John获胜，平均分为："+avg1.toPrecision(3))
}else if(avg2>avg1&&avg1>avg5){
    console.log("Mike获胜，平均分为："+avg2.toPrecision(3))
}else if(avg2>avg5&&avg5>avg1){
    console.log("Mike获胜，平均分为："+avg2.toPrecision(3))
}else if(avg5>avg1&&avg1>avg2){
    console.log("Mary获胜，平均分为："+avg5.toPrecision(3))
}else if(avg5>avg2&&avg2>avg1){
    console.log("Mary获胜，平均分为："+avg5.toPrecision(3))
}else{
    console.log("平均分相同，为平局")
}

//更改数组数据
arr3[1]=100
console.log(arr3)

//求更改后Mary的平均分
for(let i in arr3){
    let a=arr3[i];
    sum6=sum6+a
}
avg6=sum6/arr3.length
console.log("Mary的平均分为："+avg6.toPrecision(3))

//比较平均分
if(avg1>avg2&&avg2>avg6){
    console.log("John获胜，平均分为："+avg1.toPrecision(3))
}else if(avg1>avg6&&avg6>avg2){
    console.log("John获胜，平均分为："+avg1.toPrecision(3))
}else if(avg2>avg1&&avg1>avg6){
    console.log("Mike获胜，平均分为："+avg2.toPrecision(3))
}else if(avg2>avg6&&avg6>avg1){
    console.log("Mike获胜，平均分为："+avg2.toPrecision(3))
}else if(avg6>avg1&&avg1>avg2){
    console.log("Mary获胜，平均分为："+avg6.toPrecision(3))
}else if(avg6>avg2&&avg2>avg1){
    console.log("Mary获胜，平均分为："+avg6.toPrecision(3))
}else{
    console.log("平均分相同，为平局")
}