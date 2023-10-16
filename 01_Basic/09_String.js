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