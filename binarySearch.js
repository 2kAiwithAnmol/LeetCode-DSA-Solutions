var search = function(nums, target) {
  let left = 0;                // Initialize left pointer at the start of the array
  let right = nums.length - 1; // Initialize right pointer at the end of the array

  while (left <= right) {      // Continue searching while left is less than or equal to right
    let middle = Math.floor((left + right) / 2); // Calculate the middle index

    if (nums[middle] === target) {  // If target is found at middle index
      return middle;                 // Return the index
    } 
    else if (nums[middle] < target) { // If middle element is less than target
      left = middle + 1;              // Move left pointer to the right half
    } 
    else {                           // If middle element is greater than target
      right = middle - 1;            // Move right pointer to the left half 
    }
  }

  return -1;  // Target not found in the array, return -1
};
