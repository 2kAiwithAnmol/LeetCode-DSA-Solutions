var isSameTree = function(p, q) {
    // Create queue1 to store nodes of tree p
    let queue1 = [p];

    // Create queue2 to store nodes of tree q
    let queue2 = [q];

    // Loop while both queues are not empty
    while (queue1.length !== 0 && queue2.length !== 0) {

        // Remove (dequeue) the front node from both queues
        let node1 = queue1.shift();
        let node2 = queue2.shift();

        // If both nodes are null, continue to the next pair
        if (node1 === null && node2 === null) continue;

        // If one is null or values are different, trees are not the same
        if (node1 === null || node2 === null || node1.val !== node2.val) return false;

        // Add left and right children of node1 to queue1
        queue1.push(node1.left);
        queue1.push(node1.right);

        // Add left and right children of node2 to queue2
        queue2.push(node2.left);
        queue2.push(node2.right);
    }

    // If all nodes matched, return true
    return true;
};
