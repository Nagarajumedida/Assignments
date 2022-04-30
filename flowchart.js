//primesfu
// function primes(num){
// for (var i = 2; i < num;i++) {
// if (num%i == 0 ){
//   return  num+  "num is not a prime"
// }
// else{
//   return  num +"numb is  a prime"
// }
// console.log(i);
// }
// }

function prime(j) {
  for (var i = 2; i < j; i++) {
  if (j % i === 0) {return " not a prime";
}
else{
  return j + "is prime";
}
}
  console.log(i);
}
console.log(prime(37));
console.log(prime(37));
console.log(prime(20));
console.log(prime(25));

// function isprime(input) {
//   for (var i = 0; input > i;) {
//     if(input > i){
//       console.log(i);
//     } else{
//       i++;
//   }     
// }
// }
// console.log(isprime(39));
//factorial
// var fact = 1;
// function factorial(n) {
//   for (var i = 0; i <= n,i++; ) {
//     fact= fact  * i
//   }
// }
// console.log(factorial(6));
// var x =1;
function factorial(n) {
  for (var i = 0; i <= n; n--) {
    x = x * n
  console.log(x);
  }
}
console.log(factorial(4));
