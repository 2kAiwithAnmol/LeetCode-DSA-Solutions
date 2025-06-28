var sortedSquares = function(nums) {
    let left = 0; // Initialize the left pointer at the beginning of the array
    let right = nums.length - 1; // Initialize the right pointer at the end of the array
    let result = new Array(nums.length); // Create a result array with the same length as nums
    let position = nums.length - 1; // Position to insert the next largest square

    while (left <= right) { // Loop until left and right pointers meet or cross
        let leftSq = nums[left] * nums[left]; // Square of the left element
        let rightSq = nums[right] * nums[right]; // Square of the right element

        if (leftSq > rightSq) { // If left square is greater, place it at the current position
            result[position] = leftSq;
            left++; // Move left pointer to the right
        } else { // Otherwise, place the right square at the current position
            result[position] = rightSq;
            right--; // Move right pointer to the left
        }

        position--; // Move to the next position from the end
    }

    return result; // Return the sorted array of squares
};
