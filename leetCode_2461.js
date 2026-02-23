var maximumSubarraySum = function(nums, k) {
    let windowSize = 0;  // stores current window sum
    let maxSize = 0;     // stores maximum valid sum
    let map = new Map(); // frequency map of elements inside window

    // Build the first window of size k
    for(let i = 0; i < k; i++) {
        windowSize = windowSize + nums[i]; // add element to current sum
        map.set(nums[i], (map.get(nums[i]) || 0 ) + 1); // increase frequency
    }

    // Check if first window has all distinct elements
    if(map.size === k) {
        maxSize = windowSize;
    }
   
    // Start sliding the window
    for(let i = k; i < nums.length; i++) {

        let left = nums[i - k]; // element leaving the window
        windowSize = windowSize - left; // remove it from sum

        map.set(left, map.get(left) - 1 ); // decrease its frequency

        // If frequency becomes 0, remove from map
        if(map.get(left) === 0) {
            map.delete(left);
        }

        let right = nums[i]; // new element entering the window
        windowSize = windowSize + right; // add it to sum

        map.set(right, (map.get(right) || 0) + 1 ); // increase frequency

        // If all elements in window are distinct
        if(map.size === k) {
            maxSize = Math.max(windowSize, maxSize); // update max sum
        }
    }

    return maxSize; // return final result
};