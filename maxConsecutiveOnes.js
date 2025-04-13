var findMaxConsecutiveOnes = function(nums) {
    let count = 0;       // To count current 1s in a row
    let maxCount = 0;    // To keep the highest number of 1s in a row

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;    // If we see 1, increase the count
            maxCount = Math.max(count, maxCount);  // Update max if current is more
        } else {
            count = 0;  // If we see 0, reset the count
        }
    }

    return maxCount; // Return the biggest count of 1s in a row
};
