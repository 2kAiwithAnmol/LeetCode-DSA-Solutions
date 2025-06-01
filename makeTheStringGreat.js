var makeGood = function(s) {
    let stack = []; // Stack to store characters of the resulting string
    for(let i = 0; i < s.length; i++) {
        if(stack.length !== 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0)) === 32) {
           // If stack is not empty and the current character and the top of the stack differ by 32
            stack.pop(); // Remove the top character as it forms a bad pair with current character
        }
        else {
            stack.push(s[i]); // Otherwise, push the current character onto the stack
        }
    }
    return stack.join('')// Return the resulting good string
};