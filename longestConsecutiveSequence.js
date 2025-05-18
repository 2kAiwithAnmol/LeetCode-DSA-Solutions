var longestConsecutive = function(nums) {
    // Create a set to store unique elements for quick lookup
    let set = new Set(nums);

    // Variable to keep track of the longest consecutive sequence length
    let longestSize = 0;

    // Iterate through each unique number in the set
    for (let num of set) {
        // Previous number doesn't exist
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLen = 1;

            // Count how long the consecutive sequence continues
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentLen += 1;
            }

            // Update the maximum length found so far
            longestSize = Math.max(longestSize, currentLen);
        }
    }

    // Return the length of the longest consecutive sequence
    return longestSize;
};
