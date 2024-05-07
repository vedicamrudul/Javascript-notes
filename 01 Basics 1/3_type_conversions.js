// we can convert a variable into another type by using: Number(var_name)=> for conversion into int.
// String(var_name)=> for coversion into string.
// Boolean(var_name)=> for conversion into boolean.

// conversion into integer.

let AgeInString='18';
console.log(typeof(AgeInString));
let AgeInInt= Number(AgeInString);
console.log(typeof(AgeInInt));
console.log(AgeInInt);

console.log(" ");

// now for conversion of null, undefined and string values with letters into int.
let NameInString='1Vedi';
console.log(typeof(NameInString));
let NameInInt= Number(NameInString);
console.log(typeof(NameInInt));
console.log(NameInInt);
// when a string alphabet is converted into int, the conversion is successful but the value wont be shown
// since it will be NaN- not a number.

console.log(" ");

let xyz;
console.log(typeof(xyz));
let xyzInInt= Number(xyz);
console.log(typeof(xyzInInt));
console.log(xyzInInt);
// null gets converted to zero.
// undefined gets converted to NaN.
// boolean true=>1, false=>0


// to convert into Boolean
// 1=> true,            0=> false
// " " => false,      "any value of string"=> true 


