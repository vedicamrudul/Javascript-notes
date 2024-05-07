const mymap= new Map();
mymap.set('Vedica', 20);
mymap.set('Tanirika', 19);
mymap.set('Krisha', 19);

console.log(mymap);

// for of loop

for (const key of mymap ){
    console.log(key);
}


for(const [key,value] of mymap){
    console.log(`The key is ${key} and the value is ${value}`)
}

const movies={
    "Jawaan": "Shah Rukh Khan",
    "Bhool Bhulaiya": "Akshay Kumar",
    "Bajirao Mastani": "Ranbir Singh"
}


// for in loop
for(const key in movies){
    console.log(key)
}

const arr=["v", "e", "d", "i"];
for(const key in arr){
    console.log(key);
}

//maps also cannot be iterated using for in loop.

