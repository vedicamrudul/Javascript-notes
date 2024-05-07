//different ways of initialising.
let CreateMyDate= new Date(2023, 0, 23,12,33,22);
// when you use this way, january is 0 cuz array.
let CreateMyDate2=new Date("2023-1-29");
//when you use '-' method, january is 01.
let CreateMyDate3= new Date("12-1-2003");
// month-day-year


console.log(CreateMyDate.toLocaleDateString());
console.log(CreateMyDate2.toLocaleDateString());
console.log(CreateMyDate3.toDateString());

let myTimeStamp=Date.now();
// gives time in millisecond since 1970 (ik, wtf).
console.log(myTimeStamp);
console.log(CreateMyDate3.getTime());
// gives time in millisecond since the created date ig.

console.log(Math.round(Date.now()/1000));
// gives current time from 1970 in seconds.


console.log(CreateMyDate.getDate());
console.log(CreateMyDate.getFullYear());
console.log(CreateMyDate.getMonth());
// month aayega array se number form mei (jan=0) toh plus one kardo
console.log(CreateMyDate.getHours());
console.log(CreateMyDate.getSeconds());


console.log(CreateMyDate.toLocaleString('default', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: "2-digit"
}))
// you can customise localstring output.
