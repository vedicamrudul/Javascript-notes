// fetch api returns a promise.
// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

// here we will learn fetch using async await.

async function consumefetch(){
    try{
        const response=await fetch('https://api.github.com/users/vedicamrudul');
        const data= await response.json();

        // console.log(response.json())
        // if you do the above one instead of await one for converting into json, then the promise will be pending because json conversion also requires some amount of time.
        console.log(data.name)
    }
    catch(error){
        console.log(error)
    }
}

consumefetch()