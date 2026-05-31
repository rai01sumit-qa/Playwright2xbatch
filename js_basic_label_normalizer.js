// Reusable Label Normalizer for JavaScript QA Utilities
// Derived from JavaScript chapters 1 to 3:
//   - JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality

/**
 * Normalizes a label string for consistent JavaScript QA utility usage.
 *
 * Rules applied:
 * 1. Trim leading and trailing spaces.
 * 2. Convert text to lowercase.
 * 3. Replace groups of non-alphanumeric characters with a single hyphen.
 * 4. Prefix the result with "js-basic-".
 *
 * @param {string} text - The raw label text to normalize.
 * @returns {string} The normalized label.
 */
function normalizeLabel(text) {
  if (typeof text !== "string") {
    throw new TypeError("normalizeLabel expects a string argument");
  }

  return (
    text
      .trim()                          // Rule 1: Trim leading/trailing spaces
      .toLowerCase()                   // Rule 2: Convert to lowercase
      .replace(/[^a-z0-9]+/g, "-")    // Rule 3: Replace non-alphanumeric groups with a single hyphen
      .replace(/^-+|-+$/g, "")        // Clean up any leading/trailing hyphens after replacement
  );
}

/**
 * Wraps normalizeLabel and prefixes the result with "js-basic-".
 *
 * @param {string} text - The raw label text to normalize.
 * @returns {string} The fully prefixed normalized label.
 */
function jsBasicNormalizeLabel(text) {
  const normalized = normalizeLabel(text);
  // Rule 4: Prefix with "js-basic-"
  return normalized ? `js-basic-${normalized}` : "js-basic-";
}

// --------------------
// Example Usage & QA Checks
// --------------------

const testCases = [
  { input: "  Hello World  ", expected: "js-basic-hello-world" },
  { input: "JavaScript Engine Setup!!!", expected: "js-basic-javascript-engine-setup" },
  { input: "  NULL & Undefined  ", expected: "js-basic-null-undefined" },
  { input: "Comments---Identifiers", expected: "js-basic-comments-identifiers" },
  { input: "  ", expected: "js-basic-" },
  { input: "Equality  ==  vs  ===", expected: "js-basic-equality-vs" },
  { input: "123_Literals", expected: "js-basic-123-literals" },
  { input: "!!!LeadingNonAlpha", expected: "js-basic-leadingnonalpha" },
];

console.log("=== JavaScript Basic Label Normalizer ===\n");

testCases.forEach(({ input, expected }, index) => {
  const result = jsBasicNormalizeLabel(input);
  const pass = result === expected ? "PASS" : "FAIL";
  console.log(`Test ${index + 1}: ${pass}`);
  console.log(`  Input:    "${input}"`);
  console.log(`  Expected: "${expected}"`);
  console.log(`  Got:      "${result}"\n`);
});

// Export for reuse in other modules (Node.js / CommonJS / ES modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { normalizeLabel, jsBasicNormalizeLabel };
}
