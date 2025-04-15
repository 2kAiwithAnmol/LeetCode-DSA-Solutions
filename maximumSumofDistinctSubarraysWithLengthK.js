var maximumSubarraySum = function(nums, k) {
    let set = new Set();       // To store unique elements in current window
    let left = 0;              // Left pointer of the sliding window
    let currSum = 0;           // Current sum of elements in the window
    let maximum = 0;           // Stores the maximum sum of valid windows

    for (let right = 0; right < nums.length; right++) {
        // Remove duplicates by shrinking window from the left
        while (set.has(nums[right])) {
            set.delete(nums[left]);
            currSum -= nums[left];
            left++;
        }

        // Add current element to the window
        set.add(nums[right]);
        currSum += nums[right];

        // If window size equals k, update max and slide window
        if (right - left + 1 === k) {
            maximum = Math.max(currSum, maximum);
            set.delete(nums[left]);
            currSum -= nums[left];
            left++;
        }
    }

    return maximum;
};
