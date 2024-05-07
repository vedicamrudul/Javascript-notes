// bhai mostly i am skipping all of this shit cuz meko genuinely react chalu karna hai toh please understand i am not that clear with all this oops ka concept and everything beyond this point.

// we are talking about prototype.

// Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


// Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

// So when we call myObject.toString(), the browser:

// looks for toString in myObject
// can't find it there, so looks in the prototype object of myObject for toString
// finds it there, and calls it.
// What is the prototype for myObject? To find out, we can use the function Object.getPrototypeOf():

