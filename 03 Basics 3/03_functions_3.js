// passing objects and arrays in functions.

// 1. Passing objects.

const User_details={
Name:"Vedica",
Age: 20
}

function Display_details(an_object){
    return `\nHello ${an_object.Name}, Since you are ${an_object.Age}, you cannot enter the club \n`
}

console.log(Display_details(User_details));

// or we can also pass an object as:

console.log(Display_details(
     {
        Name: "Tanirika Dutta",
        Age: 19
     }
))

// 2. Passing arrays.

const Random_animals=['Tiger', 'Lion', 'kangaroo'];

function fav_animal(an_array){
    console.log(`\nMy favourite animal is ${an_array[2]} \n`);
}

fav_animal(Random_animals)

// Summary: just pass an array name normally or an object name zyaada kuch nahi karna hai.