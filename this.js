const person={
    firstName:'Rahim',
    lastName:'uddin',
    salary:15000,
    getFullName:function(){
         console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
       return this.salary=this.salary-amount;
    }
}
const result=person.chargeBill(200);
console.log(result);

  function func(){
    //   'use strict'  it will not work if i use 'use strict'
      this.name='mahedi hassan sharif';
  }
  func();
  console.log(name);

const person={
    name:'mahedi hassan',
    job:'student',
   
    anotherObj:{
        name:'virat kohli',
        job:'player',
        msg:function(){
            console.log(this);
        }
    }
   
}
person.anotherObj.msg();
 