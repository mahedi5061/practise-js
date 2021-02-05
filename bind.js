const firstPerson={
    firstName:'Rahim',
    lastName:'uddin',
    salary:15000,
    getFullName:function(){
         console.log(this);
    },
    chargeBill:function(amount){
        console.log(this);
        this.salary=this.salary-amount;
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
    
    const billCharge=firstPerson.chargeBill.bind(thirdPerson);  //when we called bind method it return a function.
    billCharge(5000);
    billCharge(5000);
    billCharge(5000);
    billCharge(5000);
     console.log(thirdPerson.salary);
     
    // const test=secPerson.msg.bind(fourthPerson);
    // test();