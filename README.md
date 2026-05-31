# Playwright 2x Batch - JavaScript Learning Repository

Welcome to the **Playwright 2x Batch** repository!  
This project contains hands-on JavaScript exercises and examples created as part of the Playwright 2x batch training program. It covers fundamental JavaScript concepts essential for test automation with Playwright.

---

## Table of Contents

- [About](#about)
- [Repository Structure](#repository-structure)
- [Topics Covered](#topics-covered)
- [How to Run](#how-to-run)
- [Prerequisites](#prerequisites)
- [Author](#author)

---

## About

This repository is a learning resource for JavaScript basics and core concepts.  
Each chapter is organized into its own folder with focused `.js` files and documentation.

---

## Repository Structure

```
Playwright2xBatch/
├── chapter_01_Basics/
│   ├── 01_Basics.js              # Hello World & variable introduction
│   ├── 02_JS.js                  # Basic JS examples
│   ├── 03_JS_VerifySetup_Commands.js  # Node.js environment verification
│   └── 04_HotCode.js             # Function loops and performance basics
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js           # var keyword and re-assignment
│
├── chapter_03_Identifiers/
│   ├── 06_Identifier_Rules.js    # Identifier naming rules
│   ├── 07_Identifier_Rules_02.js # Extended identifier examples
│   ├── 08_Comments.js            # Single-line and multi-line comments
│   ├── js_identifier_rules.js    # Comprehensive identifier rules demo
│   ├── VS_Code_keyboard_shortcut_mac.md
│   └── VS_Code_keyboard_shortcut_windows.md
│
├── chapter_04_JS_concepts/
│   ├── 09_var_let_const.js       # var, let, const comparison
│   ├── 10_functions.js           # Function basics
│   ├── 11_var_explained.js       # var deep dive
│   ├── 12_let_peope_love.js      # let usage and preference
│   ├── 13_const_explained.js     # const usage
│   ├── 14_var_functionscope.js   # var function scope
│   ├── 15_let_scope.js           # let block scope
│   ├── 16_Hoisting.js            # Hoisting concepts
│   ├── 17_hoisting_fn.js         # Function hoisting
│   ├── 18_let_hoisting.js        # let hoisting
│   ├── 19_const_hoisting.js      # const hoisting
│   ├── 20_let_hoisting.js        # Additional let hoisting
│   └── 21_Jr_QA.js               # Junior QA concepts
│
├── chapter_05_Literal/
│   ├── 22_Literal.js             # JS literals overview
│   ├── 23_null_undefined.js      # null vs undefined
│   ├── 24_null.js                # null deep dive
│   ├── 25_Literal_All.js         # All literal types
│   ├── 26_Literal_Number_all.js  # Number literals
│   ├── 27_String.js              # Strings
│   ├── 28_Template_Literal.js    # Template literals
│   └── 29_Backtick_single_double.js # Quotes and backticks
│
├── chapter_06_Operator/
│   ├── 30_Operator.js            # Assignment operators
│   ├── 31_Arithmetic_OP.js       # Arithmetic operators
│   ├── 32_Modulus_OP.js          # Modulus operator
│   ├── 33_Expo_OP.js             # Exponentiation operator
│   ├── 34_IQ.js                  # Interview questions
│   ├── 35_Comparsion_OP.js       # Comparison operators
│   ├── 36_Comparsion_Strict_loose.js # Strict vs loose equality
│   ├── 37_IQ_Loose_Strict.js     # Equality IQ
│   ├── 38_Confusing_Comparsion.js# Confusing comparisons
│   ├── 39_Logical_Op.js          # Logical operators
│   ├── 40_String_Con_Op.js       # String concatenation
│   ├── 41_Ternary_Op.js          # Ternary operator
│   ├── 42_Type_Op.js             # typeof operator
│   ├── 43_Incre_Decre_Op.js      # Increment / Decrement
│   └── 44_Null_Op.js             # Nullish coalescing operator
│
├── chapter_07_If_else/
│   ├── 48_IF_ESLE.js             # Basic if/else
│   ├── 49_If_elseif_else.js      # else-if ladder
│   ├── 50_REAL_IF_ELSE.js        # Nested if/else (role-based access)
│   ├── 51_API_IF_ELSE.js         # API status branching
│   ├── 52_IQ_IF_ELSE.js          # Truthy vs falsy
│   ├── 53_IF_ELSE_real.js        # Logical operators inside conditions
│   ├── 54_IQ.js                  # One-liner if without braces
│   ├── 55_IE.js                  # Solo if statement
│   ├── 56_IQ_EVEN_ODD.js         # Even / Odd check
│   ├── 57_Grade_Calc.js          # Grade calculator
│   ├── 58_LEAP_YEAR.js           # Leap year logic
│   └── README.md
│
├── chapter_08_Switch_Statement/
│   ├── 59_Switch.js              # Basic switch with break
│   ├── 60_No_Break.js            # Fall-through behavior
│   ├── 61_Default.js             # Default branch
│   ├── 62_REAL_TIME_EXAMPLE.js   # API status codes
│   ├── 63_Switch_Group.js        # Grouped cases
│   ├── 64_IQ.js                  # Fall-through IQ
│   ├── 65_IQ2.js                 # switch (true) pattern
│   ├── 66_IQ3.js                 # Duplicate cases
│   ├── 67_IQ4.js                 # Strict equality trap
│   └── README.md
│
├── chapter_09_UserInput/
│   ├── 68_User_Input.js          # Browser prompt()
│   ├── 69_Node_readline.js       # Node readline module
│   ├── 70_prompt_sync.js         # prompt-sync npm package
│   └── README.md
│
├── chapter_10_Loops/
│   ├── 71_For_loop.js            # For loop introduction
│   ├── 72_For_loop.js            # For loop with <=
│   ├── 73_For_Loop2.js           # Loop boundaries < vs <=
│   ├── 74_IQ.js                  # For + if/else
│   ├── 75_For_OF_IN_EACH.js      # While loop retry logic
│   ├── 76_While.js               # While loop anatomy
│   ├── 77_Do_While.js            # do-while guaranteed execution
│   ├── 78_Do_While.js            # do-while retry pattern
│   ├── 79_IQ.js                  # While countdown
│   ├── 80_IQ.js                  # do-while off-by-one
│   ├── 81_IQ.js                  # continue keyword
│   ├── 82_IQ.js                  # do-while infinite-loop risk
│   └── README.md
│
├── chapter_11_Arrays/
│   ├── 83_Arrays.js              # Array basics
│   ├── 84_Arrays.js              # Array basics (continued)
│   ├── 85_Access_Array.js        # Accessing elements
│   ├── 86_Arrays_Adding_Remove.js# Add / Remove — Part 1
│   ├── 87_Adding_Remove2.js      # Add / Remove — Part 2
│   ├── 88_REAL_Example.js        # Real-world array example
│   ├── 89_Searching.js           # Searching arrays
│   ├── 90_Iterate.js             # Iterating arrays
│   ├── 91_Transform_Array.js     # map, filter, reduce, flat
│   ├── 92_Arrays.js              # Array recap
│   ├── 93_Array_Slicing.js       # slice vs splice
│   ├── 94_Concat_array.js        # Combining arrays
│   ├── 95_Array_Checking.js      # Array checking utilities
│   └── README.md
│
├── chapter_12_Funtions/
│   ├── 96_Functions.js           # Function basics
│   ├── 97_Type1_Fn_Basic_Functions.js        # Type 1: no param, no return
│   ├── 98_Type2_Fn_With_Param_No_Return.js   # Type 2: with param, no return
│   ├── 99_Type3_Fn_without_Param_Return_Type.js # Type 3: no param, with return
│   ├── 100_Type4_Fn_With_Param_With_Return.js   # Type 4: with param, with return
│   ├── 101_Template_literal.js   # Template literals
│   ├── 102_Fn_Expression.js      # Function expressions
│   ├── 103_Arrow_Fn.js           # Arrow functions (ES6)
│   └── README.md
│
├── Task/
│   ├── 01_function_hoisitng.js   # Function hoisting task
│   ├── 02_class_hoisting.js      # Class hoisting task
│   ├── 03_operator.js            # Operator practice tasks
│   ├── 04_if_else.js             # If/else practice (odd/even, grade, leap year, HTTP status)
│   ├── 05_If_else_switch.js      # If/else + switch practice (login, bug severity, health score)
│   └── 06_h.js                   # Triangle classifier + FizzBuzz
│
├── js_basic_label_normalizer.js  # Reusable label normalizer utility
└── README.md                     # This file
```

---

## Topics Covered

| Chapter | Topic | Description |
|---------|-------|-------------|
| **Chapter 01** | Basics | Hello World, variables, environment setup verification |
| **Chapter 02** | JavaScript Concepts | Variable declaration with `var`, re-assignment |
| **Chapter 03** | Identifiers | Naming rules, conventions, comments, VS Code shortcuts |
| **Chapter 04** | JS Concepts (Advanced) | `var` vs `let` vs `const`, scope, hoisting |
| **Chapter 05** | Literals | Data types, strings, template literals, `null` & `undefined` |
| **Chapter 06** | Operators | Arithmetic, comparison, logical, ternary, `typeof`, increment/decrement, nullish coalescing |
| **Chapter 07** | If / Else | Single-branch, two-way, multi-way, nested conditions, truthy/falsy, real-world examples (login, API status, grade, leap year) |
| **Chapter 08** | Switch Statement | `switch`, `case`, `break`, `default`, fall-through, grouped cases, `switch (true)` pattern, strict equality |
| **Chapter 09** | User Input | `prompt()`, Node `readline`, `prompt-sync` — reading input in browser and Node |
| **Chapter 10** | Loops | `for`, `while`, `do-while`, `continue`, loop boundaries, retry patterns, IQ traps |
| **Chapter 11** | Arrays | Declaration, indexing, add/remove, search, iterate, transform (`map`/`filter`/`reduce`), slice/splice, concat, checking |
| **Chapter 12** | Functions | Function definition, four types (param/return combos), template literals, function expressions, arrow functions |
| **Task** | Practice Tasks | Function hoisting, class hoisting, operators, if/else drills, switch + if/else combos, triangle classifier, FizzBuzz |

---

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rai01sumit-qa/Playwright2xbatch.git
   cd Playwright2xbatch
   ```

2. **Run a JavaScript file using Node.js:**
   ```bash
   # Chapter 1
   node chapter_01_Basics/01_Basics.js
   node chapter_01_Basics/03_JS_VerifySetup_Commands.js

   # Chapter 4
   node chapter_04_JS_concepts/09_var_let_const.js

   # Chapter 5
   node chapter_05_Literal/22_Literal.js

   # Chapter 6
   node chapter_06_Operator/30_Operator.js

   # Chapter 7
   node chapter_07_If_else/48_IF_ESLE.js
   node chapter_07_If_else/58_LEAP_YEAR.js

   # Chapter 8
   node chapter_08_Switch_Statement/59_Switch.js
   node chapter_08_Switch_Statement/62_REAL_TIME_EXAMPLE.js

   # Chapter 9
   node chapter_09_UserInput/69_Node_readline.js

   # Chapter 10
   node chapter_10_Loops/71_For_loop.js
   node chapter_10_Loops/76_While.js

   # Chapter 11
   node chapter_11_Arrays/83_Arrays.js
   node chapter_11_Arrays/91_Transform_Array.js

   # Chapter 12
   node chapter_12_Funtions/96_Functions.js
   node chapter_12_Funtions/103_Arrow_Fn.js

   # Tasks
   node Task/01_function_hoisitng.js
   node Task/02_class_hoisting.js
   node Task/03_operator.js
   node Task/04_if_else.js
   node Task/05_If_else_switch.js
   node Task/06_h.js

   # Utility
   node js_basic_label_normalizer.js
   ```

3. **Verify your setup:**
   ```bash
   node -v
   ```

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)
- Basic understanding of command-line / terminal usage

---

## Author

**Sumit Kumar**  
Created as part of the Playwright 2x Batch learning journey.

---

> Happy Learning! Keep practicing JavaScript to master Playwright automation.
