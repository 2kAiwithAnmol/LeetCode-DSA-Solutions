var isValid = function(s) {
    let stack = []; // Initialize a stack to keep track of expected closing brackets

    for (let b of s) { // Iterate through each character in the input string
        if (b === '(') {
            stack.push(')'); // Push expected closing bracket for '('
        } else if (b === '{') {
            stack.push('}'); // Push expected closing bracket for '{'
        } else if (b === '[') {
            stack.push(']'); // Push expected closing bracket for '['
        } else {
            // If the stack is empty or the top of the stack doesn't match the current closing bracket
            if (stack.length === 0 || stack.pop() !== b) {
                return false; // Mismatched or unbalanced brackets — return false
            }
        }
    }

    // If the stack is empty at the end, all brackets were properly closed
    return stack.length === 0;
};