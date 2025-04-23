var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let maxCount = 0; // To track the count of the most frequent character in the current window
    let freq = {};    // To store character frequencies in the current window
    let result = 0;   // Final result: the longest valid substring length

    while (right < s.length) {
        // Add the current character to the frequency map
        freq[s[right]] = (freq[s[right]] || 0) + 1;

        // Update maxCount with the highest frequency in the current window
        maxCount = Math.max(maxCount, freq[s[right]]);

        // If the number of characters to replace exceeds k, shrink the window
        while ((right - left + 1) - maxCount > k) {
            freq[s[left]]--; // Remove the leftmost character from the window
            left++;          // Move the window forward
        }

        // Update the result with the length of the current valid window
        result = Math.max(result, right - left + 1);

        // Expand the window to the right
        right++;
    }

    return result;
}; 