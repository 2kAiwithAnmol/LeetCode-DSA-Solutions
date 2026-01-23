var lowestCommonAncestor = function(root, p, q) {

    //if current node is null, return null
    if (root === null) {
        return null;
    }

    // If current node matches either p or q,
    // this node could be the LCA
    if (root === p || root === q) {
        return root;
    }

    // Recursively search in the left subtree
    let leftLCA = lowestCommonAncestor(root.left, p, q);

    // Recursively search in the right subtree
    let rightLCA = lowestCommonAncestor(root.right, p, q);

    // If p and q are found in different subtrees,
    // current node is the lowest common ancestor
    if (leftLCA && rightLCA) {
        return root;
    }

    // If both nodes are found in the left subtree
    else if (leftLCA !== null) {
        return leftLCA;
    }

    // If both nodes are found in the right subtree 
    else {
        return rightLCA;
    }
};
