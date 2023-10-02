// let myScore = 33;
// let myScore = "33";
// let myScore = "33abc";
let myScore = undefined;
// let myScore = null;
// let myScore = true;
// let myScore = false;
// let myScore = 0;
// let myScore = 1;
// let myScore = "ishaq"; // convert into Boolean


// ===========**** Checking datatype *** ===============
// console.log(typeof myScore + " ==== This is before convertion datatype check");

// =========***** Converting into Number, Boolean and String *****============ 
let myScoreintoNumber= Number(myScore); // Method To Convert any data into Number form
let myScoreintoBoolean= Boolean(myScore); // Method To Convert any data into Boolean form
let myScoreintoString= String(myScore); // Method To Convert any data into Boolean form


// =========***** Checking After Convertion *****============ 
console.log(myScoreintoNumber + " ==== This is Number Con"); 
console.log(myScoreintoBoolean + " ==== This is Boolean Con");
console.log(myScoreintoString + " ==== This is String Con");




// ==============**** datatype output ****================
// 33 => number
// "33" => String
// "33abc" => String
// undefined => undefined
// null => Object

// ==============**** Datatype Conversation into Number output ****================
// 33 => number
// "33" => number
// "33abc" => number
// undefined => NaN
// null => 0
// true => 1
// false => 0
// ishaq => NaN

// ==============**** Datatype Conversation into Boolean output ****================
// 33 => number
// "33" => number
// "33abc" => number
// undefined => boolean
// null => false
// true => true
// false => false
// 1 => true
// 0 => false
// "ishaq" => true




// ==============**** After Conversation output ****================


