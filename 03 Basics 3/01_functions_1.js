//      mostly sab basic tha toh i will just jot down the new things.

function loggedin(username){
    if(!username){
        console.log("Enter a valid username")
        return
    }
   return console.log(`${username} just logged in`)
}

loggedin();
loggedin('Vedica')
//      so here !username mathlab agar username undefined hai toh uska opposite hoga that username is defined
//      toh woh for loop ke andar jayega meaning that username is not defined. Phir woh return kargea.
//      not necessary ki you have to return something. You can just write return to end a fucntion.

function loggedout(username= 'someone'){
     console.log(`${username} just logged out`)
}

//      here there is always a default value 'someone' so username is never null or undefined.

loggedout()
loggedout('Vedica')