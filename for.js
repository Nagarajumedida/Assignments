//print first ten numbers
for (var i = 0; i <=10; i++){
  console.log(i);
}
//print 10 t0 0
for (var i = 10; i >=0; i--){
  console.log(i);
}
//Tables
 var table = 19;
for (var i = 1; i <= 10; i++) {
  console.log(table*i);
}
//1 to 20 Tables
for (var r = 0; r <= 20; r++) {
  var table = r;
  for (var i = 0; i <= 10; i++) {
    console.log(table+"*" +i+ "="+table*i);
  }
}
//fibanocis
var a = 0;
var b  = 1;
console.log(a);
console.log(b);
while (i <=20) {
  c =a + b;
  console.log(c);
  a = b;
  b = c;
  i++;
}
