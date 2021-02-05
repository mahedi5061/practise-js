const person={
    name:'mahedi',
    salary:2000,
    getFullName:function(){
        console.log(this);
    }
}

const per={
    name:'kuddus',
    salary:3000
}
per.getFullName=person.getFullName;
console.log(per.getFullName());