let randomNumber = 400;
// console.log(randomNumber);

// =========== Number Using "new Keyword" =========
let myAccountBalance = new Number(500);
// console.log(myAccountBalance);

// =========== Browser give us some methods in Prototypes when we use "new" keyword for declearation a Number or String ==============

// =========== Methods from Prototypes ===========
// console.log(myAccountBalance.toString());
// console.log(myAccountBalance.toFixed(2)); // 2 will give two values after decimal point

// =========== Three Different Usecase of "toPrecision() method"
let mySecondAccountBalance = 500.51;
// console.log(mySecondAccountBalance.toPrecision(4)); // output = 500.5
// console.log(mySecondAccountBalance.toPrecision(3)); // output = 501
// console.log(mySecondAccountBalance.toPrecision(2)); // output = 5.0e+2

// ============******* Notes *******===========
/* 
i) If Number is bigger after decimal point it round off based on bigger-then or less-than .50 
ii ) If precision number is equal to numbers before decimal points like in =501 output will be 1 add if greater than .50
iii) If precision number is smaller but number before decimal points are bigger than output will be inform of "exponential number"
 */

let mySalaryInThousands = 5000000;
// console.log(mySalaryInThousands.toLocaleString()); // insert commas like =
// 5,000,000 

// &&&&&&&&&&&============= Math Methods ============&&&&&&&&&&&&&&&&

// By Writing "Math" in console we can see methods in Math function
let numberForMath = 4.7;
// console.log(Math.round(numberForMath));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.8)); // Give upper value even .1 is greater
// console.log(Math.floor(4.9)); // Give lower value even .9 is in front of real number
// console.log(Math.random()); // Give value b/w 0 and 1
// console.log(Math.random()*10); // multifly value b/w 0 and 1 with 10
// console.log(Math.floor(Math.random()*10)); // multifly value b/w 0 and 1 with 10
// console.log(Math.ceil(Math.random()*10)); // multifly value b/w 0 and 1 with 10s


// =================^^^^^^^^^^^^^^ V.V.V Important line ^^^^^^^^^^^^^==================
let min = 20;
let max = 40;
console.log(Math.floor(Math.random() * (max - min + 1) + min));

// This formula will give random value between min and max 

