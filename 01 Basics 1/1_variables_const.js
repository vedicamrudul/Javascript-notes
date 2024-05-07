// Variables and Data Types
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
// # console.table([group of variables you want to show in tabular form])


const Name="Vedica";
let age=19;

// declaration and initialisation.

let Number;
// only declaration
// gives undefined value on printing since it is not initialised.

console.table([Name, age, Number]);