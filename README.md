# Playwright Batch 2x

This repository contains learning materials and exercises for **Playwright Batch 2x** training program, covering JavaScript fundamentals essential for Playwright automation testing.

---

## Table of Contents

- [About](#about)
- [Repository Structure](#repository-structure)
- [Course Contents](#course-contents)
- [Development Environment](#development-environment)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
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
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_VerifySetup_Commands.js
│   └── 04_HotCode.js
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js
│
├── chapter_03_Identifiers/
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Rules_02.js
│   ├── 08_Comments.js
│   ├── js_identifier_rules.js
│   ├── VS_Code_keyboard_shortcut_mac.md
│   └── VS_Code_keyboard_shortcut_windows.md
│
├── chapter_04_JS_concepts/
│   ├── 09_var_let_const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_peope_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionscope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   ├── 17_hoisting_fn.js
│   ├── 18_let_hoisting.js
│   ├── 19_const_hoisting.js
│   ├── 20_let_hoisting.js
│   └── 21_Jr_QA.js
│
├── chapter_05_Literal/
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js
│   ├── 26_Literal_Number_all.js
│   ├── 27_String.js
│   ├── 28_Template_Literal.js
│   └── 29_Backtick_single_double.js
│
├── chapter_06_Operator/
│   ├── 30_Operator.js
│   ├── 31_Arithmetic_OP.js
│   ├── 32_Modulus_OP.js
│   ├── 33_Expo_OP.js
│   ├── 34_IQ.js
│   ├── 35_Comparsion_OP.js
│   ├── 36_Comparsion_Strict_loose.js
│   ├── 37_IQ_Loose_Strict.js
│   ├── 38_Confusing_Comparsion.js
│   ├── 39_Logical_Op.js
│   ├── 40_String_Con_Op.js
│   ├── 41_Ternary_Op.js
│   ├── 42_Type_Op.js
│   ├── 43_Incre_Decre_Op.js
│   ├── 44_Null_Op.js
│   ├── 45_Post_Increment.js
│   ├── 46_IQ_INCREMENT_D.js
│   └── 47_Advance_ID_.js
│
├── chapter_07_If_else/
│   ├── 48_IF_ESLE.js
│   ├── 49_If_elseif_else.js
│   ├── 50_REAL_IF_ELSE.js
│   ├── 51_API_IF_ELSE.js
│   ├── 52_IQ_IF_ELSE.js
│   ├── 53_IF_ELSE_real.js
│   ├── 54_IQ.js
│   ├── 55_IE.js
│   ├── 56_IQ_EVEN_ODD.js
│   ├── 57_Grade_Calc.js
│   ├── 58_LEAP_YEAR.js
│   └── README.md
│
├── chapter_08_Switch_Statement/
│   ├── 59_Switch.js
│   ├── 60_No_Break.js
│   ├── 61_Default.js
│   ├── 62_REAL_TIME_EXAMPLE.js
│   ├── 63_Switch_Group.js
│   ├── 64_IQ.js
│   ├── 65_IQ2.js
│   ├── 66_IQ3.js
│   ├── 67_IQ4.js
│   └── README.md
│
├── chapter_09_UserInput/
│   ├── 68_User_Input.js
│   ├── 69_Node_readline.js
│   ├── 70_prompt_sync.js
│   └── README.md
│
├── chapter_10_Loops/
│   ├── 71_For_loop.js
│   ├── 72_For_loop.js
│   ├── 73_For_Loop2.js
│   ├── 74_IQ.js
│   ├── 75_For_OF_IN_EACH.js
│   ├── 76_While.js
│   ├── 77_Do_While.js
│   ├── 78_Do_While.js
│   ├── 79_IQ.js
│   ├── 80_IQ.js
│   ├── 81_IQ.js
│   ├── 82_IQ.js
│   └── README.md
│
├── chapter_11_Arrays/
│   ├── 83_Arrays.js
│   ├── 84_Arrays.js
│   ├── 85_Access_Array.js
│   ├── 86_Arrays_Adding_Remove.js
│   ├── 87_Adding_Remove2.js
│   ├── 88_REAL_Example.js
│   ├── 89_Searching.js
│   ├── 90_Iterate.js
│   ├── 91_Transform_Array.js
│   ├── 92_Arrays.js
│   ├── 93_Array_Slicing.js
│   ├── 94_Concat_array.js
│   ├── 95_Array_Checking.js
│   └── README.md
│
├── chapter_12_Funtions/
│   ├── 96_Functions.js
│   ├── 97_Type1_Fn_Basic_Functions.js
│   ├── 98_Type2_Fn_With_Param_No_Return.js
│   ├── 99_Type3_Fn_without_Param_Return_Type.js
│   ├── 100_Type4_Fn_With_Param_With_Return.js
│   ├── 101_Template_literal.js
│   ├── 102_Fn_Expression.js
│   ├── 103_Arrow_Fn.js
│   └── README.md
│
├── Task/
│   ├── 01_function_hoisitng.js
│   ├── 02_class_hoisting.js
│   ├── 03_operator.js
│   ├── 04_if_else.js
│   ├── 05_If_else_switch.js
│   ├── 06_h.js
│   ├── 07_pyramid.js
│   ├── 07_pyramid_reverse.js
│   ├── 07_pyramid_reverse_method2.js
│   └── 07_pyramid_reverse_method3.js
│
├── js_basic_label_normalizer.js
└── README.md
```

---

## Course Contents

### Chapter 01 - Basics
Introduction to JavaScript and basic programming concepts:
- `01_Basics.js` - JavaScript fundamentals
- `02_JS.js` - Core JavaScript concepts
- `03_HotCode.js` - Interactive code examples
- `03_Javascript_Commands.js` - Essential JavaScript commands
- `04_HotCode.js` - Function loops and performance basics

### Chapter 02 - JavaScript Concepts
Deeper dive into JavaScript programming:
- `05_JS_Basics.js` - Advanced JS basics

### Chapter 03 - Identifiers
Understanding JavaScript identifiers, naming conventions, and best practices:
- `06_Identifier_Rules.js` - Rules for naming identifiers
- `07_Identifier_Rules_02.js` - Additional identifier concepts
- `08_Comments.js` - Commenting best practices
- `js_identifier_rules.js` - Comprehensive identifier rules reference

### Chapter 04 - JavaScript Variables, Scope & Hoisting
Understanding variable declarations, scope behavior, and hoisting:
- `09_var_let_const.js` - Comparison of var, let, and const
- `10_functions.js` - Function definition and calling
- `11_var_explained.js` - var explained (function-scoped behavior)
- `12_let_peope_love.js` - let explained (block-scoped behavior)
- `13_const_explained.js` - const explained and usage
- `14_var_functionscope.js` - var function scope demonstration
- `15_let_scope.js` - let block scope demonstration
- `16_Hoisting.js` - Hoisting concept in JavaScript
- `17_hoisting_fn.js` - Hoisting behavior inside functions
- `18_let_hoisting.js` - let hoisting behavior (TDZ)
- `19_const_hoisting.js` - const hoisting behavior (TDZ)
- `20_let_hoisting.js` - Additional let hoisting examples
- `21_Jr_QA.js` - Junior QA concepts

### Chapter 05 - Literals
Understanding JavaScript literals and data types:
- `22_Literal.js` - JavaScript literals overview
- `23_null_undefined.js` - Null vs undefined
- `24_null.js` - Null literal
- `25_Literal_All.js` - All literals overview
- `26_Literal_Number_all.js` - Number literals
- `27_String.js` - String literals
- `28_Template_Literal.js` - Template literals
- `29_Backtick_single_double.js` - Backtick vs single vs double quotes

### Chapter 06 - Operators
Understanding JavaScript operators for calculations, comparisons, and logical operations:
- `30_Operator.js` - Assignment operators
- `31_Arithmetic_OP.js` - Arithmetic operators
- `32_Modulus_OP.js` - Modulus operator
- `33_Expo_OP.js` - Exponentiation operator
- `34_IQ.js` - Compound assignment operators
- `35_Comparsion_OP.js` - Comparison operators
- `36_Comparsion_Strict_loose.js` - Strict vs loose equality
- `37_IQ_Loose_Strict.js` - Loose equality quiz
- `38_Confusing_Comparsion.js` - Confusing comparison gotchas
- `39_Logical_Op.js` - Logical operators
- `40_String_Con_Op.js` - String concatenation operators
- `41_Ternary_Op.js` - Ternary operator
- `42_Type_Op.js` - typeof operator
- `43_Incre_Decre_Op.js` - Increment/decrement operators
- `44_Null_Op.js` - Nullish coalescing operator
- `45_Post_Increment.js` - Post-increment operator
- `46_IQ_INCREMENT_D.js` - Increment quiz
- `47_Advance_ID_.js` - Advanced increment operators

### Chapter 07 - If / Else Statements
Control flow with conditional statements:
- `48_IF_ESLE.js` - Basic if/else
- `49_If_elseif_else.js` - else-if ladder
- `50_REAL_IF_ELSE.js` - Nested if/else (role-based access)
- `51_API_IF_ELSE.js` - API status branching
- `52_IQ_IF_ELSE.js` - Truthy vs falsy
- `53_IF_ELSE_real.js` - Logical operators with if/else
- `54_IQ.js` - One-liner if
- `55_IE.js` - Solo if statement
- `56_IQ_EVEN_ODD.js` - Even/odd check with if/else
- `57_Grade_Calc.js` - Grade calculator
- `58_LEAP_YEAR.js` - Leap year logic

### Chapter 08 - Switch Statement
Switch statement for multi-way branching:
- `59_Switch.js` - Basic switch
- `60_No_Break.js` - Fall-through behavior
- `61_Default.js` - Default branch
- `62_REAL_TIME_EXAMPLE.js` - API status codes with switch
- `63_Switch_Group.js` - Grouped cases
- `64_IQ.js` - Fall-through interview question
- `65_IQ2.js` - switch (true) pattern
- `66_IQ3.js` - Duplicate cases
- `67_IQ4.js` - Strict equality in switch

### Chapter 09 - User Input
Reading user input in JavaScript:
- `68_User_Input.js` - Browser prompt()
- `69_Node_readline.js` - Node readline module
- `70_prompt_sync.js` - prompt-sync npm package

### Chapter 10 - Loops
Loop constructs for repetition and iteration:
- `71_For_loop.js` - For loop introduction
- `72_For_loop.js` - For loop with <=
- `73_For_Loop2.js` - Loop boundaries < vs <=
- `74_IQ.js` - For + if/else
- `75_For_OF_IN_EACH.js` - While loop retry logic
- `76_While.js` - While loop anatomy
- `77_Do_While.js` - do-while guaranteed execution
- `78_Do_While.js` - do-while retry pattern
- `79_IQ.js` - While countdown
- `80_IQ.js` - do-while off-by-one
- `81_IQ.js` - continue keyword
- `82_IQ.js` - do-while infinite-loop risk

### Chapter 11 - Arrays
Working with ordered collections in JavaScript:
- `83_Arrays.js` - Array basics
- `84_Arrays.js` - Array basics (continued)
- `85_Access_Array.js` - Accessing elements
- `86_Arrays_Adding_Remove.js` - Add / Remove - Part 1
- `87_Adding_Remove2.js` - Add / Remove - Part 2
- `88_REAL_Example.js` - Real-world array example
- `89_Searching.js` - Searching arrays
- `90_Iterate.js` - Iterating arrays
- `91_Transform_Array.js` - map, filter, reduce, flat
- `92_Arrays.js` - Array recap
- `93_Array_Slicing.js` - slice vs splice
- `94_Concat_array.js` - Combining arrays
- `95_Array_Checking.js` - Array checking utilities

### Chapter 12 - Functions
Reusable logic blocks and function types:
- `96_Functions.js` - Function basics
- `97_Type1_Fn_Basic_Functions.js` - Type 1: no param, no return
- `98_Type2_Fn_With_Param_No_Return.js` - Type 2: with param, no return
- `99_Type3_Fn_without_Param_Return_Type.js` - Type 3: no param, with return
- `100_Type4_Fn_With_Param_With_Return.js` - Type 4: with param, with return
- `101_Template_literal.js` - Template literals
- `102_Fn_Expression.js` - Function expressions
- `103_Arrow_Fn.js` - Arrow functions (ES6)

### Tasks
Hands-on practice exercises covering multiple concepts:
- `01_function_hoisitng.js` - Function hoisting examples and behavior
- `02_class_hoisting.js` - Class hoisting and increment operator exercises
- `03_operator.js` - Ternary operator practice (large number, even/odd, voting eligibility, age group classification)
- `04_if_else.js` - If/else practice (odd/even, grade calculator, leap year, HTTP status code categorizer)
- `05_If_else_switch.js` - Real-world if/else and switch cases (HTTP status, user login, bug severity, health reporter, failed login attempts)
- `06_h.js` - Triangle type checker and FizzBuzz implementation using switch
- `07_pyramid.js` - Star pyramid patterns (normal and reverse)
- `07_pyramid_reverse.js` - Reverse pyramid pattern (Method 1: countdown loop)
- `07_pyramid_reverse_method2.js` - Reverse pyramid pattern (Method 2: formula-based)
- `07_pyramid_reverse_method3.js` - Reverse pyramid pattern (Method 3: while loop)

### Utility
- `js_basic_label_normalizer.js` - Reusable label normalizer for JavaScript QA utilities

---

## Development Environment

This project includes VS Code configuration and keyboard shortcuts for:
- **Windows**: `VS_Code_keyboard_shortcut_windows.md`
- **Mac**: `VS_Code_keyboard_shortcut_mac.md`

---

## Getting Started

1. Clone this repository
2. Open in VS Code
3. Explore the chapters in sequential order
4. Run the JavaScript files using Node.js to see the output

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [VS Code](https://code.visualstudio.com/) editor (recommended)
- Basic understanding of programming concepts

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
   node Task/07_pyramid.js
   node Task/07_pyramid_reverse.js

   # Utility
   node js_basic_label_normalizer.js
   ```

3. **Verify your setup:**
   ```bash
   node -v
   ```

---

## Author

**Sumit Kumar**  
Created as part of the Playwright 2x Batch learning journey.

---

## Note

This is a learning repository. Each chapter builds upon the previous one, so it's recommended to follow the order outlined above.

> Happy Learning! Keep practicing JavaScript to master Playwright automation.
