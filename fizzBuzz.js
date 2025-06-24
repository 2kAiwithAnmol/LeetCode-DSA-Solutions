var fizzBuzz = function(n) {
    let result = []; // Array to store the output strings

    for (let i = 1; i <= n; i++) { // Loop from 1 to n inclusive
        if (i % 3 === 0 && i % 5 === 0) { // If divisible by both 3 and 5
            result.push("FizzBuzz"); // Add "FizzBuzz" to result
        } else if (i % 3 === 0) { // If divisible by 3 only
            result.push("Fizz"); // Add "Fizz" to result
        } else if (i % 5 === 0) { // If divisible by 5 only
            result.push("Buzz"); // Add "Buzz" to result
        } else {
            result.push(String(i)); // Otherwise add the number as a string
        }
    }

    return result; // Return the final array
};
