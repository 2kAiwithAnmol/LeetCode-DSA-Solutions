var merge = function(nums1, m, nums2, n) {
    let result = []; // Create new array to hold elements

    for(let i = 0; i < m; i++) {
        result.push(nums1[i]); // Add elements from nums1
    }

    for(let i = 0; i < n; i++) {
        result.push(nums2[i]); // Add elements from nums2
    }

    result.sort((a, b) => a - b); // Sort the combined array

    for(let i = 0; i < result.length; i++) {
        nums1[i] = result[i]; // Copy sorted elements back to nums1
    }
};
