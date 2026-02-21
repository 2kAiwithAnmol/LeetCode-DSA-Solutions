var findAnagrams = function(s, p) {
    // Array to store frequency of letters in current window of s
    let sCount = new Array(26).fill(0);
    
    // Array to store frequency of letters in p
    let pCount = new Array(26).fill(0);
    
    // Final result array
    let result = [];

    // Build frequency for p and the first window of s
    for(let i = 0; i < p.length; i++) {
        // Count character in s
        sCount[s.charCodeAt(i) - 97]++;
        
        // Count character in p
        pCount[p.charCodeAt(i) - 97]++;
    }

    // Check if first window is an anagram
    if(isEqual(sCount, pCount)) result.push(0);

    // Slide the window through the rest of s
    for(let i = p.length; i < s.length; i++) {
        // Add new character entering the window
        sCount[s.charCodeAt(i) - 97]++;
        
        // Remove old character leaving the window
        sCount[s.charCodeAt(i - p.length) - 97]--;
        
        // If counts match, we found an anagram
        if(isEqual(sCount,pCount)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};

// Compare two frequency arrays
function isEqual(sCount, pCount) {
    for(let i = 0; i < 26; i++) {
        // If any letter count is different, not an anagram
        if(sCount[i] !== pCount[i]) {
            return false;
        }
    }
    // All counts match → it's an anagram
    return true;
}