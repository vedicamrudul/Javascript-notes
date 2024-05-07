// i think i finally understand certain things now.

const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // lets say we called some db for some data using an api or something. Now we have lets say the username of the user, their email and their follower count through the db call. 
        //  and you want to use it now you have this data,. How do you do that? See the whole point of this is you cant use data that you dont have. So you need promises so that you can first get the data and then use it. Inside this new promise that we created, we get the data, but we use it inside the promise_name.then() which is directly connected to resolve. when we call resolve() method, we are asking the data we got to be consumed in that part.
        console.log("promise created")
        resolve({username: "VedicaMrudul", email: 'vedicaam80@gmail.com', follower: 1000});

        // so basically the data we want to actually use that we got here is passed in the resolve method. you can pass an object, an array, a function; whatever the fuck you want. This gets passed to promise_name.then() where you can use this data.
    }, 2000);
})

promiseOne.then((data)=>{
    console.log(data);

    //this 'data' here is passed as the parameter of the call back function in then() and the data is nothing but whatever you passed in the resolve() method when the promise was created. 
})