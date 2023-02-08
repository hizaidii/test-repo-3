// First program ever! - Show Hello Geeks on console 

console.log('Hello Geeks!!');

console.log("hello")

console.log(2+4);

// Variables!!

// VAR type variable
var herName;

herName = "Samar";

console.log(herName)

var herName="Samar"; //you can also write it like this, AND you can redeclare the VAR variable

console.log(herName)

// LET type variable

let text; //creating or declaring a variable

text = "I'm sleepy...NOT" //assigning a value 
text = "will this latest text print?"

console.log(text)

// CONST variable

const number = 3; 

console.log(number)

// typeof function tells you the 'type of' a data stored in a variable
let userName = "Husain";
console.log(typeof userName)

// These are PRIMITIVE data types
//String
let userName = 'Husain'

//Number / integer
let age = 18;

// Boolean
let isProductInCart = false;

//Undefined
let kappi; //this is NOT the same as having null/blank value
console.log(kappi)

//Null
let noValue = null;

//Object - NON-PRIMITIVE data type
const userDetails = {name: "husain zaidi", age: 29, occupation: "ux designer"}

const arrayOfNumber = [1,2,3,4,5]

//CONCATENATION (however this is old way and not used often now)
let userName = "Husain";
let age = 29;
let message = "My name is " + userName + " and I am " + age + " years old."
console.log(message)

//TEMPLATE LITERAL and STRINGS (this is the new way to join things)
let userName = "Husain";
let age = 29;
let message = `My name is ${userName} and I am ${age} years old.
and this will register line breaks also`
console.log(message)

// ARITHMETIC operations
const x=12;
const y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //this is modulus. it's the remainder after a division
console.log(x ** 3) //to the power of - eg: CUBE here

// Arithmetic operations on numerical STRINGS - Javascript will automatically convert strings into numbers and perform maths on it, EXCEPT addition. It will just concatenate the text
const x='12';
const y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); 
console.log(x ** 3) 

// Arithmetic operations on alphabetical STRINGS - only addition works, everything else gives NaN (Not a Number)
const x='husain';
const y = " zaidi";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); 
console.log(x ** 3) 

//TYPE CONVERSION
// String to Number
const a = "3";
const b ="6";
console.log(number(a) + number(b));

//alternatively you can define new variable by converting like:
const c = number(a);
const d = number(b);
console.log(c + d)

// Number to String 
const e = 5;
const f = string(e)

//Boolean - defining strings or numbers as Boolean values 
const g = "hello"
const h = '';
const i = 9;
const j = 0;

console.log(boolean(g)); //this will be TRUE
console.log(boolean(h)); // FALSE
console.log(boolean(i)); // TRUE
console.log(boolean(j)); // FALSE