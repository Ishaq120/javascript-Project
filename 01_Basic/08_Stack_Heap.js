/* There are two types of memories in JS 
1) Stack Memory (Premitive)  => String, Number, Boolean,undefined, null, symbols, BigInt
2) Heap Memory  (Non-Premitive) => Array, Objects, Function
 When we store any Premitive value in a variable it goes in Stack Memory 
 When we store any Non-Premitive value in a variable it goes in Heap Memory 
*/
const myName = "Ishaq";
let mySecondName = myName;
// console.log(mySecondName);

// Now i change the value of mySecondName Variable
mySecondName = "Muhammad";
console.log(mySecondName);

// ===============******************** Question *************=======================
// Question: But "mySecondName" was equal to "myName" variable so does the value of myName will change?
console.log(myName); // Ouput => Ishaq
// Ans: No because will get copy of variable if we change anything the change will happen in copy not origional value 
// [We discuss in previous video that =========== we get copy of "Premitive datatype"]

let userOne = {
    name : "Ishaq",
    roll_number: 44,
    id : "ishaq@abc.com"
}

let userTwo = userOne;
userTwo.name = "Waqas";
console.log(userOne);
// [We discuss in previous video that =========== we get orignal refrence of "Non-Premitive datatype" so orignal variable value is also changed]

// visit the link for concept 
// https://excalidraw.com/#json=ilEGojk2w3MRLKjJ_IpE5,b6aRMIF_w4bcvAnpIQU8AA