var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0; // Initialize the left pointer
    let count = 0; // Initialize the count of valid subarrays
    let product = 1; // Initialize the product of elements in the current window

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]; // Multiply the current element to the product

        // Shrink the window from the left if the product becomes greater than or equal to k
        while (product >= k && left <= right) {
            product /= nums[left]; // Divide the leftmost element from the product
            left++; // Move the left pointer forward
        }

        // Add the number of valid subarrays ending at the current 'right' pointer
        count += right - left + 1;
    }

    return count;
};
