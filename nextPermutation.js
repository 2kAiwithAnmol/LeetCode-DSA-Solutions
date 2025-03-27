/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // Step 1: Find the first decreasing element from the right
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: If such an element is found, swap it with the next larger element
    if(i >= 0) {
        let j = nums.length - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }
        // Swap nums[i] and nums[j] to get a slightly larger permutation
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse the sequence after index i to get the next smallest permutation
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums; // Return modified nums array
};
