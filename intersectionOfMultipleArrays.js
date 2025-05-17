var intersection = function(nums) {
    let map = new Map(); // Create a map to store the frequency count of each number across all subarrays
    let result = []; // Initialize the result array to store the common elements

    for (let i = 0; i < nums.length; i++) { // Loop through each subarray
        for (let j = 0; j < nums[i].length; j++) { // Loop through each element in the subarray
            map.set(nums[i][j], (map.get(nums[i][j]) || 0) + 1); // Update the frequency count of each element
        }
    }

    for (let [key, val] of map) { // Iterate through each key-value pair in the map
        if (val === nums.length) { // If the frequency equals the number of subarrays, the element is common
            result.push(key); // Add the element to the result array
        }
    }

    let sort_res = result.sort((a, b) => a - b); // Sort the result array in ascending order
    return sort_res; // Return the sorted array of common elements
};
