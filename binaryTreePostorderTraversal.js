var postorderTraversal = function(root) {
    let result = []; // Create an array to store the postorder traversal result

    function postOrder(node) {
        if (node === null) return; // If the current node is null, return

        postOrder(node.left);  // Recursively traverse the left subtree
        postOrder(node.right); // Recursively traverse the right subtree
        result.push(node.val); // Visit the root node (add its value to the result)
    }

    postOrder(root); // Start the postorder traversal from the root
    return result;   // Return the final result array
};
