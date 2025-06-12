var preorderTraversal = function(root) {
    let ans = []; // Create a variable to store the result

    function preOrder(node) {
        if (node === null) return; // If the current node is null, return

        ans.push(node.val);       // Visit the root node (add its value to the result)
        preOrder(node.left);      // Recursively traverse the left subtree
        preOrder(node.right);     // Recursively traverse the right subtree
    }

    preOrder(root); // Start the traversal from the root
    return ans;     // Return the final result array
};
