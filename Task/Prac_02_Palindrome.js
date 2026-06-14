function checkPalindrome(str) {

//const original = str.toLowerCase();
const original  = str.toLowerCase();

//const reversed = original.split('').reverse().join('');

const reversed = original.split('').reverse().join('');

if (original === reversed) {
    console.log(`${str}: ${original} is palindrome ✅`);
} else {
    console.log(`${str}: ${original} is NOT palindrome ❌`);
}


}

//Test cases 
checkPalindrome("Madam");   // Madam: madam is palindrome
checkPalindrome("pramod");  // pramod: pramod is NOT palindrome


