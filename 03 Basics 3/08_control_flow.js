// falsy value
// false, 0, -0, NaN, BigInt 0n, "", null, undefined.

// truthy value
// true, 1, "anything inside string- non empty string", "false" (cuz its a string not boolean), {}, [], function(){}   (empty function)


// to check is array length or object length is zero

const arr=[2];
const myobj={};

if(arr.length===0){
    console.log("The array has no elements")
}
else if(arr.length>0 && arr.length< 5){
    console.log("Array length is greater than 0 and less than 5")
}
else{
    console.log("Array has 5 or more elements");
}


// the below if condition converts the keys of object to an array and then usses array_name.length function to calculate its length.
if(Object.keys(myobj).length===0){
    console.log("object is empty");
}
else{
    console.log(`object is not empty`);
}



// now we talk about Nullish coalescing operator (??): null undefined
// this is used as a safety net (kinda new operator)

let val1= 5 ?? 10;
let val2= null ?? 50;
let val3= undefined ?? 60;
// will store left value if its not undefined or null, else it will store right value.
console.log(`${val1}, ${val2}, ${val3}`);


// terniary operator
// condition ?? true : false



8>10 ? console.log("true hogaya bhai") : console.log("false hai bhai");


// switch case is like LITERALLY EVERY OTHER PROGRAMMNING LANGUAGE.
