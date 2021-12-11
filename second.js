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



function primes(num1) {   //takes parameter
  for (var i = 2; i < num1; i++) {   //  I is assigning value 2, condition is true or false when the condition is true go to inc
    if (num1 % i === 0) {           //  ichina number I tho divide cheyyeaga 0 vaste aadi prime kadu
      return false
    }
  }
  return true
}
console.log(primes(16));  //given number 17
/*-> first takes i = 2, condition chustundi true or false ani true aaite increment ki veltundi I= 2++ then I = 3
-> ippudu if condition ki veltundi 17 % 3 reminder 2 so prime number
-> malli i value 3 teesukoni condition chusi increment chesi i = 4 malli if condition 17/4 reminder 1 so prime
-> ala ichina number vachina varaku okko value inc chesukoni condition chustundi icchina number vachelopu if condition
    0 ki equal  aaite prime kadu
-> aade ichine number 0 ki equal kakapote aadi prime number
console.log(primes(24));*/
/*   if (i < num1) {
  } else if(num1%i === 0){
        return true;
      } else {
         return false;
     }
   }
console.log(ps(20));




 /*for loops take 3 prameters initiialization,condition,inc/dec
     initiialization assigning value then given condition is true or false
             if condition is true take the inc/dec then calls the function when the condition is going false*/

function primenumber(num1) {
  for (var i = 2; i < num1; i++) {
    if (num1%i !== 0) {
return true;
} else {
return  false
}
  }
}
console.log(primenumber(18
