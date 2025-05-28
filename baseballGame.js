var calPoints = function(operations) {
    let stack = []; // Stack to store valid round scores
    let result = 0; // Variable to store the final total score

    for (let i = 0; i < operations.length; i++) { // Iterate through each operation
        if (operations[i] === "C") { 
            // "C" means cancel the last valid score
            stack.pop(); 
        } 
        else if (operations[i] === "D") { 
            // "D" means double the last valid score and add to stack
            stack.push(2 * stack[stack.length - 1]); 
        } 
        else if (operations[i] === "+") { 
            // "+" means add the sum of the last two valid scores
            let last = stack[stack.length - 1]; 
            let lastBefore = stack[stack.length - 2]; 
            stack.push(last + lastBefore); 
        } 
        else {
            // Otherwise, it's a numeric score — convert string to number and push
            stack.push(parseInt(operations[i])); 
        }
    }

    // Sum up all valid scores from the stack
    while (stack.length !== 0) {
        result += stack.pop(); 
    }

    return result; // Return the final total score
};