/*JavaScript Hoisting refers to the process whereby 
     the interpreter appears to move the declaration of functions, variables, classes, 
     or imports to the top of their scope, prior to execution of the code.

*/
/* Functional hoisitng 
================================================
Before the interpreter executes the whole code, 
it first hoists (raises, or lifts) the declared function to the top of the scope it is defined in. 
In this case, printHello is defined in the global scope, so the function is hoisted to the top of the global scope. 
Through hoisting, the function (including the logic) 
becomes accessible even before the line it was declared in the code.
*/

/*
printHello()

function printHello() {
  console.log("hello")
}

printHello()
*/




printHello()
// hello

printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')

  function printDillion() {
    console.log("dillion")