// Readline-Sync (install the package thru terminal using: npm install readline-sync )

// const readlineSync = require("readline-sync");

// const userName = readlineSync.question("May I know your name?");
// const age = readlineSync.question("May I know your age");

// const userBirthYear = 2023 - age;

// console.log(`Hey ${userName}! You were born in ${userBirthYear}`);


// to run the function, type in terminal: node testing-readline-sync (which is file name)

// const readlineSync = require("readline-sync")
// const userAge = readlineSync.question("How old are you?")
// if (userAge > 16){
//     console.log ("Hey you are an adult");
// } 
// else {
//     console.log ("You are NOT an adult")
// }


const readlineSync = require("readline-sync")

const kappiQuestion = readlineSync.question("What's your name?")

if (kappiQuestion == "Samar"){
    console.log ("Uh-oh! You are a naughty kappi!");
} 
else {
    console.log ("You are a nice person!")
}