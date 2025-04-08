var minSubArrayLen = function(target, nums) {
    let left = 0;                // Start of the sliding window
    let sum = 0;                 // Sum of current window
    let minLength = Infinity;   // Store the smallest valid window length

    // Expand the window with 'right' pointer
    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];     // Add current number to the window's sum

        // Shrink the window from the left as long as the sum is enough
        while(sum >= target) {
            // Update the minimum length if this window is smaller
            minLength = Math.min(minLength, right - left + 1);

            // Remove the leftmost element from the window and move left pointer forward
            sum -= nums[left];
            left++;
        }
    }

    // If no valid subarray found, return 0
    return minLength === Infinity ? 0 : minLength;
};
