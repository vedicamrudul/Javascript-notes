const myobj1={
    name: 'Vedica'

}

 // acha ok this my obj1 will be an object with no properties but its proto will have name: 'Vedica' but ig this is visible only in the browser for some reason. Ig make this in browser then only you will understand.

 const myobj2=Object.create(myobj1);
// this is how you create another object that inherits the first object
 console.log(myobj2.name)

 class human{
    talk(){
        console.log('yes i can talk')
    }
 }

 // wtf suddenly now there are classes???? in javascript?? what the fuck is happening???

 const human1=new human();
 console.log(human1.talk())


/* 
class superhuman extends human(){
    fly(){
      return 'hi'
 }
 }
 */

 // okay this also happens in js apparently but its only working on browser and not here (extends waala part.)


//  const spiderman=new superhuman();
//  console.log(spiderman)

// oh no wait so prototype is only for construction functions wow okay the rest have __proto__
