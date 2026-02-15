var subarraySum = function(nums, k) {
   let sum = 0;          // keeps track of running total
   let map = new Map();  // stores prefix sum and how many times we've seen it
   let count = 0;        // number of subarrays that sum to k

   map.set(0, 1);  
   // this handles the case where a subarray from index 0 itself equals k

   for (let num of nums) {
        sum += num;  // update running sum

        // if (sum - k) was seen before,
        // it means there is a subarray ending here with sum = k
        if (map.has(sum - k)) {
            count += map.get(sum - k);  
            // add how many times that prefix sum appeared
        }

        // store/update current prefix sum in map
        map.set(sum, (map.get(sum) || 0) + 1);
   }

   return count;  // total subarrays found
};
