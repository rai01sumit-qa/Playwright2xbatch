function checkAnagram(str1, str2) {
    // 1. Remove all spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // 2. If lengths are different, they cannot be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // 3. Split into characters, sort them, and join back into a string
    const sorted1 = cleanStr1.split('').sort().join('');
    const sorted2 = cleanStr2.split('').sort().join('');

    // 4. Compare the final sorted strings
    return sorted1 === sorted2;
}

// Test cases from your image list
console.log(checkAnagram("Eat", "Tea"));       // Output: true
console.log(checkAnagram("From", "Form"));     // Output: true
console.log(checkAnagram("North", "Thorn"));   // Output: true

