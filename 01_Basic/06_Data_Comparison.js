// ============****** Make Sure that when we are comparing two numbers the datatype must be same if you don't do that the result will be not similar as you predicited *********====================.

// === Example ===
// console.log(1 > "2"); 
// One is number and other is string but stil js convert and answer in true or false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true [>, <, >=, <=] : These signs convert null to Number

// equality == and comparison [=>, <= ,>, <] work differently
// [>, <, >=, <=] : These signs convert null to Number and treat it as 0

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0); // false

//===
console.log("2" == 2); //true
console.log("2" === 2); //false

// Avoid these typeof comparision to write clean, understandable, less confusing and professional code