var uniqueOccurrences = function(arr) {
    let map = new Map(); // Create a map to store the frequency of each element
    
    for (let i = 0; i < arr.length; i++) { // Iterate through the array
        map.set(arr[i], (map.get(arr[i]) || 0) + 1); // Update the frequency count for the current element
    }
    
    let freqSet = new Set(); // Create a set to track unique frequencies
    
    for (let [key, val] of map) { // Iterate through each key-value pair in the map
        if (freqSet.has(val)) { // If the frequency is already in the set
            return false; // Duplicate frequency found, return false
        }
        freqSet.add(val); // Add the frequency to the set
    }
    
    return true; // All frequencies are unique, return true
};
