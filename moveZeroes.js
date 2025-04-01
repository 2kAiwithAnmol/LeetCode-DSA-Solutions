/**
 * @param {number[]} nums - Input array containing numbers including zeros
 * @return {void} - Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0; // Pointer to track the position for non-zero elements

    // Traverse the array
    for (let j = 0; j < nums.length; j++) {
        // If the current element is non-zero, swap it with the element at index i
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap non-zero element to the front
            i++; // Move the pointer forward
        }
    }

    // The function modifies nums in-place, so no need to return it
};
