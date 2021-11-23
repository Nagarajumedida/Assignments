//Write a function to print Hello world
function printHelloWorld() {
    console.log("Hello world");
}

//Write a function to print given parameter
function add(num1, num2) {
    return num1 + num2;
}

//Testing
console.log("2 + 3 should be 5 and it is ", add(2,3));
console.log("-4 + 4321 should be 4317 and it is ", add(-4,4321));
console.log("-4 + -5 should be -9 and it is ", add(-4,-5));

/*
    Follow the above examples. Write functions for each given requirement.
    MUST have appropriate names for the functions, parameters and variables
    Write atleast 2 test scenarios
*/

//Write a function to add 2 numbers
//Write a function to Multiply 2 numbers
//Write a function to divide 2 numbers
//Write a function to get reminder
//Write a function to find the given number is positive
//Write a function to find the given number is negative
//Write a function to get the next immediate number using assignment operator
//Write a function to get the next immediate number without using assignment operator
//Write a function to get the before immediate number using assignment operator
//Write a function to get the before immediate number without using assignment operator
//Write a function to find the given 2 numbers are equal
//Write a function to find the given argument type
//Write a function to find greatest of 2 numbers
//Write a function to find greatest of 3 numbers

//Write a function to greet a given person
//Example Greeting for Sweety: Hi Hello Namaste, Welcome Sweety
//Write a function to print full name of a person, with given first and last names
//Example full name for first name: Nagaraju, last name: Medida - Full name: Medida Nagaraju
function add(num1, num2) {
    return num1 + num2;
}
let num1 = 10;
let num2 = 20;
console.log(add(num1,num2));

function multiple(num3,num4){
  return num1*num2;
}
let num3 = 10;
let num4 = 20;
console.log(multiple(num3,num4));

function divide(num5,num6){
  return num5/num6;
}
let num5 = 10;
let num6 = 20;
console.log(divide(num5,num6));

function reminder(num7,num8){
  return num7%num8;
}
let num7 = 40;
let num8 = 20;
console.log(reminder(num7,num8));

function greet() {
   return("Hi Hello Namaste, Welcome Sweety");
 }
console.log(greet());

function fullname(person) {
  return p ("firstname" + "lastname");
}
const firstname = "Medida";
const lastname  = "Nagaraju";
console.log(fullname.firstname + fullname.lastname);

function immediatenumber(num9) {
  return num9++
}
let num9 = 22;
num9++;
console.log(immediatenumber(num9));

function lastnumber(num10) {
  return num10--;
}
let num10 = 22;
num10--;
console.log(immediatenumber(num10));

/*function positive(number) {
  return number > 0;
}
let number = 29;
if number > 0;
if number <= 0;
 console.log(positive(number));*/
