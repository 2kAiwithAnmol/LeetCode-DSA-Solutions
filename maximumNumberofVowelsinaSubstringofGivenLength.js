var maxVowels = function(s, k) {
    let count = 0;       // To store number of vowels in current window
    let maxCount = 0;    // To keep track of the maximum number of vowels found

    // Function to check if a character is a vowel
    function isVowel(char) {
        return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
    }

    // Count vowels in the first window of size k
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }
    maxCount = count; // Initialize maxCount with first window result

    // Slide the window through the string
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) count++;           // Add rightmost character
        if (isVowel(s[i - k])) count--;       // Remove leftmost character
        maxCount = Math.max(maxCount, count); // Update max if needed
    }

    return maxCount; // Return the result
};
