// These concepts will be helpfull when we write "node.js" and "React.js"

const marvel_heros = ["spiderman","ironman","batman"];
const dc_heros = ["flash", "superman","batman"];

// marvel_heros.push(dc_heros);
marvel_heros.concat(dc_heros);
// console.log(marvel_heros); 

// output = [ 'spiderman', 'ironman', 'batman', [ 'flash', 'superman', 'batman' ] ]

// =========== dc_heros will be pushed as single element mean 4th element of an array =======
// ^^^^^^ To Access element of "pushed dc_heros"^^^^^^
// console.log(marvel_heros[3][0]); 

const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
 // output = [ 'spiderman', 'ironman', 'batman', 'flash', 'superman', 'batman' ]
//  all  array elements become one Array
const new_heros = [...dc_heros, ...marvel_heros]; // ...= these are called spread operator
// console.log(new_heros);

const another_array = [1,2,4,[5,6],8,[23,24,[41,42]]];
const flat_array = another_array.flat(Infinity);
// console.log(flat_array);

// ======= Converting string into Array =======
// console.log(Array.isArray("Ishaq")); // Check Array or Not
// console.log(Array.from("Ishaq")); // Convert String into Array
// console.log(Array.from({name: "Ishaq"})); // Convert Object into Array

// =========== If you don't mentioned wether convert keys into object or values into object it will return empty object 

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3)); // convery all element into a new Array and retrun a new Array