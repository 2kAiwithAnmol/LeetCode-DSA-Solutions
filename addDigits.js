var addDigits = function(num) {
    if (num < 10) return num; // If num is a single-digit number, return it directly
    else {
        return singleDig(num); // Otherwise, call the helper function to reduce it
    }
};

var singleDig = function(input) {
    let result = 0; // Initialize a variable to store the sum of digits
    while (input > 0) { // Loop until all digits are processed
        result += input % 10; // Add the last digit of input to result
        input = Math.floor(input / 10); // Remove the last digit from input
    } 
    if (result < 10) { // If the result is a single-digit number
        return result; // Return the result
    } else {
        return singleDig(result); // Recursively call the function until a single-digit result is obtained
    }
};
