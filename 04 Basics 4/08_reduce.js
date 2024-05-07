// reduce is the shopping cart method. It kinda is used to add all elements of the array or basically concurrently perform something on the next element like idk how to explain.

const nums=[1,2,3,4,5]

const mytotal= nums.reduce((acc,currval)=>{
    console.log(`accumulator: ${acc}, and current value: ${currval}`);
    return acc+currval
}, 0)

// 0 is the initial value of the accumulator and the accumulator gets added to the first item and then their result (their sum) becomes the accumulator and gets added to the second item and then so on.
// it basically gives the sum of the array. 

console.log(mytotal)

const shoppingcart=[
    {
        item:'dress', cost: 2000
    },
    {
        item: 'boots', cost: 3000
    },
    {
        item:'gloves', cost: 159
    },
    {
        item:'chain', cost: 550
    }
]

const shoptotal= shoppingcart.reduce((acc, currval)=>{
    return acc+ currval.cost
},0)

console.log(shoptotal)


