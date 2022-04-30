//array illetration methods
//forEach
const numbers = [45, 4, 9, 16, 25]; // x finds values
/*  numbers.forEach(function(x,y,z) { //y finds position vvalues
    console.log(x + "=" + y)        //z prints arrays how many arrays are there
    console.log(z);
  });
//map
// it will created new arrays
var array = [10,12,26,46,57,83,97,88]
var newArray =array.map(function(x,y,z) {
  return x + 10;
  //console.log(x + "=" + y);
});
console.log(newArray);
// filter filetring the values
var array = [10,12,26,46,57,83,97,88]
 var arr = array.filter(function (x,y,z) {
  return x >= 20;
});
console.log(arr);
//reducing method having parameters
var array = [10,12,26,46,57,83,97,88];
 var sum = array.reduce(function (sum,x,y,z) {
  return sum*x;
})
console.log(sum);
//every give true or false
var array = [10,12,26,46,57,83,97,88];
var below = array.every(function(x,y,z) {
  return x>=10;
})
console.log(below);
//some method true or false
var array = [10,12,26,46,57,83,97,88];
var below = array.some(function(x,y,z) {
  return x>=10;
})
console.log(below);
//indexOf give the value of the position // search for a value
var array = [10,12,26,46,57,10,10,88,20,30,10];
console.log(array.indexOf(10));
console.log(array.indexOf(100));
//lastindex of give the value from last
var array = [10,12,26,46,57,10,10,88,20,30,10];
console.log(array.lastIndexOf(10));
array.forEach(function(x,y) {
  if (x == 10) {
    console.log(y+"="+x);
  }
}); */
function even(n) {
for (var i = 1 ; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
}
console.log(even(100));
