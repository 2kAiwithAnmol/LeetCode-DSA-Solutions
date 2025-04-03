/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;            // Pointer to place 0s
    let middle = 0;          // Pointer to traverse the array
    let right = nums.length - 1; // Pointer to place 2s
    
    while (middle <= right) {  
        if (nums[middle] === 0) {  
            // If we find a 0, swap it with the element at 'left' pointer
            [nums[middle], nums[left]] = [nums[left], nums[middle]];
            middle++;  // Move middle pointer forward
            left++;    // Move left pointer forward
        } 
        else if (nums[middle] === 1) {  
            // If we find a 1, just move the middle pointer forward
            middle++;
        } 
        else {  
            // If we find a 2, swap it with the element at 'right' pointer
            [nums[middle], nums[right]] = [nums[right], nums[middle]];
            right--;  // Move right pointer backward
            // Do NOT move middle pointer here, because swapped element from 'right' might be 0 or 1
        }
    }
};
