//arrays can have different datatypes.
//if you copy an array into another array, it makes a shallow copy that is both will have the same reference in heap.


let myarr=['vedica', 18, false];
console.log(myarr[0]);

let myarr2=new Array(12, 4, 3, 5);

console.log(myarr2);
console.log("This changes into the following array on using pop, unshift(77), push(66): ")
myarr2.pop()
myarr2.unshift(77)
myarr2.push(66)

// pop removes the last element, push adds an element at the end (like a stack) and unshift adds an element at the start.
console.log(myarr2);

myarr2.shift();
//this will remove the element from the start.
//shift unshift is not great cuz high time complexity.


console.log(`\nThe index of element 3: ${myarr2.indexOf(3)}`);
console.log(`\nThe array includes 9? ${myarr2.includes(9)}`);

const joinmyarr2=myarr2.join();
// joinmyarr2 has become a string. join() converts array into string

console.log("\n");
console.log(myarr2);
console.log(joinmyarr2);

// SLICE AND SPLICE.

let myarr3=[77,78,79,80,81,82];

console.log(`\nThis is the original myarr3: ${myarr3}`); 
console.log(`\nThis is using slice(1,3) on myarr3: ${myarr3.slice(1,3)}`); 
console.log(`\nThis is the myarr3 after slice: ${myarr3}`); 
console.log(`\nThis is using splice(1,3) on myarr3: ${myarr3.splice(1,3)}`); 
console.log(`\nThis is the myarr3 after splice: ${myarr3}\n`); 
//basically slice doesnt affect the original array and gives you a new array with elements
//ranging from lower limit to upper limit index exluding upper limit.
// splice affects the original array and takes out the elements including lower limit to including upper limit.
// and it creates a new array and the old array has elements outside the index.