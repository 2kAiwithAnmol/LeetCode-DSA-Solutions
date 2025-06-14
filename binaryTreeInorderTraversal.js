var inorderTraversal = function(root) {
    let result = []; // Array to store the inorder traversal result

    function inOrder(node) {
        if (node === null) return; // Base case: if node is null, return

        inOrder(node.left); // Recursively traverse the left subtree
        result.push(node.val); // Visit the current node and add its value to the result
        inOrder(node.right); // Recursively traverse the right subtree
    }

    inOrder(root); // Start the inorder traversal from the root
    return result; // Return the final inorder traversal result
};
