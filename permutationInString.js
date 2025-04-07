var checkInclusion = function(s1, s2) {
    // Store frequency of each character in s1
    let s1Map = new Map();
    // Store frequency of current window in s2
    let s2Map = new Map();

    // Not used here but can help if needed later
    let left = 0;

    // Count characters in s1
    for(let char of s1) {
        s1Map.set(char, (s1Map.get(char) || 0) + 1);
    }

    // Slide a window over s2
    for(let right = 0; right < s2.length; right++) {
        // Add current character to s2Map
        s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);

        // If window size is bigger than s1, remove leftmost char
        if(right >= s1.length) {
            let leftchar = s2[right - s1.length];
            if(s2Map.get(leftchar) === 1) {
                s2Map.delete(leftchar); // remove character if count becomes 0
            } else {
                s2Map.set(leftchar, (s2Map.get(leftchar)) - 1); // decrease count
            }
        }

        // Now compare both maps
        if(s1Map.size === s2Map.size) {
            let isEqual = true;
            for(let [key, val] of s1Map) {
                if(s2Map.get(key) !== val) {
                    isEqual = false;
                    break;
                }
            }

            // If both maps are equal, return true
            if(isEqual) return true;
        }
    }

    // If no matching window found
    return false;
};
