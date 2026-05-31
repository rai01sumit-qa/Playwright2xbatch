# Chapter 12 — Functions

Functions are the building blocks of reusable logic in JavaScript. This chapter covers function definition, the four function types (parameter/return combinations), template literals, function expressions, and arrow functions (ES6).

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `96_Functions.js` | Function basics | Define and call a simple function |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 — No param, no return | Basic function with no input and no output |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 — With param, no return | Accept input, print output directly |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 — No param, with return | No input, returns a value |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 — With param, with return | Full function: takes input, returns output |
| `101_Template_literal.js` | Template literals | Backtick strings with `${expression}` interpolation |
| `102_Fn_Expression.js` | Function expressions | Assigning anonymous functions to variables |
| `103_Arrow_Fn.js` | Arrow functions | ES6 shorthand: `=>` syntax |

## Concepts covered

- **Function definition & call** — `function name() { ... }` then `name()`
- **Four function types**
  1. No parameter, no return
  2. With parameter(s), no return
  3. No parameter, with return
  4. With parameter(s), with return
- **Template literals** — `` `Hello, ${name}` `` instead of string concatenation
- **Function expressions** — `const fn = function() { ... }`
- **Arrow functions** — concise syntax: `const fn = (x) => x * 2`
  - Single param: can omit parentheses
  - Single expression: can omit `{}` and `return`

## How to run

```bash
node chapter_12_Funtions/96_Functions.js
node chapter_12_Funtions/97_Type1_Fn_Basic_Functions.js
node chapter_12_Funtions/98_Type2_Fn_With_Param_No_Return.js
node chapter_12_Funtions/99_Type3_Fn_without_Param_Return_Type.js
node chapter_12_Funtions/100_Type4_Fn_With_Param_With_Return.js
node chapter_12_Funtions/101_Template_literal.js
node chapter_12_Funtions/102_Fn_Expression.js
node chapter_12_Funtions/103_Arrow_Fn.js
```

## Takeaway

Functions let you write reusable, testable code. Know the four types, prefer arrow functions for short callbacks, and use template literals for readable string formatting — these are daily tools in Playwright page objects and test utilities.
