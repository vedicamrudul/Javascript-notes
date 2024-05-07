// i dont quite understand things in detail but i will try to explain.

// arrow function: 

const addnums1= (num1, num2)=>{
    return num1+num2;
}

const addnums2= (num1, num2) => (num1 + num2)
// this is kind of something you can do with arrow function. The statement above translates to: 
// const addnums = (num1, num2) => return num1 + num2
// you dont have to include curly braces in this or you dont need to write 'return' if its a single statement
// its automatically understood that you want to say return this. 
// useful in react. can use this without the brackets around num1+num2 as well. that is for neatness.

const experiment= ()=>{
    console.log(this);
}

//this gives the output '{}' null object

function experiment2(){
    console.log(this);
}

//this gives a lot of things as output.

//so 'this' keyword behaves differently in arrow function and normally declared function.


experiment();
console.log('\n');
experiment2();