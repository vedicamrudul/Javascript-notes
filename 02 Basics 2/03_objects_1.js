//object literals
const JsUser={
Name: 'Vedica',
age: 19,
female: true,
friends:[
    'Tani', 'Nishtha', 'Ananya'
],
favourites:{
dishes:['fries', 'pasta', 'sizzling brownie'],
number: '8'
}
};

//you can store objects inside objects and store array inside it.
//you can store objects inside arrays also. Aise multiple loops ho sakte hai dono ke.


const Details=[
details={
namee:'vedica', 
agee: 19,
adult: true
},
location={
    country: 'india',
    city: 'mumbai'
}
]

console.log(Details[0].agee)
console.log(Details[1].country)

console.log(JsUser.favourites.dishes[1]);


// there are two ways of accessing a key in an object and also of declaring key in object.
//the varible name of keys in objects are stored as a string for eg:
const mySymbol= Symbol();
const school={
    Name: 'Cambridge',
    "parent franchise": 'ryan',
    [mySymbol]: "hello this is my symbol."
}

//for symbols also you have to use 

//now here even 'Name' is stored as a string. It is stored as "Name" : "cambridge".
//so we declare varibale names of keys using string notation cuz then you can put space in between like "parent franchise".

//to access keys with space in their var name, you CANNOT use dot operator.
console.log(school[mySymbol]);
console.log(school["parent franchise"]);
//you will have to use bracket notation.


//changing values of keys.
school.Name='not cambridge';

//if you use object.freez on an object, no one can change its value.
Object.freeze(JsUser);
JsUser.Name='ANANYA';
console.log(JsUser.Name)



