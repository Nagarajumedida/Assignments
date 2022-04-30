//prime
function isprime(n) {
  for (var i = 2; i < n; i++) {
    if (n%i === 0) {
      return  n + " is not a prime"
    }
  }
  return  n + "is a prime"
  n++;
}
console.log(isprime(23));
console.log(isprime(25));

//factorial
var x = 1;
function factorial(n) {
  if (x == 0) {
    return 1;
  }
  for (var i = 0; i <= n; n--) {
    x = x * n
    console.log(x);
  }
}
console.log(factorial(6));
//fibanocci
function fib(input) {
  let lastbut = 0; //last but
  let last = 1;// z
  let cureent ;
  for (var index = 2; index < input;index++) {
    current = lastbut + last;
    console.log(current);
   lastbut = last;
  last = current;
  }
}
console.log(fib(10));
//n prime numbers
function prime() {
  for (var i = 2; i <=20; i++) {
    for (var j = 2; j < i; j++) {
    if (i % j ==  0){
      break;
    }
}
    if(i == j){
      console.log(i);
    }
  }
}
console.log(prime());
