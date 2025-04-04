/**
 * @param {number[]} nums - Array of numbers
 * @param {number} k - Size of the subarray
 * @return {number} - Maximum average of any subarray of size k
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
  
    // Calculate the sum of the first 'k' elements
    for(let i = 0; i < k; i++) {
      sum += nums[i];
    }
  
    // Initialize 'maximum' with the first window sum
    let maximum = sum;
  
    // Slide the window from left to right
    for(let i = k; i < nums.length; i++) {
      // Subtract the element going out of the window and add the new element
      sum = sum - nums[i - k] + nums[i];
  
      // Update maximum if current window sum is greater
      maximum = Math.max(maximum, sum);
    }
  
    // Return the maximum average
    return maximum / k;
  };
  