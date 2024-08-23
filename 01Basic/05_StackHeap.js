//Stack(primitive)  And    Heap(non primitive)

let myfirstName="rahul"
let mySecondName=myfirstName
console.log(mySecondName)
 mySecondName="Suraj"
 console.log(mySecondName)
 console.log(myfirstName)


 let Obj={
    name:"rahul",
    email:"rrrrrgmail.com",
 }
 let Obj2=Obj;
 Obj2.email="rahul@gmail"
 console.log(Obj.email)
 console.log(Obj2.email)//dono ka output same ayega kyuki isme copy nahi banta hai

