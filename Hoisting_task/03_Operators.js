// large number

let a = 10;
let b = 20;
let large_no = a > b ? ("a is the small number : " + a) : ("b is the large number : " + b)

console.log("large number is: ", large_no);


//even odd
let num = 13;
let odd_number = num % 2 == 1 ? "odd" : "even";
console.log("The number is: ", odd_number);


//voting eligibility;


const age = 18;
const votingEligibility = age >= 18 ? "eligible to vote" : "not eligible to vote";
console.log("You are  eligible for voting :", votingEligibility);


//Nested ternary operator Progrms

//Age group classification

const age1 = 36;
const ageGroup = age1 < 13 ? ("you are a child") : age1 < 20 ? ("you are a teenager") : ("you are an adult");
console.log("Age group:", ageGroup);   

  