// if you want guarantee that the variable stores only a certain datatype, then you can: 

const numberOnly= new Number(100);
// now the type of this will be guaranteed, a number.

const anyData=200;

console.log(numberOnly);
console.log(anyData);

console.log(anyData.toString());
console.log(numberOnly.toFixed(2));
// toFixed(n) gives decimal precision value till n.
const  deciNum=234.892;
console.log(deciNum.toPrecision(3));
console.log(deciNum.toPrecision(5))
// toPrecision(n) rounds off till that value (includes numbers before decimal)

const hundreds=1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
// puts commas.


