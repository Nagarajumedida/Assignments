/*
   solve every problem using while and for loops
*/
// Print first n even numbers
/*function even(num1) {
for (var i = 2; i <= num1; i++) {
  if(num1%i == 0){
    return 'even number'
  }
  }
}*/
let n = 20;
for (var i = 0; i <= n; i++) {
  if(i%2 == 0){
  console.log(i);
}
}
// Print first n odd numbers
let m = 10;
for (var i = 0; i <= m; i++) {
  if(i%2 !== 0){
  console.log(i);
}
}
// Print first n prime numbers
let a = 50;
for (var i = 2; i <= a; i++) {
  if (a % i !==0 ) {
console.log(i);
  }
}
// Print even numbers till the given number
for (var i = 0; i <= 10; i++) {
  if (i%2 == 0) {
    console.log(i);
  }
}


// Print odd numbers till the given number
for (var i = 1; i <= 10; i++) {
  if (i%2 !==  0) {
    console.log(i);
  }
}
// Print prime numbers till the given number
for (var i = 2; i <= 50; i++) {
  if ( (i%2!==0, i%3!==0 ,i%5!==0,i%7!==0)){
console.log(i);
  }
}
