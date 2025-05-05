var intersect = function(nums1, nums2) {
    let map1 = new Map(); // Create a map to store frequency of elements in nums1
    let map2 = new Map(); // Create a map to store frequency of elements in nums2
    let result = [];

    // Count frequency of each element in nums1
    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1);
    }

    // Count frequency of each element in nums2
    for (let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], (map2.get(nums2[i]) || 0) + 1);
    }

    // Compare both maps to find common elements
    for (let [key, val1] of map1) {
        if (map2.has(key)) {
            let val2 = map2.get(key);
            let count = Math.min(val1, val2); // Get minimum frequency of the common element

            // Add the element 'count' times to result
            for (let i = 0; i < count; i++) {
                result.push(key);
            }
        }
    }

    return result;
};
