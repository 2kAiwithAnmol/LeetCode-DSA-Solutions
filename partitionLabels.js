var partitionLabels = function(s) {
    let map = new Map(); // Stores the last index of each character
    let result = [];     // Stores lengths of partitions
    let start = 0;       // Start index of current partition
    let end = 0;         // End index of current partition

    // Build the map with the last index of each character
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }

    // Iterate through the string to create partitions
    for (let i = 0; i < s.length; i++) {
        let lastChar = map.get(s[i]);      // Get last index of current character
        end = Math.max(end, lastChar);     // Update the partition end

        if (i === end) {                   // If current index is partition end
            result.push(end - start + 1);  // Push partition length
            start = i + 1;                 // Move start to next index
        }
    }

    return result; // Return the list of partition lengths
};
