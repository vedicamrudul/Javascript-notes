//functions in objects.

const JsUser={
    Name: 'Vedica',
    Age: 19,
    Adult: true
}

JsUser.greetings= function(){
    console.log(`Hello! How are you ${this.Name}`)
}


console.log(JsUser.greetings)

console.log(JsUser.greetings())