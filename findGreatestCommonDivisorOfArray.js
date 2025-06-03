var findGCD = function(nums) {
    let min = Math.min(...nums); // Find minimum number
    let max = Math.max(...nums); // Find maximum number

    function gcd(a, b) {
        while (b !== 0) {           // Repeat until remainder is 0
            let temp_var = b;       // Store b temporarily
            b = a % b;              // Update b to a % b
            a = temp_var;           // Update a to old b
        }
        return a; // GCD found
    }

    return gcd(min, max); // Call gcd with min and max
};
