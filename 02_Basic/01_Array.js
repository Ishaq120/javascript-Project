// In this lesson I have to learn  
// i) which method return which datatype after excuation
// ii) Which method change origional array which not 


let Arr = ["i","s",5,6,8,9,true,null]; // 1st way of declaring Array
let arryUsingNew = new Array(1,2,3); // 2nd way of declaring Array
// console.log(Arr[5]);
// console.log(arryUsingNew);

// You must have to read what is 
// i) Shallow Copy
// ii) Deep copy
// Array create shallow copy mean when we change any value it will change in origion or refrence array.

// ========^^^^^^^^^^^ Methods of Array ^^^^^^^^^^^==========
const arryForMethod = ["Ishaq", "Ali", "Shahzaib", "Haq"]
// console.log(arryForMethod.length);

// =====***** [Pop, shift] *****=====
// console.log(arryForMethod.pop());
// console.log(arryForMethod.shift()); 

// =====***** [Push, unshift] *****=====
// console.log(arryForMethod.push("Hassnain"));
// console.log(arryForMethod.unshift("Hassnain"));

// =====***** [Slice, splice] *****=====
// console.log(arryForMethod.slice(0, -1));
// console.log(arryForMethod.splice(0, 2,));
// console.log(arryForMethod.splice(0, 2,"Ishaq")); // We can insert new item at deleted element.
// console.log(arryForMethod);


// =====***** [include, indexOf, join] *****=====
// console.log(arryForMethod.includes("Ishaq"));
// console.log(arryForMethod.indexOf("Ishaq"));
console.log(arryForMethod.join()); // Join and return "Array datatype"


const marvel_heros = ["spiderman","ironman","batman"];
const dc_heros = ["flash", "superman","batman"];

marvel_heros.concat(dc_heros);
console.log(marvel_heros);