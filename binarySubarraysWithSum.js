var numSubarraysWithSum = function(nums, goal) {
    let map = new Map(); // Map to store the frequency of prefix sums
    let sum = 0;         // Current prefix sum
    let result = 0;      // Count of subarrays with the given sum

    map.set(0, 1);       // Initialize with prefix sum 0 occurring once

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];  // Update prefix sum

        // Check if there is a prefix sum that would form a subarray with sum equal to goal
        if (map.has(sum - goal)) {
            result += map.get(sum - goal); // Add its frequency to the result
        }

        // Update the frequency of the current prefix sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return result; // Return the total count
};
