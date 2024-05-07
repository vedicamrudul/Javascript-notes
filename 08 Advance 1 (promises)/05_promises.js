// first way of creating a promise.
const promiseOne=new Promise(function(resolve, reject){
    // perform asynchronous operation
    // Database calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
// so promise here takes a callback function with two parameters: resolve and reject. Inside the promise function ig you use set timeout function and you do all your async tasks. Once they are completed you call the resolve() function that will jump to promise_name.then(function(){}) which is given below. This basically means the promise is consumed. the promise_name.then() is directly connected to 'resolve'(resolve means promise consumed)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

// second way of creating promise

new Promise((resolve, reject)=>{
 setTimeout(()=>{
    console.log("Async task 2 is now complete");
    resolve()
 },3000)
}).then(()=>{
    console.log("the promise 2 has been consumed/resolved tooo!")
})