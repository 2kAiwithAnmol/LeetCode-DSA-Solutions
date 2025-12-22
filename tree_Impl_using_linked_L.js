// Define the Node class
class Node {
    constructor(value) {
        this.value = value; // The value of the node
        this.left = null;   // Pointer to the left child
        this.right = null;  // Pointer to the right child
    }
}

// Define the BinaryTree class
class BinaryTree {
    constructor() {
        this.root = null; // The root node of the tree
    }

    // Insert a value into the tree
    insert(value) {
        const newNode = new Node(value); // Create a new node
        if (this.root === null) {
            this.root = newNode; // If the tree is empty, the new node becomes the root
        } else {
            this._insertNode(this.root, newNode); // Otherwise, insert the node at the correct position
        }
    }

    // Helper method to insert a node (private method for recursion)
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // If the new value is smaller, go to the left child
            if (node.left === null) {
                node.left = newNode; // Insert it as the left child
            } else {
                this._insertNode(node.left, newNode); // Recursively insert in the left subtree
            }
        } else {
            // If the new value is larger, go to the right child
            if (node.right === null) {
                node.right = newNode; // Insert it as the right child
            } else {
                this._insertNode(node.right, newNode); // Recursively insert in the right subtree
            }
        }
    }

   
    
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

