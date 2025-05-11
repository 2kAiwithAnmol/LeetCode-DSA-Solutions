var topKFrequent = function(nums, k) {
    let map = new Map(); // To store frequency of each number
    let result = []; // To store final top K elements

    // Count frequency of each number
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    // Create empty buckets 
    let bucket = Array.from({ length: nums.length + 1 }).fill().map(() => []);

    // Put numbers into their corresponding frequency bucket
    for (let [key, val] of map) {
        bucket[val].push(key);
    }

    // Start from highest frequency and collect top K frequent numbers
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result; // Return top K frequent numbers
};
