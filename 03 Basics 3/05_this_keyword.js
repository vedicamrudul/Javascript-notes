// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In an event, this refers to the element that received the event.

// The above were the statements that i found relevant to our current knowlegde. There are more different uses.

const details={
    "Full Name": "Vedica Naduvalappil",
    Age: 20,
    stream: "IT",
    "print details": function(){
        console.log(`The student name is ${this["Full Name"]} and their age is ${this.Age}`);
    }
}

details["print details"]();

// now here 'this' referes to the object in the current context. idk how to explain it.

console.log(this);
//this will print nothing. just empty bracis. this refers to the global object which in node js is nothing.
// but when the same is executed in the browser, we get a bunch of shit which is practically cuz windows is the global object.

//now what if we use 'this' in a function?

//oh boy you dont want to know.

// function printthis(){
// console.log(this);
// }

// printthis();

//i am going to keep this commented because yikes.
//function mei you cant refer to a variable usiing this btw.