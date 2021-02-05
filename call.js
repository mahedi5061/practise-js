const firstPerson={
    firstName:'Rahim',
    lastName:'uddin',
    salary:15000,
    getFullName:function(){
         console.log(this);
    },
    chargeBill:function(amount,tips,tax){
        console.log(this);
        this.salary=this.salary-amount-tips-tax;
        return this.salary;
        
    }
}

const secPerson={
    firstName:'jamal',
    lastName:'uddin',
    salary:30000,
    msg:function(){
        console.log(this);
    }
}

const thirdPerson={
    firstName:'kamal',
    lastName:'uddin',
    salary:40000

}
const fourthPerson={
    firstName:'Barek',
    lastName:'uddin',
    salary:50000
}

firstPerson.chargeBill.call(thirdPerson,5000,1000,500);
firstPerson.chargeBill.call(thirdPerson,5000,1000,500);
// firstPerson.chargeBill.call(thirdPerson,5000);
console.log(thirdPerson.salary);