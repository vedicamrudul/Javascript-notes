//concatenating arrays.

let arr1=['vedica', 'tani', 'nishtha', 'ananya'];
let arr2=['divam', 'yug', 'riya', 'shreya'];
let arr3=['hailey', 'phil', 'claire', 'jay'];
let arr4=['mom', 'dad', 'sister'];

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log("\narr1 and arr2=> using push:");
arr1.push(arr2);
//original array got changed (arr1)
console.log(arr1);

console.log("\narr2 and arr3 using concat: ");
//have to use new array for this.
let arrConcat= arr2.concat(arr3);
console.log(arrConcat);
//we can only use this to concat 2 arrays thats why we dont like.

console.log('\nconcat arr2, arr3 and arr4 using spread: ');
//spread is like when you break a glass piece and it gets shattered into multiple parts. Spread is used by putting '...' in front of array
//which breaks the array into its elements. 
let arrSpread=[...arr2,...arr3,...arr4];
//breaking all arrays into its elements and then combining them together.
console.log(arrSpread);

console.log(arr1.flat(Infinity));
//flat is used to remove array inside array.


//omg i found out something new. If you print an array in between back ticks `` it will get printed as a string wtffff.
