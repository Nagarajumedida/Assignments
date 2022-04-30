// string is a collection of chracters and collection of words
//strings are declared by single code('') or double code("")
var x = 100;
console.log(typeof x);
var x = '100';
console.log(typeof(x));
//string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//include spaces also
console.log(text.length);
//escape
 //var str = "string is a collection of chracters and collection of words"  // valid
 //var str1 = 'string is a collection of chracters and collection of words' // valid
 //var str2 = "string is a collection of chracters and collection of words' // not a valid
 var str3 = "string is a \"collection of chracters\"and collection of words"//valid this is escape
 console.log(str3);
var x = 29;
var y = 38;
var z= 56;
var w = x +y+z;
console.log(w);
// indexoff find the position of array
var raju = " welcome to strings hfyhh to"
console.log(raju.indexOf("to"));
console.log(raju.lastIndexOf("to"));
console.log(raju.search("to"));
//search method cannot doing particular position
console.log(raju.indexOf("to",10)); // print 26
console.log(raju.search("to",10));//print 9
// concat add 2 or more strings
var str = "welcome";
var str1 = "javascript"
var str2 = "veeraghattam"
console.log(str.concat(str2,str1,"nagaraju"));
//slice accept positivr amnd negative
console.log(raju.slice(5));//print remaing
console.log(raju.slice(5,10));// start end
console.log(raju.slice(-8));// revers
console.log(raju.slice(-10,-6));
//substring is cannot accept take negative values
console.log(raju.substring(5,10));
console.log(raju.substring(-8));// print tottal
//substr take 2 paramaters first is positiom 2nd length $$ cant take 2 negative values
console.log(raju.substr(5,10));
//replace
console.log(raju.replace("to","nagaraju"));
console.log(raju.replace(/HFYHH/i,"goodbye"));
//to upeer or lower
console.log(raju.toUpperCase());
console.log(raju.toLowerCase());
//trim string left side or right side spaces trimming
var raju = "                   sweeety           "
console.log(raju);
console.log(raju.trim());
//split we can conert string into array
var raju = " welcome to strings hfyhh to"
console.log(raju.split());
var arr = ["hai","hello","what","next"]
console.log(typeof arr);
var x = arr.toString();//convert array to string
console.log(typeof x);
//match
