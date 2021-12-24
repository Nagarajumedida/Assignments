//primesfu
function primes(num){
for (var i = 2; i < num;) {
if (num%i !== 0 ){ return  num +  "num is a prime"
}else{
  return  num +"numb is not a prime"
}
console.log(i);
}
i++;
}
console.log(primes(37));
console.log(primes(20));


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
var x =1;
function factorial(n) {
  for (var i = 0; i <= n; n--) {
    x = x * n
  console.log(x);
  }
}
console.log(factorial(6));
