var invertTree = function(root) {
    if (root === null) return null; // Return null if tree is empty

    let queue = []; // Initialize queue for BFS
    queue.push(root); // Start with root node

    while (queue.length !== 0) {
        let node = queue.shift(); // Dequeue the front node

        // Swap left and right children
        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        // Enqueue non-null children
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

    return root; // Return the inverted tree
};
