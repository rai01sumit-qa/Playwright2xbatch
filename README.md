# Playwright2xBatch

This repository contains learning materials and code examples for Playwright automation testing with JavaScript.

## Project Structure

```
Playwright2xBatch/
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_VerifySetup_Commands.js
│   └── 04_HotCode.js
└── chapter_02_Javascript_Concepts/
    └── 05_JS_Basics.js
```

## Chapters

### Chapter 01: Basics
- **01_Basics.js** - Introduction to Playwright basics
- **02_JS.js** - JavaScript fundamentals for Playwright
- **03_JS_VerifySetup_Commands.js** - Commands to verify your Playwright setup
- **04_HotCode.js** - Quick code snippets and examples

### Chapter 02: Javascript Concepts
- **05_JS_Basics.js** - Core JavaScript concepts for test automation

## Getting Started

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Install Playwright:
   ```bash
   npm init -y
   npm install @playwright/test
   npx playwright install
   ```
3. Run the example scripts to verify your setup

## Running Tests

```bash
# Run a specific file
node chapter_01_Basics/01_Basics.js

# Or using Playwright test runner
npx playwright test
```

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

---

*Happy Testing!*
