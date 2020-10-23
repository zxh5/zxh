const tif=[]
const allMoney=[]
function nummber(a,b,c){
    for(let i=0;i<arguments.length;i++){
        let sum=0;
        let tifSum=0;
        if(arguments[i]<50){
            tifSum=arguments[i]*0.2;
            sum=arguments[i]+tifSum;
            tif[i]=tifSum;
            allMoney[i]=sum
        }else if(arguments[i]>50&&arguments[i]<200){
            tifSum=arguments[i]*0.15;
            sum=arguments[i]+tifSum;
            tif[i]=tifSum;
            allMoney[i]=sum
        }else{
            tifSum=arguments[i]*0.1;
            sum=arguments[i]+tifSum;
            tif[i]=tifSum;
            allMoney[i]=sum
        }

    }
}
nummber(124,48,268);
console.log("小费金额："+tif)
console.log("支付金额："+allMoney)