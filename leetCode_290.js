var wordPattern = function(pattern, s) {
    // Split the string into words
    let words = s.split(" ");
    
    // If pattern length and number of words are different, it can't match
    if (pattern.length !== words.length) return false;

    // Map to store pattern -> word
    let map = new Map();
    
    // Map to store word -> pattern (to prevent duplicates)
    let reverseMap = new Map();

    for (let i = 0; i < pattern.length; i++) {

        // If pattern character already has a mapped word
        if (map.has(pattern[i])) {
            // Check if it matches current word
            if (map.get(pattern[i]) !== words[i]) return false;
        } else {
            // Otherwise create new mapping
            map.set(pattern[i], words[i]);
        }

        // Now check reverse mapping (word -> pattern)
        if (reverseMap.has(words[i])) {
            // If word is already mapped to different pattern char → fail
            if (reverseMap.get(words[i]) !== pattern[i]) return false;
        } else {
            // Otherwise create reverse mapping
            reverseMap.set(words[i], pattern[i]);
        }
    }

    // If all checks pass, pattern matches
    return true;
};