var removeDuplicates = function(s) {
    let stack = []; // Initialize an empty stack to keep track of characters

    for (let i = 0; i < s.length; i++) { // Traverse each character in the string
        // If the current character is the same as the top of the stack
        if (stack.length !== 0 && stack[stack.length - 1] === s[i]) {
            stack.pop(); // Remove the top character from the stack
        } else {
            stack.push(s[i]); // Otherwise, add the current character to the stack
        }
    }

    return stack.join(""); // Combine the characters in the stack to form the result string
};
