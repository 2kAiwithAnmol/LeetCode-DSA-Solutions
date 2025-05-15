var kthDistinct = function(arr, k) {
  let map = new Map(); // Store frequency of each string

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1); // Count frequency
  }

  let count = 0; // Track how many distinct strings found

  for (let [key, val] of map) {
    if (val === 1) { // If string is distinct
      count++;
      if (count === k) {
        return key; // Return k-th distinct string
       } 
    }
  }

  return ""; // If less than k distinct strings exist
};
