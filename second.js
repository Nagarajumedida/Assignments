// Write a function to tell wether given number is even or note
function even(num1) {
  if (num1%2 === 0) {
    console.log(true);
    return " num1 is a even number"
  }
  else {
    console.log(false);
    return " num1 is not a even number"
  }
}
console.log(even(4));
console.log(even(5));
// Write a function to tell wether given number is odd or not
function odd(num1) {
  if (num1%2 != 0) {
    console.log(true);
    return " num1 is a odd number"
  }
  else {
    console.log(false);
    return " num1 is not a odd number"
  }
}
console.log(odd(5));
console.log(odd(6));

// Write a function to tell wether given number is prime number or not
function prime(num1) {
  if (num1 === 2) {
    console.log(true);
    return " num1 is a prime number"
  }
}
console.log(prime(2));
