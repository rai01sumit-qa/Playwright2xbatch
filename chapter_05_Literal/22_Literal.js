let age = "pramod"; // This is a string literal assigned to the variable 'age'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

// typeof - operatr - It will tell you what is a data type that it has. 
console.log(typeof age);
console.log(typeof pi);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
// no is even or odd number 

let num = 6;
if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}


// student grade calculator 

let marks = 45;
if (marks >= 90) {
    console.log("Grade you are topper: A");
} else if (marks >= 80) {
    console.log("Grade your are good : B");
}
else if (marks >= 70) {
    console.log("Grade you are average : C");
} else {
    console.log("Grade you are failed : D");
}


//leap year checker  
let days = 365;
if (days % 2 === 0) {

    console.log(days + " is a leap year.");

} else {
    console.log(days + " is not a leap year.");


}


//leap year calculator2
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

    console.log(year + " is a leap year.");

} else {
    console.log(year + " is not a leap year.");





}   