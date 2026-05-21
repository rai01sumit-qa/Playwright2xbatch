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



// user login

let expected = "Login successful";
let actual = "Login successful";

if (actual === expected) {
    console.log("Login Successful:" + " Test passed !    ");
} else {
    console.log("Login Failed!");
}

let expected1 = "login successful";
let actual1 = "Invalid Credentials";
if (actual1 === expected1) {
    console.log("Login Successful!");
} else {

    console.log("Login Failed:" + " ❌ Test Failed — Expected: " + expected1 + ", Got: " + actual1);
}


// cBug Severity Classifier

let bugSeverity = 9;

if (bugSeverity >= 9 && bugSeverity <= 10) {
    console.log("Bug severity is High :" + "Critical (block release)");

} else if (bugSeverity >= 7 && bugSeverity <= 8) {
    console.log("Bug severity is Medium :" + "High");

} else if (bugSeverity >= 4 && bugSeverity <= 6) {
    console.log("Bug severity is Medium :" + "Medium");

} else if (bugSeverity >= 1 && bugSeverity <= 3) {
    console.log("Bug severity is Low");
} else {
    console.log("Invalid bug severity");
}


// Health reporer


let healthScore = 85;

if (healthScore === 100) {
    console.log("Health score is 100%:" + "  → Green Build");

} else if (healthScore >= 90 && healthScore < 99) {
    console.log("Health score is 90–99% → Stable:" + " (investigate failures)");

} else if (healthScore >= 70 && healthScore < 89) {
    console.log("Health score is 70–89% :" + " → Unstable");

} else {
    console.log("Health score is Below 70%:" + "   → Broken Build (block deployment)");
}
console.log(" improve your health ")


// falied login attempt
let attempts = 1;

switch (attempts) {

    case 0:
        console.log("Login successful");
        break;

    default:

        // Check attempts using if-else
        if (attempts < 3) {
            console.log((3 - attempts) + " attempt left before lockout");
        } else {
            console.log("🔒 Account Locked — Contact support");
        }
}