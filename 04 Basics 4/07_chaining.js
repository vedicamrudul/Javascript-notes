// chaining is like you can apply multiple filters and maps one after the other.


const nums=[1,2,3,4,5,6,7,8,9,10];

const filternums= nums.map((item)=> item*7).map((item=> (item+3))).filter((item)=> item>50);

console.log(filternums)

// so in this the first map creates an array of all items*7 and then passes it into the next map and then each of the items in the new array gets increamented by 3 and is finally passed to the filter which filters it acc to the condition and stores it in the 'filternums' variable.

