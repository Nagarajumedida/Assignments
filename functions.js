//Write a function to print Hello world
function printHelloWorld() {          // 1 printHelloWorld function -> takes no arguments
    console.log("Hello world");        // 53 calls console log and hellowoRLD
}

//Write a function to print given parameter
function add(num19, num20) {            // 2 ADD function -> takes 2 arguments
    return num19 + num20;               // 24  SUM OF num19 & 20
}

/*Testing
console.log("2 + 3 should be 5 and it is ", add(2,3));
console.log("-4 + 4321 should be 4317 and it is ", add(-4,4321));
console.log("-4 + -5 should be -9 and it is ", add(-4,-5));

/*
    Follow the above examples. Write functions for each given requirement.
    MUST have appropriate names for the functions, parameters and variables
    Write atleast 2 test scenarios
*/

//Write a function to add 2 numbers
function add(num1, num2) {         // 3 print add -> takes 2 arguments
    return num1 + num2;            //  25  SUM OF num1 & 2
}
let num1 = 10;                     // 35 num1 object takes 10
let num2 = 20;                     // 36 num2 object takes 20
console.log(add(num1,num2));       // 54 calls add num1 & num2

//Write a function to Multiply 2 numbers
function multiple(num3,num4){       // 4 print mulitiple -> takes  2 arguments
  return num3*num4;                 //  26 product of num3 & num4
}
let num3 = 10;                      // 37 num3 object takes 10
let num4 = 20;                      // 38 num4 object takes 20
console.log(multiple(num3,num4));   // 55 calls to product of num3 and num4

//Write a function to divide 2 numbers
function divide(num5,num6){        // 5 print divide -> takes 2 arguments
  return num5/num6;                //   27 dividing of num5 & num6
}
let num5 = 10;                     // 39 num5 onject takes 10
let num6 = 20;                     //  num6 objects takes 20
console.log(divide(num5,num6));    // 56 calls to divide num5 and 6

//Write a function to get reminder
function reminder(num7,num8){       // 7 print remindr -> takes 2 arguments
  return num7%num8;                 //  28 divide num7 num8 and takes reminder
}
let num7 = 40;                      // 40 num7 object takes 40
let num8 = 20;                      // 41 num8 object takes 20
console.log(reminder(num7,num8));    // 57 calls to reminder num7 num8

//Write a function to find the given number is positive
function positive(num11) {         // 8 print positive number
  if (num11 > 0){                   //  15 condition takes true or false
    return true;    // 29 if true functioning stopes / no jumps into 60
    console.log("number11 is positive"); //58 calls number is positive
  }
  else{                           //  16 condition takes
  return false;                   //   // 30 false stopping function
  console.log("number11 is negative"); // 59 calls number is negative

  }
}
let num11 = 30;         // 42 object takes
console.log(positive(num11));  //60 calls the function
//Write a function to find the given number is negative
function negative(num12) {  //9 print negative
  if (num12 < 0){           // 17 condition takes
  return true;              // 31 if true functioning stopes / no jumps into 75
    console.log("number12 is negative"); // 61 calls number is negative

  }
  else{                     // 18 condition takes
    return false;           //32 false stopping function
    console.log("number12 is positive"); // 62 calls is positive

  }
}
let num12 = -299;  //43 object takes
console.log(negative(num12));
//Write a function to get the next immediate number using assignment operator
function immediatenumber(num9) {   // 10 print immediate number -> takes one argument
  return num9++                    //  return the immedidate number
}
let num9 = 22;                      //  44 object num9 takes 22
num9++;                             //  51 gives the increment operator to object
console.log(immediatenumber(num9));   // 63 calls the immediate number 9

//Write a function to get the next immediate number without using assignment operator
//Write a function to get the before immediate number using assignment operator
function lastnumber(num10) {       // 11 print lastnumber -> takes one argument
  return num10--;                  //  return the argument to call
}
let num10 = 22;                    //   45  object num10 takes 22
num10--;                           // 52 gives decremet operator to object
console.log(lastnumber(num10));  //  64 calls the lastnumber
//Write a function to get the before immediate number without using assignment operator
//Write a function to find the given 2 numbers are equal

//Write a function to find the given argument type
//Write a function to find greatest of 2 numbers
//Write a function to find greatest of 3 numbers
function biggest(a,b,c) {  //12 print biggest number
  if (a > b) {              // 19 condition takes
    if (a > c) {       // 20 condition takes
      console.log("a"); // 65 calls a
    }
    else {           //21 condition takes
      console.log("c"); //66 calls c
    }
  }
  else if (b > c){    //22 condition takes
    console.log("b"); //67 calls b
  }
  else {       // 23 condition takes
    console.log("c"); // 68 calls c
  }
}
let a = 70;  // 46 object takes
let b  = 50; // 47 object takes
let c = 60;  //48 object takes
console.log (biggest(a,b,c)); // 69 cals the function functionName



//Write a function to greet a given person
//Example Greeting for Sweety: Hi Hello Namaste, Welcome Sweety
function greet() {                              //13 print greet -> no argument takes
   return("Hi Hello Namaste, Welcome Sweety");  //  33 retrurn greet with hi hello namaste
 }
console.log(greet());                            //  70 calls the greet

//Write a function to print full name of a person, with given first and last names
//Example full name for first name: Nagaraju, last name: Medida - Full name: Medida Nagaraju
function fullname(person) {                  //14 print fullname -> one argument take
  return ("firstname" + "lastname");        // 34 retirn with this argument
}
const firstname = "Medida";                 // 49 object firstname takes medida
const lastname  = "Nagaraju";               // 50 object lastname takes as nagaraju
console.log(fullname.firstname + fullname.lastname); // 71 calls the fullname










/*function positive(number) {
  return number > 0;
}
let number = 29;
if number > 0;
if number <= 0;
 console.log(positive(number));*/
