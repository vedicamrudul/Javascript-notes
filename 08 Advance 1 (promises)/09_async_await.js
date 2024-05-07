// another way of resolving or consuming a promise is using async await.

const promiseOne=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async operation performed")
        const error=true;
        // you can change the error value to see how it works
        if(!error){
            resolve({username: "vedicamrudul", password: 12345});
        }
        else{
            reject("Error: There was an error")
        }
    }, 2000);
})

// instead of using then(), catch() and finally(), we can use async await like this:

async function ConsumePromiseOne(){
   try {
    const response=await promiseOne;
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

ConsumePromiseOne()
// the function runs