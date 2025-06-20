var rangeSumBST = function(root, low, high) {
    let sum = 0; // Variable to store the total sum of values within the given range
    let stack = []; // Stack to assist with iterative traversal of the tree
    stack.push(root); // Start traversal by pushing the root node into the stack

    while (stack.length > 0) {
        let node = stack.pop(); // Pop the top node from the stack

        if (node !== null) { // If the node is not null, process it
            if (node.val >= low && node.val <= high) { // If the node's value is within the given range
                sum += node.val; // Add the node's value to the sum
            }

            if (node.val > low) { // If the node's value is greater than low,
                stack.push(node.left); // its left child might also be within the range
            }

            if (node.val < high) { // If the node's value is less than high,
                stack.push(node.right); // its right child might also be within the range
            }
        }
    }

    return sum; // Return the final calculated sum
};
