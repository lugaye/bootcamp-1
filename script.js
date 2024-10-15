var name; // function scoped
let lastName; // block scoped
const PI = 3.14; 

//Data types
// 
// boolean - true/false
// string - characters
// Number - Integers + DEcimal
// Null - absence value
// Undefined - declared but not assigned a value
// Array - collection of items
// Object - represented as key value pairs

let isLoggedIn = true;
let course = 'Web Development'

let firstName = null;
let age;
let cars = ['toyota', 'nissan', 100, 'mazda']
let person = { name: 'Eddy', email : 'eddy@powerlearnprojectafrica.org' }

//operators
// Arithmetic => +, -, /, *, %
// Comparison ==, ===, !=, !==, <, >, <=, >= 
// Logical && , || , !

//Conditional
// if statement
var country = 'Kenya'
var occupation = 'Student'

if(country == 'Kenya' || occupation == 'Instructor'){
    //statements
    console.log('Welcome Instructor');
}

//if...else
if(country == 'Kenya' && occupation == 'Instructor'){
    console.log('Welcome Instructor');
} else {
    console.log('Welcome Student');
}

// if...else if...else 
let marks = 49;

if(marks >= 80){
    console.log('Excellent')
} else if(marks >= 70 && marks < 80) {
    console.log('Good')
} else if(marks >= 50 && marks < 70) {
    console.log('Average')
} else {
    console.log('Poor performance')
}

let Month = 'June'

switch (Month) {
    case 'January' : 
        console.log('First month')
        break;
    case 'June' :
        console.log('Mid-month')
        break;
    default:
        console.log('Another month!')
}

//Loops
for(var i = 0; i < 10; i++){
    console.log(i);
}

// while loop and the do while loop

// functions

function greet(name){
    return `Hello, ${name}`;
}

console.log(greet('John'))

const divide  = function(a, b){
    return a / b;
}

console.log(divide(10, 2))

const multiply  = (a, b) => {
    return a * b;
}