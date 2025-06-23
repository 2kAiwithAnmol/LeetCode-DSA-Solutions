var plusOne = function(digits) {
    // Start iterating from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, simply increment and return
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        // If the digit is 9, set it to 0 and continue to carry over
        digits[i] = 0;
    }
    // If all digits were 9, insert 1 at the beginning to handle the carry
    digits.unshift(1);
    return digits;
};
