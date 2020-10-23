//创建变量空格，行数
let alt = "";
let num = 4;
for(let i=1; i<=num; i++){
    let blank = "";
    for(let j=1; j<=num-i; j++){   //打印空格
        blank += " ";
    }
    let stars = "";
    for(let m=1; m<=2*i-1; m++){    //打印*
        stars += "*";
    }
    alt += blank + stars + "\n";   //字符串的拼接,拼为一行
}
for(let i=num-1; i>0; i--){    //打印的行数要减1
    let blank = "";
    for(let j=1; j<=num-i; j++){   //打印空格
        blank += " ";
    }
    let stars = "";
    for(let m=1; m<=2*i-1; m++){    //打印*
        stars += "*";
    }
    alt += blank + stars + "\n";   //字符串的拼接,拼为一行
}
console.log(alt);

