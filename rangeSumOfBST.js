var rangeSumBST = function(root, low, high) {
    // Base case: if current node is null, return 0 as there are no values to add
    if (root === null) {
        return 0;
    }

    let sum = 0; // Initialize sum for this subtree

    // If current node's value is greater than low, nodes in the left subtree might be in range
    if (root.val > low) {
        // Recur on left child and add the result to sum
        sum += rangeSumBST(root.left, low, high);
    }

    // If current node's value is within the range [low, high], include it in sum
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    // If current node's value is less than high, nodes in the right subtree might be in range
    if (root.val < high) {
        // Recur on right child and add the result to sum
        sum += rangeSumBST(root.right, low, high);
    }

    // Return the sum calculated for this subtree
    return sum;
};