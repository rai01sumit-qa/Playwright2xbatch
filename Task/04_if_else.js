// ODD EVEN no
let num = 10;
if (num % 2 === 0) {
    console.log(num + " is an even number");
} else {
    console.log(num + " is an odd number");
}


// Student grade calcultor 
let marks = 45;
if (marks >= 90) {
    console.log(marks + " is an A grade");
} else if (marks >= 80) {
    console.log(marks + " is a B grade");
} else if (marks >= 70) {
    console.log(marks + " is a C grade");
} else {
    console.log(marks + " is an F grade");
}

console.log(" Work hard to improve your grade!");




//Leap year calculator
let year = 2024;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}


//  HTTP Status Code Categorizer
let statusCode = 200;
if (statusCode >= 200 && statusCode < 300) {
    console.log(statusCode + " is a Success status code");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log(statusCode + " is a Redirection status code");
} else if (statusCode >= 400 && statusCode < 500) {
    console.log(statusCode + " is a client error status code");
} else if (statusCode >= 500 && statusCode < 600) {
    console.log(statusCode + " is a server error status code");
} else {
    console.log(statusCode + " is an unknown status code");
}
