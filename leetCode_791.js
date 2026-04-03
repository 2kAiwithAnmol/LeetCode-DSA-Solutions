//Optimized approach
var customSortString = function(order, s) {
    let map = new Map();   // to store frequency of each character in s
    let res = "";          // final result string

    // Count how many times each character appears in s
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // Build result using the order string
    for (let i = 0; i < order.length; i++) {
        let ch = order[i];             // current character from order
        let count = map.get(ch);       // how many times it appears in s

        // Add this character 'count' times to result
        for (let j = 0; j < count; j++) {
            res += ch;
        }

        // Remove it from map so it won't be reused later
        map.delete(ch);
    }

    // Step 3: Add remaining characters (not present in order)
    for (let [ch, count] of map) {
        for (let i = 0; i < count; i++) {
            res += ch;
        }
    }

    // Return final sorted string
    return res;
};
//Brute force 
var customSortString = function(order, s) {
    let res = ""; // this will store our final answer

    //Place characters in the order given by 'order'
    for (let i = 0; i < order.length; i++) {

        // check every character of string 's'
        for (let j = 0; j < s.length; j++) {

            // if characters match, add it to result
            if (order[i] === s[j]) {
                res += s[j];
            }
        }
    }

    //Add characters that are not present in 'order'
    for (let j = 0; j < s.length; j++) {

        // if current character is not in 'order'
        if (!order.includes(s[j])) {
            res += s[j]; // add it at the end
        }
    }

    return res; // return the final sorted string
};