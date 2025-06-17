var isSymmetric = function(root) {
    let queue1 = []; // Queue to traverse the left subtree
    let queue2 = []; // Queue to traverse the right subtree

    queue1.push(root.left);  // Push the left child of the root into queue1
    queue2.push(root.right); // Push the right child of the root into queue2

    while (queue1.length > 0 && queue2.length > 0) {
        let leftNode = queue1.shift();  // Dequeue the front node from queue1
        let rightNode = queue2.shift(); // Dequeue the front node from queue2

        if (leftNode === null && rightNode === null) continue; // Both nodes are null — symmetry holds here, skip to next
        if (leftNode === null || rightNode === null) return false; // One is null and the other isn't — not symmetric
        if (leftNode.val !== rightNode.val) return false; // Values are different — not symmetric

        // Add children in the correct order to compare mirror positions
        queue1.push(leftNode.left);     // Left child of leftNode
        queue1.push(leftNode.right);    // Right child of leftNode

        queue2.push(rightNode.right);   // Right child of rightNode (mirrored)
        queue2.push(rightNode.left);    // Left child of rightNode (mirrored)
    }

    return true; // All checks passed — tree is symmetric
};
