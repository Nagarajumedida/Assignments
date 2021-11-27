//Write a function to print Hello world
function printHelloWorld() {          // 1 printHelloWorld function -> takes no arguments
    console.log("Hello world");        // 2 calls console log and hellowoRLD
}

//Write a function to print given parameter
function add(num19, num20) {            // 3 ADD function -> takes 2 arguments
    return num19 + num20;               // 4 SUM OF num19 & 20
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
function add(num1, num2) {         // 5 print add -> takes 2 arguments
    return num1 + num2;            // 6 SUM OF num1 & 2
}
let num1 = 10;                     // 7 num1 object takes 10
let num2 = 20;                     // 8 num2 object takes 20
console.log(add(num1,num2));       //calls add num1 & num2

//Write a function to Multiply 2 numbers
function multiple(num3,num4){       // 9 print mulitiple -> takes  2 arguments
  return num3*num4;                 // 10 product of num3 & num4
}
let num3 = 10;                      // 11 num3 object takes 10
let num4 = 20;                      //12  num4 object takes 20
console.log(multiple(num3,num4));   // 13 calls to product of num3 and num4

//Write a function to divide 2 numbers
function divide(num5,num6){        // 14 print divide -> takes 2 arguments
  return num5/num6;                // 15 dividing of num5 & num6
}
let num5 = 10;                     // 16 num5 onject takes 10
let num6 = 20;                     // 17 num6 objects takes 20
console.log(divide(num5,num6));    // 18 calls to divide num5 and 6

//Write a function to get reminder
function reminder(num7,num8){       // 19 print remindr -> takes 2 arguments
  return num7%num8;                 // 20 divide num7 num8 and takes reminder
}
let num7 = 40;                      // 21 num7 object takes 40
let num8 = 20;                      // 22 num8 object takes 20
console.log(reminder(num7,num8));    // 23 calls to reminder num7 num8

//Write a function to find the given number is positive
//Write a function to find the given number is negative
//Write a function to get the next immediate number using assignment operator
function immediatenumber(num9) {   // 24 print immediate number -> takes one argument
  return num9++                    // 25 return the immedidate number
}
let num9 = 22;                      // 26 object num9 takes 22
num9++;                             // 27 gives the increment operator to object
console.log(immediatenumber(num9));   // 28 calls the immediate number 9

//Write a function to get the next immediate number without using assignment operator
//Write a function to get the before immediate number using assignment operator
function lastnumber(num10) {       // 29 print lastnumber -> takes one argument
  return num10--;                  // 30 return the argument to call
}
let num10 = 22;                    //  31 object num10 takes 22
num10--;                           // 32 gives decremet operator to object
console.log(lastnumber(num10));  // 33 calls the lastnumber
//Write a function to get the before immediate number without using assignment operator
//Write a function to find the given 2 numbers are equal
//Write a function to find the given argument type
//Write a function to find greatest of 2 numbers
//Write a function to find greatest of 3 numbers

//Write a function to greet a given person
//Example Greeting for Sweety: Hi Hello Namaste, Welcome Sweety
function greet() {                              //34 print greet -> no argument takes
   return("Hi Hello Namaste, Welcome Sweety");  // 35 retrurn greet with hi hello namaste
 }
console.log(greet());                            // 36 calls the greet

//Write a function to print full name of a person, with given first and last names
//Example full name for first name: Nagaraju, last name: Medida - Full name: Medida Nagaraju
function fullname(person) {                  //37 print fullname -> one argument take
  return ("firstname" + "lastname");        // 38 retirn with this argument
}
const firstname = "Medida";                 // 39 object firstname takes medida
const lastname  = "Nagaraju";               // 40 object lastname takes as nagaraju
console.log(fullname.firstname + fullname.lastname); // 41 calls the fullname










/*function positive(number) {
  return number > 0;
}
let number = 29;
if number > 0;
if number <= 0;
 console.log(positive(number));*/
