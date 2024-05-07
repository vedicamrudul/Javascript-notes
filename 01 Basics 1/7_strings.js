const namee= 'vedica';
const age=19;
const adult= true;

// to concatenate two strings:

// method 1(not recommended- dont use):

console.log("My name is " +namee+ " and i am " + age + " years old");

// method 2(do this!):

console.log(`\nMy name is ${namee} and i am ${age} years old`);


// accessing key at 2nd position.
console.log(namee[2]);

// using functions:
console.log(namee.length);

console.log(namee.toUpperCase());

console.log(`\ngetting character at index 3 in vedica - ${namee.charAt(3)}`);

console.log(`\ngetting index of 'i' in vedica - ${namee.indexOf('i')}`);

console.log(`\nslicing a string using substing(x,y)- ${namee.substring(0,4)}`);

// trim 
let name2='      vedi     ';
console.log(`\ntriming white spaces from front and back- ${name2.trim()}`)

// trimStart() and trimEnd() bhi hota hai.

// to replace something.
let newstring='hello i am now going for a walk';

console.log((newstring.replaceAll(' ', '_')));
//for all instances
console.log(newstring.replace(' ', '_____'))
//for only first instance

// to see if the string includes a certain substring

console.log(newstring.includes('hello'));

// to create an array of words or characters, which are seperated by something.

console.log(newstring.split(' '));

// this will split the string after every ' '

console.log(newstring.split(' ', 2));
