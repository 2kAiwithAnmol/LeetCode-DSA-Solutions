/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    
    // If k is greater than n, take modulus to avoid unnecessary full rotations
    k = k % n; 

    // Helper function to reverse a portion of the array in-place
    function arrayInPlace(nums, left, right) {
        while (left < right) {
            // Swap nums[left] and nums[right]
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;

            left++;  // Move left pointer forward
            right--; // Move right pointer backward
        }
    }

    // Step 1: Reverse the entire array
    arrayInPlace(nums, 0, n - 1);

    // Step 2: Reverse the first k elements
    arrayInPlace(nums, 0, k - 1);

    // Step 3: Reverse the remaining elements (n - k)
    arrayInPlace(nums, k, n - 1);
};
