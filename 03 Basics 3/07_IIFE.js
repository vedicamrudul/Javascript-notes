// IIFE is immediatelt invoked Function expressions

// for interview: sometimes there are problems created because of pollution due to global scope, so to remove the pollution
// caused by the global scope varibales or declarations etc, we use iife

// ig its kinda like we execute the function as soon as its created.

(function queen(){
    console.log("DB is CONNECTED")
})();

// here its like we wrap the function in a unit like normally we would execute this as queen() but now we wrap the whole
// function using a bracked () and then write () so its kinda like the same thing but executed immediately like
// you want a database to be immediately connected ig when you run something?

// the above one is a named iffe (queen)

((name)=>{
    console.log("db connected again " + name)
})("Vedica");

//always put semicolon while using iffe cuz it wont know where to end warna.

// the above one is an unnamed iffe