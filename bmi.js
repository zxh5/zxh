let mass1=60       //Mark的体重
let height1=178   //Matk的身高
let mass2=90      //John的体重
let height2=190   //John的身高
let Mark=mass1 /( height1^2)   //计算Mark的BMI
let John=mass2 / (height2^2)   //计算John的BMI
console.log("Mark的BMI为："+Mark.toPrecision(2))   //输出Mark的BMI
console.log("John的BMI为："+John.toPrecision(2))
gao=(Mark>John?"true":"false")  //比较他们谁高
console.log(gao)

