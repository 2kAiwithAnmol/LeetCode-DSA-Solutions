var dailyTemperatures = function(temperatures) {
    let stack = []; // Stack to store indices of temperatures (monotonic decreasing stack)
    let result = new Array(temperatures.length).fill(0); // Initialize result array with 0s

    for (let i = 0; i < temperatures.length; i++) {
        // While current temperature is greater than temperature at top index of stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop(); // Pop the index from stack
            result[index] = i - index; // Calculate the number of days waited
        }
        stack.push(i); // Push current index onto the stack
    }

    return result; // Return the final result array
};
