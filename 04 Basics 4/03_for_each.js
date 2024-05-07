const arr=['vedica', 'tani', 'sanvi', 'pari'];

arr.forEach(function(e){
    console.log(e);
})

// arr.forEach((item)=>{
//     console.log(item);
// })

arr.forEach(printfun);

function printfun(item){
    console.log(item)
}

arr.forEach(function(item, index, arrii){
    console.log(item, index, arrii);
})

// item gives the actual value, index gives the index and arrii gives whole array

//array ke andar object

