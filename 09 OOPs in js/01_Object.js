// there are three ways of defining an object in javascript.
// 1. Using object literals.
// 2. Using Factory function.
// 3. Using Constructor function.

// USING OBJECT LITERALS.

const movie1={
    movie_name:'Jab we met',
    genre: 'Romance',

    printmovie: function(){
        console.log(this.movie_name)
        console.log(this)
    }
}
const movie2={
    movie_name:'Animal',
    genre: 'Drama',

    printmovie: function(){
        console.log(this.movie_name)
        console.log(this)
    }
}

movie1.printmovie()
movie2.printmovie()

console.log(this)

// When we use object literals, we have to create new object literals everytime we want to create a new object. Not very efficient eh?.
// when we print 'this' inside a function of an object literal, we get the object itself. Basically 'this' is used to refer to the current object.

// USING FACTORY FUNCTION

function makeMovie(movie_name, genre){
    return {
        movie_name,
        genre,
        printmovie2: function(){
            console.log(this.movie_name)
            console.log(this)
        }
    }
}

// so in js we dont have classes. We use functions to encapsulate data and methods. In the factory function, we have to return everything inside the object.

const movie3=new makeMovie('Dhoom', 'Action');


// everytime we create a new object we MUST use the new keyword or else the properties will get added to the 'this' of the global context, which is window in case of browser. Then everytime you create a new object without the 'new' keyword, the data that you put in that new object will replace the data of the old object in the global Object (window) in case of browser
movie3.printmovie2();
const movie4=new makeMovie('Jawaan', 'Action');
movie4.printmovie2()


// USING CONSTRUCTOR FUNCTION

function ConstructMovie(movie_name, genre){
    this.movie_name=movie_name;
    this.genre=genre;
    this.printmovie3=function(){
        console.log(this.movie)
        console.log(this.genre)
    }
}

const movie5=new ConstructMovie('Orange is the new black', 'Drama')
movie5.printmovie3();

