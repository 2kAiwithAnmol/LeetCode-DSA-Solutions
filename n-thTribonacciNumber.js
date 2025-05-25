var tribonacci = function(n) {
    let array = [0, 1, 1]; // Initialize array with the first three Tribonacci numbers
    if (n <= 2) { // If n is 0, 1, or 2, return the value directly from the array
        return array[n];
    }
    for (let i = 3; i <= n; i++) { // Iterate from 3 to n
        let temp = array[0] + array[1] + array[2]; // Calculate the next Tribonacci number
        array[0] = array[1]; // Shift the window: move array[1] to array[0]
        array[1] = array[2]; // Move array[2] to array[1]
        array[2] = temp;     // Store the newly calculated value in array[2]
    }
    return array[2]; // Return the nth Tribonacci number
};
