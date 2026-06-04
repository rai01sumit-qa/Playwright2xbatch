// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// // incudes
// console.log(url.includes("staging"));
// console.log(url.includes("production"));

// basic string check 
let msg = " Hello world ";
console.log(msg.includes("Hello"));
console.log(msg.includes("prod "));


/*
includes() is a JavaScript method that checks if a
 string (or array) contains a specific value. It returns true or false.

*/


// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true

/* startsWith() and endsWith() are JavaScript string methods 
 that check if a string begins or ends with 
  specific characters. They return true or false.
  */

let txt = "Javascript is awesome   "
console.log(txt.startsWith("Javascript"));
console.log(txt.endsWith("wesome "));
console.log (txt.endsWith("is"));



// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));


/* indexOf() and lastIndexOf() are JavaScript string methods that find the position (index) of a character or substring. They return a number.

Key Difference
indexOf() - finds the FIRST occurrence (searches left to right →)
lastIndexOf() - finds the LAST occurrence (searches right to left ←)
Syntax
string.indexOf(searchValue, startPosition)
string.lastIndexOf(searchValue, startPosition) */


// key rules 
//  indexOf() → Finds the FIRST one
// ✅ lastIndexOf() → Finds the LAST one
// ✅ If NOT found → Returns -1
// ✅ Counting starts from 0 (not 1!)




let text  ="Siva sai marupuddi is a bugger"
console.log(text.indexOf("v"));
console.log(text.indexOf("r"));
console.log (text.lastIndexOf("i"));



//search
// console.log(url.search(/login/));
// console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 

/* search() is a JavaScript string method that finds the position of a pattern in a string. It's similar to indexOf() but supports regular expressions (regex).

 Syntax
    string.search(searchValue)
       Returns the index position if found
       Returns -1 if NOT found
       Supports regex patterns (this is the key difference!)
*/

let mail ="user@gmail.com";
console.log(mail.search("gmail"));
console.log(mail.search(/"user"/));





/*Comparison Table
 Feature	             indexOf()	      search()
 Simple string search	✅ Yes	     ✅ Yes
 Regex support	         ❌ No	      ✅ Yes
 Returns	                 Index or   -1	   Index or -1
 Start position parameter	✅ Yes    	❌ No
 Case-sensitive	         ✅ Yes	             ✅ Yes (unless /i flag)
*/