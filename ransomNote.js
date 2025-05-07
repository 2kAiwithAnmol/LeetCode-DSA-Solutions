var canConstruct = function(ransomNote, magazine) {
    let map1 = new Map(); // Store character counts from magazine

    if(ransomNote.length > magazine.length) return false; // If ransomNote is longer, return false

    for(let i = 0; i < magazine.length; i++) { // Count each character in magazine
        map1.set(magazine[i], (map1.get(magazine[i]) || 0) + 1);
    }

    for(let i = 0; i < ransomNote.length; i++) { // Check each character in ransomNote
        if(!map1.has(ransomNote[i]) || map1.get(ransomNote[i]) === 0) {
            return false; // Not enough characters
        }
        map1.set(ransomNote[i], map1.get(ransomNote[i]) - 1); // Use one character
    }

    return true; // All characters matched
};
