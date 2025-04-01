/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Create a Set from nums1 to store unique elements
    let set = new Set(nums1);
    
    // Initialize an empty array to store the result
    let result = [];
    
    // Iterate through each element of nums2
    for(let i = 0; i < nums2.length; i++) {
        // If the current element of nums2 is found in the set (nums1)
        if(set.has(nums2[i])) {
            // Add the element to the result array
            result.push(nums2[i]);
            // Once the element is found, delete it from the set to avoid duplicates in the result
            set.delete(nums2[i]);
        }
    }
    
    // Return the result array containing the intersection of nums1 and nums2
    return result;
};
