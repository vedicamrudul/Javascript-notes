// let me explain prototype in my own words sister. 
// Everything in javascript is an Object. Even functions in javascript are Objects.

function eminem(hi){
    this.hi=hi;
    name:"Rap god",
    whois=function(){
        console.log(`i am beginning to feel like a ${this.name}`);
    }
}

// ok i dont understand but you can add something to the prototype of an object that you create like this given below.
eminem.prototype.crazy=function(){
    console.log('i am crazy')
}
console.log(eminem.prototype)

// so like when you create an array, get gets its __proto__: array[0], this means it is of the prototype array. This means it has many methods which are specific to array. Basically, the array object that you created, inhereits properties of array prototype. Now everything is an object. so the prototype of array has a furthur prototype __proto__ : Object, which has properties of object. Basically methods that are inherited by literally EVERYTHING. The prototype of object is null, which is kinda like the end point. The js engine ig keeps going furthur and furthur into the prototype to find things and calls it as soon as it gets it. Like lets say i called toString() function which is a part of object prototype. The js engine will first look for toString() method in prototype of eminem, then go into prototype of object on not finding it in eminem, and then if it gets toString() in object prototype, then it will call it. So prototype is a way of inheriting data. 