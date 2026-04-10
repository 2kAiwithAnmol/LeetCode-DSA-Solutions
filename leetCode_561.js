var arrayPairSum = function(nums) {
    let ans = 0; // this will store our final answer

    // sort the array in ascending order
    nums.sort((a, b) => a - b);

    // loop through the array and pick every second element
    // (these will be the smaller numbers in each pair)
    for (let i = 0; i < nums.length; i += 2) {
        ans += nums[i]; // add the current smallest value in the pair
    }

    // return the maximum possible sum
    return ans;
};