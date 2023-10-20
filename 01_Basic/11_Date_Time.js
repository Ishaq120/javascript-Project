// We Will read about Date and Time
let myDate = new Date();
// console.log(myDate); // output = 2023-10-19T19:55:54.395Z
// console.log(myDate.toString()); // output = Fri Oct 20 2023 00:55:54 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toISOString());// output = 2023-10-19T19:55:54.395Z
// console.log(myDate.toLocaleString());// output = 10/20/2023, 12:55:54 AM
// console.log(myDate.toLocaleDateString()); // output = 10/20/2023



// // =======%%%% Important for Interview %%%%%=========
// console.log(typeof myDate)// Object


// ======^^^^^ To Print manual Date ^^^^^========
let myCreatedDate = new Date(2023,0,20); // Month in js start form 0 = Jan
let myDateWithTime = new Date(2023,9,20,5,33); // Now 5 and 33 are hour and minutes
// console.log(myCreatedDate.toDateString());
// console.log(myDateWithTime.toLocaleString());

// ======= Manual Date and Time Formate Setting =======
let manualDateFormat = new Date("2023-02-15");// In String Month Start from 1 = jan
// console.log(manualDateFormat.toLocaleString());// output = 2/15/2023, 5:00:00 AM
let manualDateFormat2 = new Date("05-15-2023"); 
// console.log(manualDateFormat2.toString());// output = Mon May 15 2023
 

// =======****** Time Stamps in JS ********==========
let timeNow = Date.now()
// console.log(timeNow); // Time in milliseconds from 1970
// console.log(manualDateFormat.getTime()); // Time from the date you give to now in milliseconds
// console.log(Date.now()/1000); // This will give values in decimal
// console.log(Math.floor(Date.now()/1000)); // This will skip decimal point
// console.log(Math.round(Date.now()/1000)); // We can use floor or round method to skip decimal
// ======= Number is decreased after "/1000" now we can compare them easily =======

// =======^^^^^^^^ When you want to customized Date at your own fromat ^^^^=======
let newDate = myDate.toLocaleString('default',{
    day:"2-digit",
    // month:"long",
    year:"numeric",
    weekday: "long"
})

console.log(newDate);