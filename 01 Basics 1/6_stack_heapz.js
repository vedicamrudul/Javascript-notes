let string1='vedica';
let string2;
string2=string1;
string2='not vedica anymore';
console.log(string1);
console.log(string2);
console.log("change made in string2 is not reflected in string1");

let obj1={
    value1:'hello world',
    value2: 19
}

let obj2=obj1;

console.log("\n" + obj1.value2 + "\n\n" + obj2.value2);

console.log("\nAfter changing value of obj2:\n");
obj1.value2=30;
console.log("\n" + obj1.value2 + "\n\n" + obj2.value2);