function func(){
    var sum=0;
    for (let i = 0; i <arguments.length; i++) {
        const element = arguments[i];
        sum=sum+element;
    }
    return sum;
}
var result=func(6,7,8,3,9);
console.log(result);