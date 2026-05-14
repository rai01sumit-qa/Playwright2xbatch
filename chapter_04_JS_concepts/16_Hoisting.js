// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Pramod";
console.log(a);
/*
Understanding the Flow of TDZ
=================================================
The Temporal Dead Zone works in the following manner

Variable is declared with let or const: When the variable is hoisted at the top of its current scope 
but they are not initialized.
Entering TDZ: From the hoisting till the variable initialization it will show the reference error 
if tried to access.
Variable initialization: When the value is assigned to the variable from that point of time 
they exits no longer in the TDZ.
Accessing the variable: The variables can be accessed normally after the initialization without any erros
*/