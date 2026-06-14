function greetTester(name = "Sumit", callback = function () { }) {
    console.log("Welcome, " + name);
    callback();
}

// greetTester("Dev", function () {
//     console.log("Let's start testing!");
// });

// greetTester("Dev", () => {
//     console.log("Let's start testing!");
// });
greetTester();


// // Callback with Parameters


// function runTest(testName, callback) {
//     let status = "PASS";
//     callback(testName, status);
// }

// runTest("Login Test", function (name, result) {
//     console.log(name + " → " + result);
// });


// // Sync Callback — forEach
// let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

// bugs.forEach(function (bug, i) {
//     console.log("Bug #" + (i + 1) + ": " + bug);
// });

// console.log("Total bugs: " + bugs.length);


