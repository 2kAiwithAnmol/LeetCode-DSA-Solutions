var removeElement = function(nums, val) {
    let result = 0; // Result variable to keep track of new array length
    
    for (let i = 0; i < nums.length; i++) { // Loop through each element in the array
        if (nums[i] !== val) { // If the current element is not equal to the value to remove
            nums[result] = nums[i]; // Move the current element to the 'result' index
            result++; // Increase the result counter
        }
    }
    
    return result; // Return the length of the modified array
};
