var pivotIndex = function(nums) {
    let leftSum = 0;
    let n = nums.length;
    let rightSum = 0;

    // Step 1: Calculate total sum of the array (initial rightSum)
    for (let i = 0; i < n; i++) {
        rightSum += nums[i];
    }

    // Step 2: Traverse the array to find the pivot index
    for (let i = 0; i < n; i++) {
        let val = nums[i];

        // Before comparing, subtract current value from rightSum
        rightSum -= val;

        // If left sum and right sum are equal, we found the pivot index
        if (leftSum === rightSum) return i;

        // Add current value to leftSum for the next iteration
        leftSum += val;
    }

    // Step 3: If no pivot index is found, return -1
    return -1;
};
