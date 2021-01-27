function main_func(name,age,task){
    console.log('Hello!',name);
    console.log('Your age:',age);
    task();
}

function washHand(){
    console.log('Wash Your hand with soap');
}
function takeShower(){
    console.log('Take shower');
}

main_func('Sogir uddin',20,washHand);
main_func('jogir uddin',17,takeShower);