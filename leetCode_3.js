var lengthOfLongestSubstring = function(s) {
    let Maximum = 0;          // stores the length of the longest valid substring
    let set = new Set();      // keeps track of characters in current window
    let left = 0;             // left pointer of sliding window

    for (let right = 0; right < s.length; right++) {  // move right pointer
        // if current character is already in the set,
        // shrink the window from the left until duplicate is removed
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // add current character to the set
        set.add(s[right]);

        // update maximum length
        Maximum = Math.max(Maximum, right - left + 1);
    }

    return Maximum;  // return final answer
};
