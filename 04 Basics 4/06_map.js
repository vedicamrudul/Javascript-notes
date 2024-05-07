// so lets see the difference between map and filter.

const nums=[1,2,3,4,5,6,7,8,9,10];

const numarr1=nums.map((item)=>{
    return item*9;
})

console.log(numarr1);

// so the thing is, in filer, its kinda like a true or false thingy. like you give a condition and the only numbers or elements that are returned are the ones that match the condition. Like num>4. But in map, all the values are returned. you can do some operations on them and return them.