function func(num){
    if(num%2==0){
        return num;
    }
    else{
    return num*2;
}
}

function funcNew(ages){
    var em_arr=[];
    for(let i=0;i<ages.length;i++){
    const age=ages[i];
    var result=func(age);
    em_arr.push(result);
    
}
return em_arr;
}

var nums=func(13);
var result=nums*nums;
console.log(result);



var ages=[5,6,7,4,9];
var result=funcNew(ages);
console.log(result);