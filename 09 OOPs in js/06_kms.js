// the file name is kms cuz i want to kill myself wtf is this language and why i am going in so much depth?
// meko ab kuch nai samaj raha i am literally rushing through this in panic.

// okay chalo so lets say i want to add a method to literally everything in js.

Object.prototype.Queen=function(){
    console.log('yes i am the queen')
}

const arr=[1,2,3,4]
const Str='vedi'

arr.Queen()
Str.Queen()
// so now array and Str both have Queen() method.

function hello(){

}

const hi=new hello();
hello.Queen();

// see even a new function (object only) has Queen() clearly showing that functions also have object prototypes

// INHERITANCE.

const human={
    walk: function(){
        console.log('i can walk')
    }
}

const superhuman={
    fly:function(){
        console.log("yes i can fly")
    }
}

Object.setPrototypeOf(superhuman, human)
superhuman.walk()

