var replaceElements = function(arr) {
    let maxSo = -1; // Variable to store the greatest value to the right

    // Iterate through the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];        // Store the current value before overwriting
        arr[i] = maxSo;              // Replace current element with the greatest value so far
        maxSo = Math.max(current, maxSo); // Update the greatest value seen so far
    }

    return arr;
};
