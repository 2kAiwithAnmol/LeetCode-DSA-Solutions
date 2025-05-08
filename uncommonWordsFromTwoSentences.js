var uncommonFromSentences = function(s1, s2) {
    let s3 = (s1 + " " + s2).split(' '); // Combine both strings and split into words
    let map1 = new Map(); // Map to store word frequency
    let result = []; // Array to store uncommon words

    for(let i = 0; i < s3.length; i++) {
        map1.set(s3[i], (map1.get(s3[i]) || 0) + 1); // Count word frequency
    }

    for(let [key, value] of map1) {
        if(value === 1) { // If word appears only once
            result.push(key); // Add to result
        }
    }

    return result; // Return uncommon words
};
