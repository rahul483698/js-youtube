//DATE

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let myCreateDate=new Date(2023,0,23);
//let myCreateDate=new Date(2023,0,23,5,3);
let myCreateDate=new Date("2024-01-14");
//console.log(myCreateDate.toLocaleString());

let mytimeStamp=Date.now()
//console.log(mytimeStamp);
//console.log(myCreateDate.getTime());

//console.log(Math.floor(Date.now()/1000));//milli second to second

let newDate=new Date()
console.log(newDate.getMonth()+1);//becuse of starting to 0
console.log(newDate.getDay());
