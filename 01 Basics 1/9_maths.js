console.log(typeof Math);

console.log(Math.abs(-19));
// gives absolute (always +ve value).

console.log(Math.floor(33.69));
// rounds up to the lower value.

console.log(Math.ceil(19.02));
// rounds up to the upper value.

console.log(Math.round(74.22));
// rounds up.

console.log(Math.max(10,34,56,8));
console.log(Math.min(10,34,56,8));
// finds max and min.


console.log(Math.random());
// this generates number between 0 and 1 (including 0 and not including 1).


let min=19;
let max=37;
console.log(getRandomArbitrary(min,max));
console.log(getRandomInt(min,max));
console.log(getRandomIntInclusive(min,max));
// Getting a random number between two values:

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  

// Getting a random integer between two values:
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


//   Getting a random integer between two values, inclusive:
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  