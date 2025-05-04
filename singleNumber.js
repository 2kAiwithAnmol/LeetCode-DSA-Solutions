var singleNumber = function(nums) {
    let res = nums[0]; // Start with first number
    for(let i = 0; i < nums.length - 1; i++) { // Loop through rest of the array
        res ^= nums[i + 1]; // XOR with next number
    }
    return res; // Return the number that appears once
};
