// Hoisting is JavaScript's default behavior of moving declarations to the top.
// When you declare something with let and const, you cannot access it before it is intialised.
// Like waise jaise normally in java and all if you dont declare a varible before accessing it,
// error ayega na.


// there are two ways (as of now in the course) of declaring a function:

// 1. direct?

console.log(addOne(5));

// This declaration is hoisted? idkk i am saying it right but basically,
// when you declare a function like this, it can be accessed before also.

function addOne(num){
    return num + 1;
}

// 2. Storing function in a variable.

console.log(addTwo(10)); //comment out to see result at the end where the function is called again.

// The code does not run from here and gives error cuz function is stored in const variable
// that cannot be accessed before its decalred.

const addTwo= function(num){
    return num + 2;
}

console.log(addTwo(10));