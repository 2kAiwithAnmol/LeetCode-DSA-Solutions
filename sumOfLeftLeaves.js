var sumOfLeftLeaves = function(root) {
    let sum = 0; // Variable to store the sum of left leaf nodes

    if (!root) return 0; // If the tree is empty, return 0

    if (root.left) { // Check if there is a left child
        // Check if the left child is a leaf node (no left or right child)
        if (!root.left.left && !root.left.right) {
            sum += root.left.val; // Add the value of the left leaf node to the sum
        } else {
            sum += sumOfLeftLeaves(root.left); // Recursively call for the left subtree
        }
    }

    // Recursively call for the right subtree 
    sum += sumOfLeftLeaves(root.right);

    return sum; // Return the final sum
};
