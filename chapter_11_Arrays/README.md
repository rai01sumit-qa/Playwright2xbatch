# Chapter 11 — Arrays

Arrays are ordered collections and one of the most-used data structures in JavaScript. This chapter covers declaration, indexing, adding/removing elements, searching, iterating, transforming (`map`, `filter`, `reduce`), slicing/splicing, concatenation, and array checking utilities.

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `83_Arrays.js` | Array basics | Declaration, indexing, mixed types, length |
| `84_Arrays.js` | Array basics (continued) | More array examples |
| `85_Access_Array.js` | Accessing elements | Index access, out-of-bounds behavior |
| `86_Arrays_Adding_Remove.js` | Add / Remove — Part 1 | `push`, `pop`, `unshift`, `shift` |
| `87_Adding_Remove2.js` | Add / Remove — Part 2 | More `push`/`pop`/`unshift`/`shift` practice |
| `88_REAL_Example.js` | Real-world example | Practical array usage |
| `89_Searching.js` | Searching | `indexOf`, `includes`, `find` |
| `90_Iterate.js` | Iteration | `for`, `for...of`, `forEach`, `for...in`, `entries()` |
| `91_Transform_Array.js` | Transforming | `map`, `filter`, `reduce`, `flat` |
| `92_Arrays.js` | Array recap | Additional array patterns |
| `93_Array_Slicing.js` | Slicing & Splicing | `slice` (non-mutating) vs `splice` (mutating) |
| `94_Concat_array.js` | Combining arrays | `concat`, spread operator |
| `95_Array_Checking.js` | Array checking | `Array.isArray`, `length`, empty checks |

## Concepts covered

- **Declaration** — `[]` (empty), `[1, 2, 3]` (pre-filled), mixed types allowed
- **Indexing** — zero-based; out-of-range returns `undefined`
- **Adding / Removing**
  - `push(...)` — add to end
  - `pop()` — remove from end
  - `unshift(...)` — add to beginning
  - `shift()` — remove from beginning
- **Searching** — `indexOf`, `includes`, `find`
- **Iteration** — classic `for`, `for...of`, `forEach`, `for...in`, `entries()`
- **Transformation** — `map`, `filter`, `reduce`, `flat`
- **Slicing** — `slice(start, end)` returns a new array (does NOT mutate original)
- **Splicing** — `splice(start, deleteCount)` mutates the original array
- **Concatenation** — `concat()` or spread `...`
- **Checking** — `Array.isArray()`, `.length`

## How to run

```bash
node chapter_11_Arrays/83_Arrays.js
node chapter_11_Arrays/84_Arrays.js
node chapter_11_Arrays/85_Access_Array.js
node chapter_11_Arrays/86_Arrays_Adding_Remove.js
node chapter_11_Arrays/87_Adding_Remove2.js
node chapter_11_Arrays/88_REAL_Example.js
node chapter_11_Arrays/89_Searching.js
node chapter_11_Arrays/90_Iterate.js
node chapter_11_Arrays/91_Transform_Array.js
node chapter_11_Arrays/92_Arrays.js
node chapter_11_Arrays/93_Array_Slicing.js
node chapter_11_Arrays/94_Concat_array.js
node chapter_11_Arrays/95_Array_Checking.js
```

## Takeaway

Arrays are the backbone of handling collections in JavaScript. Master adding/removing, searching, iterating, and the golden trio `map`/`filter`/`reduce` — you'll use them constantly in Playwright data handling and test reporting.
