var frequencySort = function(s) {
    let map = new Map(); // Create a map to store the frequency of each character
    let result = ""; // Initialize an empty string to store the result

    // Count the frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    // Convert the map to an array and sort it based on frequency in descending order
    let newArray = Array.from(map).sort((a, b) => b[1] - a[1]);

    // Build the result string by repeating characters based on their frequency
    for (let [key, val] of newArray) {
        result += key.repeat(val);
    }

    return result; // Return the final sorted string
};
