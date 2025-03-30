/**
 * LeetCode Problem: Remove Duplicates from Sorted Array
 * This function removes duplicates from a sorted array in-place and returns the new length.
 * 
 * @param {number[]} nums - Sorted integer array
 * @return {number} - Length of the array after removing duplicates
 */

var removeDuplicates = function(nums) {
    let i = 0; // Pointer to track the position of unique elements

    // Iterate through the array starting from index 1
    for (let j = 1; j < nums.length; j++) {
        // If a new unique element is found, move it forward
        if (nums[i] !== nums[j]) {
            i++; // Increment unique element index
            nums[i] = nums[j]; // Place the unique element at the correct position
        }
    }

    // Return the length of the array after removing duplicates
    return i + 1;
};
