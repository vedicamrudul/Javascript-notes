const promiseOne=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Lets say we read some files. Async operation performed")
        // now lets say the file was corrupt so we have an error. 
        const error=false;
        if(!error){
            resolve({username: "vedicamrudul", password: 12345});
            //obviously if there is no error, we will resolve, that is consume the data and use it
        }
        else{
            reject("There was an error in the file, the data might be corrupt")
            //just like resolve is connected to then, reject is connected to catch (just like try catch in java)
        }
    }, 2000);
})

promiseOne.then((user)=>{
    console.log(user)
}).catch(function(errorMsg){
    console.log(errorMsg)
    //so if there was an error, this gets printed.
})