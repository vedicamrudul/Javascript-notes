// the 'for each' function does not return anything.
// we use filters to return certain values from an array.

let ArrNum=[1,2,3,4,5,6,7,8,9,10];

const selectNums= ArrNum.filter((item)=> item>5);
// since we didnt open a new scope (curly backets '{ }', we dont need to explicitly write 'return' statement. Since its only one statement, and no new scope is created, automatically return hojaata hai.

console.log(selectNums);

const selectNums2= ArrNum.filter((item)=>{
    //console.log(item); //you can print and other things here too.
    return item<5;
})

//since we created a new scope above, we have to write the return statement and it will return the array of numbers that matches that condition. 

console.log(selectNums2);

// doing the same thing as filter using 'for each' now.
 const selectNums3=[];

 // okay this confused me. I thought const is used when you want the value to be fixed but here we are clearly pushing more numbers into the array each time in the for each loop below despite it being a 'const selectNums3' declaration. what i understood is that (upar upar se) for arrays and maybe for non primitive datatypes, the const is like a constant reference to the array or object that cannot be changed. Like basically const mathlab you cant change the value in the variable so for primitive datatypes its like when you try to change the value of lets say 'const num=1' to 'num=2' you are chaning the actual value stored in the varaible 'num' so thats not allowed. but when you are declaring a const array, woh array ka reference gets stored and woh toh change nahi hoga no matter what changes you make in the actual array.

 ArrNum.forEach((item) => {
    if(item>5){
        selectNums3.push(item);
    }
 });

 console.log(selectNums3);

