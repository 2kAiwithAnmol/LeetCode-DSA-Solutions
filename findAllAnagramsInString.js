var findAnagrams = function(s, p) {
    let sMap = new Map(); // Current window frequency
    let pMap = new Map(); // Frequency of p
    let result = [];

    // Build pMap
    for (let char of p) {
        pMap.set(char, (pMap.get(char) || 0) + 1);
    }

    // Slide window on s
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);

        // Remove left char if window size > p
        if (i >= p.length) {
            let leftChar = s[i - p.length];
            if (sMap.get(leftChar) === 1) {
                sMap.delete(leftChar);
            } else {
                sMap.set(leftChar, sMap.get(leftChar) - 1);
            }
        }

        // Compare maps
        let isEqual = true;
        if (sMap.size === pMap.size) {
            for (let [key, val] of pMap) {
                if (sMap.get(key) !== val) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) result.push(i - p.length + 1);
        }
    }

    return result;
};
