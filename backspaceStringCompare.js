var backspaceCompare = function(s, t) {
    let stack1 = []; // Stack to process string s
    let stack2 = []; // Stack to process string t

    // Process string s
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            stack1.pop(); // Remove the last character on backspace
        } else {
            stack1.push(s[i]); // Push the character to the stack
        }
    }

    // Process string t
    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            stack2.pop(); // Remove the last character on backspace
        } else {
            stack2.push(t[i]); // Push the character to the stack
        }
    }

    // Compare final strings formed from both stacks
    return stack1.join('') === stack2.join('');
};