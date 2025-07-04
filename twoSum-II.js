var twoSum = function(numbers, target) {
    let left = 0; // Initialize the left pointer at the beginning of the array
    let right = numbers.length - 1; // Initialize the right pointer at the end of the array

    while (left <= right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) { // If the sum matches the target
            return [left + 1, right + 1]; // Return 1-based indices as required
        } else if (sum > target) { // If the sum is greater than the target
            right--; // Move the right pointer to the left to reduce the sum
        } else { // If the sum is less than the target
            left++; // Move the left pointer to the right to increase the sum
        }
    }
};
