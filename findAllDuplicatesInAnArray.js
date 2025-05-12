var findDuplicates = function(nums) {
    let result = []; // Store elements that appear twice

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1; // Get index based on current number

        if (nums[index] < 0) {
            result.push(Math.abs(nums[i])); // If already negative, it's a duplicate
        } else {
            nums[index] = -nums[index]; // Mark index as visited by negating
        }
    }

    return result;
};
