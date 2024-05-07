// every object has a constructor property.

// when we use function to create an object then the constructor property will give you the function itself cuz thats whats used to create the object.

function createobj(username){
    this.username=username;
}

const obj1=new createobj();
console.log(obj1.constructor);
// what was the function that constructed obj1?

// now when we use object literals, the javascript engine automatically uses the object constructor.

const obj2={
    name: 'vedica'
}

console.log(obj2.constructor)
// this gives the output function: object. because it is the object function that created the object literal. internally, when you declare an object literal, it goes:
// const obj2=new Object();