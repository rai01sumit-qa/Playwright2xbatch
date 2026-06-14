
// triangle is Equilateral, Isosceles, Scalene or not valid


let a = 20;
let b = 10;
let c = 10;
if (a === b && b === c) {
    console.log(a + "The triangle is Equilateral");
} else if (a === b || b === c || a === c) {
    console.log(a + "The triangle is Isosceles");

} else if (a !== b && b !== c && a !== c) {
    console.log(a + "The triangle is Scalene");
}
else {
    console.log(a + "The triangle is not valid");

}

// fizz buzz 

for (let num = 1; num <= 100; num++) {
    switch (true) {
        case (num % 3 === 0 && num % 5 === 0):
            console.log("FizzBuzz");
            break;
        case (num % 3 === 0):
            console.log("Fizz");
            break;
        case (num % 5 === 0):
            console.log("Buzz");
            break;
            case (num % 3 ===0 && num %5 ===0):
                console.log(num +  " Fizzbuzz  ");
                break   ;
        default:
            console.log(num);
    }
}
