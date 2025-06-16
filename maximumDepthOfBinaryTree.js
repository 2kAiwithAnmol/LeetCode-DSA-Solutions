var maxDepth = function(root) {
    if (root === null) return 0;           // If tree is empty, return 0
    let queue = [];                        // Initialize an empty queue
    let maximum_dept = 0;                  // Variable to store the maximum depth of the tree
    queue.push(root);                      // Add root node to the queue

    while (queue.length > 0) {             // Loop until the queue is empty
        let levelSize = queue.length;      // Number of nodes at the current level
        for (let i = 0; i < levelSize; i++) {  // Iterate over all nodes at the current level
            let node = queue.shift();      // Remove the first node from the queue
            if (node.left !== null) {      // If left child exists, add it to the queue
                queue.push(node.left);
            }
            if (node.right !== null) {     // If right child exists, add it to the queue
                queue.push(node.right);
            }
        }
        maximum_dept++;                    // Increase depth after processing each level
    }
    return maximum_dept;                   // Return the maximum depth of the tree
};
