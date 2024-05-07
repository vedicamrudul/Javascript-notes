//      to concat objects, there are two methods:

//      using Object.assign():

const person1={
    Name1: "Xyz",
    age1: 38,
    occupation1: "teacher"
}
const person2={
    Name2: "abc",
    age2: 23,
    occupation2: "student"
}

const Twoperson=Object.assign({}, person1, person2);
// console.log(Twoperson);

//      so in this method, there is a source object and target objects. 
//      objects.assign(Source, Target, Target, Target...) => the first object is source and the rest are targets.
//      the target gets added to the source object which is returned. So it is suggest to give an empty object as source
//      i.e {} as the source so that all targets are added to it. Its not neccessary. You can give the source
//      as the first object to be concatenated as well.  eg=> object.assign(person1, person2);
//      here person2 gets added to person1 and that object is returned.



//      other method=> Spread (used in arrays also) => glass shattering method:

const twoperson2={...person1, ...person2};
// console.log(twoperson2);


//      some cool, useful and IMPORTANT methods for objects:

console.log(Object.keys(person1));      // converts object keys into array elements.
console.log(Object.values(person1));    // converts object key values into array elements.
console.log(Object.entries(person1));   // converts object key and value pair into an array element.



//      destructuring objects (arrays bhi hote hai destructure but not used so much):

const {Name1} = person1;
console.log(Name1);

//now you can directly access name1 without using dot operator constantly.

const {Name2: n2} = person2;
console.log(n2);

