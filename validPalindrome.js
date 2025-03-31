/**
 * Check if a given string is a valid palindrome (ignoring non-alphanumeric characters).
 * Uses the Two-Pointer approach.
 * 
 * @param {string} s - Input string
 * @return {boolean} - Returns true if the string is a palindrome, false otherwise
 */
var isPalindrome = function(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize two pointers
    let i = 0, j = s.length - 1;
    
    // Check characters from both ends
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    
    return true; // Return true if palindrome
};
