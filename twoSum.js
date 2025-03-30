/**
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum to find
 * @return {number[]} - Indices of the two numbers that add up to the target
 */
var twoSum = function(nums, target) {
    let map = new Map(); // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Calculate the complement required to reach the target
        
        // Check if the complement already exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices of the two numbers
        }

        // Store the current number with its index in the map
        map.set(nums[i], i);
    }

    return []; // Return an empty array if no solution is found (this case won't happen as per problem constraints)
};
