/**
 * @param {string} s
 * @return {number}
 * 
 * This function finds the length of the longest substring without repeating characters.
 * It uses the Sliding Window (Two Pointer) technique.
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0; // Left pointer for the sliding window
    let right = 0; // Right pointer for the sliding window
    let hashSet = new Set(); // HashSet to store unique characters in the window
    let maxLength = 0; // Variable to track the maximum length of substring

    // Traverse the string using the right pointer
    while (right < s.length) {
        // If the character at the right pointer is already in the set,
        // remove the leftmost character and move the left pointer forward
        while (hashSet.has(s[right])) {
            hashSet.delete(s[left]);
            left++;
        }
        
        // Add the new character to the set and expand the window
        hashSet.add(s[right]);
        right++;

        // Update the max length of substring found so far
        maxLength = Math.max(maxLength, right - left);
    }
    
    return maxLength; // Return the maximum length of substring found
};
