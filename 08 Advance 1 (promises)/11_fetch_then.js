fetch('https://api.github.com/users/vedicamrudul').then((response)=>{
    return response.json();
    // return this cuz we know is then ke baad hi dusra then run hoga
}).then((data)=>{
    console.log(data);
}).catch(function(error){
    console.log(error)
})