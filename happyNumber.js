var isHappy = function(n) {
    let set = new Set(); // To store numbers we have already seen

    // Repeat the process until we reach 1 or find a cycle
    while (n !== 1 && !set.has(n)) {
        set.add(n); // Add current number to the set

        let sum = 0;
        // Calculate the sum of squares of digits
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum; // Update n to the new sum
    }

    // If we reach 1, it is a happy number
    return n === 1;
};
