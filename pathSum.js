var hasPathSum = function(root, targetSum) {
    if (root === null) return false; // If the tree is empty, there's no path, so return false

    let path = [];      // Stack to store the nodes for DFS traversal
    let sumStack = [];  // Stack to store the corresponding path sums from root to the current node

    path.push(root);         // Start with the root node
    sumStack.push(root.val); // Push the root node's value as the initial path sum

    while (path.length !== 0) {
        let temp = path.pop();         // Pop the top node from the path stack
        let tempVal = sumStack.pop();  // Pop the corresponding path sum

        // Check if it's a leaf node and the path sum matches the target
        if (temp.left === null && temp.right === null && tempVal === targetSum) {
            return true; // Found a valid path
        }

        // If the right child exists, push it and its path sum to the stacks
        if (temp.right !== null) {
            path.push(temp.right);
            sumStack.push(temp.right.val + tempVal); // Add current node's value to the path sum
        }

        // If the left child exists, push it and its path sum to the stacks
        if (temp.left !== null) {
            path.push(temp.left);
            sumStack.push(temp.left.val + tempVal);
        }
    }

    return false; // No valid path found
};
