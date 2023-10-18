let name = "Ishaq";
let score = 50;

console.log("My name is " + name + " my score is " + score); // not Recommended methode / unprofessional
console.log(`My name is ${name} my score is ${score}`); // Modren and easy to read method
console.log(`My name is ${name.toUpperCase()} my score is ${score}`); // We can use method in this way

// Now using new Keyword
 let myName = new String('Ishaq');
 console.log(myName); // See in console of browser you will see this will be represt as Object.
 // We can use Prototype method when we write string with "new" keyword.

 console.log(myName[0]); // In this way we can access every keyword by number;
 console.log(myName.__proto__); // This will tell that its "Object";
 console.log(myName.charAt(4)); // We can find on what number which char is;

 // ======***** We can see all method in Prototypes of browser console ****=====

let newName = new String('Ishaq');
// console.log(newName.charAt(4)); // To find which char is at a specific num
console.log(newName.indexOf('a')); // To find which number of char at which it is displaying

// =========== Slice Method ============
console.log(newName.slice(0, 4));
console.log(newName.slice(-4, 4)); // We cannot give -value if we give it take string from 0

// ============ Trim Method ==========
let mySecondName = new String("   Muhammad  ");
console.log(mySecondName);
console.log(mySecondName.trim()); // This will remove extra spaces

// =========== Replace Method =============
let url = "https//:www.wpishaq.com%20protfolio";
console.log(url.replace('%20', '-')); // Replace %20 with "-"

// =========== include Method ============
console.log(url.includes('wpishaq')); // True
// Check is this keyword is in variable or not

// =========== Split Method ============
console.log(mySecondName.split('a')); // This will split string when "a" comes in

// =========== Further String Methods ============
let secondScore = new String("   Twenty   ","Fifty","Fourty","Two");
// let score = 30;
console.log(secondScore);
// console.log(secondScore.blink());
// console.log(secondScore.at(4));
// console.log(secondScore.endsWith('o'));
// console.log(secondScore.startsWith('T'));
// console.log(secondScore.replace('w','eee'));