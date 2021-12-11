//even  n numbers
let n = 10;
 function even(i){
for (var i = 2; i <= n; i++) {
  if(i %2 == 0){
    console.log(i);
  }
}
}
even();
//even odd numbers
let l = 20;
function odd(i) {
  for (var i = 0; i<l; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  }
}
odd();
//nprime numbers
let j= 10;
function prime() {
  for (var i = 0; i <= j; i++) {
  if (j %i !== 0) {
    console.log(i);
  }
  }
}
prime();
//while using even
  let  m = 20;
  function evennum() {
    var i = 0;
    while (i <= m) {
      if (i % 2 == 0)
        console.log(i);
        i++;
  }
}
evennum();

// while using odd
let  k = 20;
function oddnum() {
  var i = 0;
  while (i <= k) {
    if (i % 2 == 1)
      console.log(i);
      i++;
}
}
oddnum();
