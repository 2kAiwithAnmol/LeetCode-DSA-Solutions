//Optimized approch
var minWindow = function(s, t) {
    // frequency array for characters we need
    let target = new Array(128).fill(0);

    // keeps track of smallest window length found
    let minLength = Infinity;

    // frequency array for current window
    let window = new Array(128).fill(0);

    // stores the final answer
    let result = "";

    // left pointer of sliding window
    let left = 0;

    // fill target array with counts from t
    for (let char of t) {
        target[char.charCodeAt(0)]++;
    }

    // move right pointer to expand window
    for (let right = 0; right < s.length; right++) {

        // include current character in window
        window[s.charCodeAt(right)]++;

        // if window satisfies all characters of t
        while (isValid(window, target)) {

            // calculate current window size
            let len = right - left + 1;

            // update minimum window if smaller found
            if (len < minLength) {
                minLength = len;
                result = s.substring(left, right + 1);
            }

            // remove left character from window
            window[s.charCodeAt(left)]--;

            // move left pointer to shrink window
            left++;
        }
    }

    return result;
};

// check if current window contains all required characters
function isValid(window, target) {
    for (let i = 0; i < 128; i++) {
        if (window[i] < target[i]) return false;
    }
    return true;
}


//This is Brute force approch
var minWindow = function(s, t) {

    // Array to store frequency of characters in t
    let target = new Array(128).fill(0);

    // To store smallest valid window
    let minLength = Infinity;
    let result = "";

    // Build frequency map for t
    for (let char of t) {
        target[char.charCodeAt(0)]++;
    }

    // Try every starting index
    for (let i = 0; i < s.length; i++) {

        // New window frequency for each start
        let window = new Array(128).fill(0);

        // Expand window from i to end
        for (let j = i; j < s.length; j++) {

            // Add current character to window
            window[s[j].charCodeAt(0)]++;

            // Check if current window is valid
            if (isValid(window, target)) {

                let len = j - i + 1;

                // Update result if smaller window found
                if (len < minLength) {
                    minLength = len;
                    result = s.substring(i, j + 1);
                }

                // Stop expanding this start index
                break;
            }
        }
    }

    return result;
};


// Function to check if window satisfies target requirements
function isValid(window, target) {

    // Check all ASCII characters
    for (let i = 0; i < 128; i++) {

        // If window has less than required count → invalid
        if (window[i] < target[i]) return false;
    }

    // If no character is missing → valid
    return true;
}