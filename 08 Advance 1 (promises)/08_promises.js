const promiseOne=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async operation performed")
        const error=false;
        // you can change the error value to see how it works
        if(!error){
            resolve({username: "vedicamrudul", password: 12345});
        }
        else{
            reject("There was an error")
            
        }
    }, 2000);
})

promiseOne.then((user)=>{
    console.log(user.password)
    return user.username
    // sometimes you want to use only some part of the data ig (i dont understand why this is needed but apparently its important to know) like from the data send through resolve, we only want the username and not the password. So we return the user.username. now this gets returned (sent) to the next 'then((name)=>{})'.
    // basically there is chaining of multiple then
})
.then((name)=>{
    console.log(name)
})
.catch((errorMsg)=>{
    console.log(errorMsg)
    //so if there was an error, this gets printed.
}).finally(()=>{
    console.log("this will always get execeuted. Its the finally block")
})