//An array can hold many values under a single name, and you can access the values by referring to an index number.
// new changes
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);
console.log(cars[0]);// print first of an array
const names = ["raju","sweety","nagaraju"];
console.log(names);
const vechiles = new Array("Saab", "Volvo", "BMW");
console.log(vechiles[0]);
const fruits = ["Banana", "Orange", "Apple", "Mango"]; //The length property of an array returns the length of an array
fruits.push("lemon");// adding lemon to fruits array
fruits[10]="lussie"// printed empty then print battayi
console.log(fruits);
console.log(fruits.length);//(the number of array elements).
console.log(fruits.length-1);//decrease length of ana array
console.log(fruits[fruits.length - 1]); //prints last of an array
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);     // Will return 0
console.log(person[0]);         // Will return undefined
let type = typeof fruits;
console.log(typeof fruits); //define what this is object or number else....
console.log(fruits.toString());//convert array to string
console.log(fruits.join(" * "));// join array to string separtor
const players = ["sachin","kohili","shewag","dhoni","bhuvi"]
console.log(players.pop());// removes last one
console.log(players);//now printed 4players
players.push("bhuvi"); // adding bhuvi to players list
console.log(players); //now printed 5 players
console.log(players.shift());//removes first one of players
console.log(players);
console.log(players.unshift("sachin"));// add sachin to players list in 0popsition/first place print length
console.log(players);
players[0] = "dravid";//replacing dravid to sachin
console.log(players);
players[players.length] = "yuvi"
console.log(players); //add yuvi to plaers list
console.log(players.length); //now players 6 numbers
delete players[0]; // delete first player name
console.log(players);
const cricket = fruits.concat(players); // concat / merging the players and fruits
console.log(cricket);
const bench = players.concat("rohit");
console.log(bench); // here rohit added to bench players
console.log(players);
console.log(bench);
bench.splice(2, 0, "rahane", "pujara");// 2 tells place where the new players added
console.log(bench);// 0 tells how many players removes
const coach = bench.slice(3);
console.log(coach); // remove 3 players of bench and remaining players r going to coach list bench players not change
console.log(bench);
const captain = bench.slice(1,4);// from where to upto
console.log(captain);
console.log(bench);
players.toString();
console.log(players);
captain.toString();
console.log(captain);
players.sort();// arranged in alphabetical order
console.log(players);
players.reverse();
console.log(players);
fruits.sort();
console.log(fruits);
fruits.reverse();//alphabetical in revrerse order
console.log(fruits);
const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);
