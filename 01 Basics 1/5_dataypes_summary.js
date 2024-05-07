//primitive dataypes- call by value hota hai. original value ya data ka reference nahi dete, but uske copy ka. so if you make changes
// copy main changes hore hai and not in the real value.

//primitive types- Number, Bigint, String, Boolean, null, undefined, symbol.

//declare symbol.
const id = Symbol("123");
const AnotherId = Symbol("123");
console.log(id === AnotherId); //false aara hai.
// Symbol is a built-in object whose constructor returns a symbol primitive — 
//also called a Symbol value or just a Symbol — that's guaranteed to be unique.


const bigNumber= 2893837918310n;
// add n at the end to make bigInt.
console.log(typeof bigNumber);

//Non-primitive datatype or reference data type- direct reference is given

//non primitive- array, objects, functions.

//we can store functions in variables:
const MyFunction=function (){
console.log("hello world");
};

console.log(typeof id);
//function ka return type is 'function object'

//javascript is dynamically typed langauge cuz datatype is allocated during runtime automatically.
