代码运行解释

代码：

let a=20;

const b=30;

var c;

function multiply(e,f){

  var g=20;

  return e*f*g

}

c=multiply(20,30);

console.log(c)

1、代码开始运行，创建一个全局执行上下文来执行全局代码

![image-20201101182238128](C:\Users\HS\AppData\Roaming\Typora\typora-user-images\image-20201101182238128.png)





2、执行阶段，变量赋值完成

![image-20201101182359665](C:\Users\HS\AppData\Roaming\Typora\typora-user-images\image-20201101182359665.png)



3、创建一个新的函数执行上下文来执行该函数代码

![image-20201101182524628](C:\Users\HS\AppData\Roaming\Typora\typora-user-images\image-20201101182524628.png)



4、函数变量赋值完成，执行上下文进入执行阶段

![image-20201101182546311](C:\Users\HS\AppData\Roaming\Typora\typora-user-images\image-20201101182546311.png)

5、该函数执行完后，返回值被储存在c中。全局词法环境更新，全局代码执行结束，程序结束





























