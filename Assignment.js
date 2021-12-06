//Write a function to print Hello world
function printHelloWorld() {
    console.log("Hello world");
}

//Write a function to print given parameter
function add(num1, num2) {
    return num1 + num2;
}

//Testing
console.log("2 + 3 should be 5 and it is ", add(2, 3));
console.log("-4 + 4321 should be 4317 and it is ", add(-4, 4321));
console.log("-4 + -5 should be -9 and it is ", add(-4, -5));

/*
    Follow the above examples. Write functions for each given requirement.
    MUST have appropriate names for the functions, parameters and variables
    Write atleast 2 test scenarios
*/

//Write a function to add 2 numbers
function add(num1, num2) {
    console.log(num1 + num2);
}

add(5, 10);

function add(num1, num2) {
    console.log(num1 + num2);
}

add(-4, 4321);

//Write a function to Multiply 2 numbers
function multiple(num1, num2) {
    console.log(num1 * num2);
}

multiple(50, 10);

function multiple(num1, num2) {
    console.log(num1 * num2);
}

multiple(-5, -100);

//Write a function to divide 2 numbers
function divide(num1, num2) {
    console.log(num1 / num2);
}

divide(30.5, 0.5);

function divide(num1, num2) {
    console.log(num1 / num2);
}

divide(-1000, 0.1);


//Write a function to get reminder
function reminder(num1, num2) {
    console.log(num1 % num2);
}

reminder(10000010, 50);

function reminder(num1, num2) {
    console.log(num1 % num2);
}

reminder(1238778.77, 3839.77);


//Write a function to find the given number is positive
function positive(num1) {
    if (num1 > 0) {
        return (true + " 5 number  is positive");
    } else {
        return (false + " - 29 number is negative");
    }
}

console.log(positive(5));
console.log(positive(-29));

//Write a function to find the given number is negative
function negative(num1) {
    if (num1 < 0) {
        return (true + " -288 number  is negative");
    } else {
        return (false + " 5 number is positive");
    }
}

console.log(negative(5));
console.log(negative(-288));

//Write a function to get the next immediate number using assignment operator
function increase(num1) {
    return ++num1;
}

console.log(increase(99));

/*function increase(num1) {
return  num1++;
}
console.log(increase(99));*/

//Write a function to get the next immediate number without using assignment operator

function increase(num1) {
    return ++num1;
}

console.log(increase(99));


//Write a function to get the before immediate number using assignment operator
function decrease(num1) {
    return --num1;
}

console.log(decrease(100));

/*function decrease(num1) {
  return num1--;
}
console.log(decrease(100));*/

//Write a function to get the before immediate number without using assignment operator
//Write a function to find the given 2 numbers are equal
function equal(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

console.log(equal(2, 2));
console.log(equal(1, 2));
//Write a function to find the given argument type
//Write a function to find greatest of 2 numbers
function greatest(num1, num2) {
    if (num1 < num2) {
        return "num2 is greatest";
    } else {
        return "num1 is greatest";
    }
}

console.log(greatest(10, 20));

//Write a function to find greatest of 3 numbers
function greatestof3(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 < num3) {
            console.log("num1");
        }
    } else if (num2 > num3) {

        console.log("num2");
    } else {
        console.log("num3");
    }
    return;
}

let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(greatestof3(num1, num2, num3));

//Write a function to greet a given person
//Example Greeting for Sweety: Hi Hello Namaste, Welcome Sweety
function greet(sweety) {
    return sweety;
}

console.log(greet("hi hello namaste,welcome sweety"));
//Write a function to print full name of a person, with given first and last names
//Example full name for first name: Nagaraju, last name: Medida - Full name: Medida Nagaraju
function fullname(firstname, lastname) {
    return (firstname, lastname);
}

console.log(fullname("nagaraju", "medida"));
