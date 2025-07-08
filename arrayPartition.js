var arrayPairSum = function(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize a variable to store the sum of min elements in pairs
    let sum = 0;

    // Loop through the array, incrementing by 2 to access every first element in each pair
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]; // Add the smaller element of the pair 
    }

    // Return the total sum
    return sum;
};
