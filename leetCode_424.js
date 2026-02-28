var characterReplacement = function(s, k) {
    // Array to store frequency of A-Z characters
    let arr = new Array(26).fill(0);

    // Left pointer of sliding window
    let left = 0;

    // Highest frequency of a single character in current window
    let maxFreq = 0;

    // Store maximum valid window length
    let maxLength = 0;

    // Expand window using right pointer
    for (let right = 0; right < s.length; right++) {

        // Convert character to index 
        let index = s.charCodeAt(right) - 65;

        // Increase frequency of current character
        arr[index]++;

        // Update max frequency in the window
        maxFreq = Math.max(maxFreq, arr[index]);

        // Current window size
        let window = right - left + 1;

        // If replacements needed > k, shrink window from left
        if (window - maxFreq > k) {
            // Remove left character from frequency count
            arr[s.charCodeAt(left) - 65]--;

            // Move left pointer forward
            left++;
        }

        // Update maximum length after adjusting window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return longest valid substring length
    return maxLength;
};