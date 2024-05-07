console.log("2"> 4);
console.log("2"< "5");
console.log("2"== 4);
console.log("2"== 2);

// comparing string with number=> js automatically converts string to number.

console.log("")
console.log(null>0)
console.log(null==0)
console.log(null<=0)
console.log(null<5);

// comparing null or undefined with numbers works differently. 
// == and other comaprisions work seperately. '==' does not convert null into number however other comparision op
// convert null into number, ie 0
console.log("");
console.log(5==="5");

// this works differently. '==' checks value. like in the fourth line of code, it doesnt matter if one value is string
// and the other is an integer. js automatically converted string into integer. 
// but '===' comapares datatypes so it will give a false value for the same.

