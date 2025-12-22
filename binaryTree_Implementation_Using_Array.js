// Define a BinaryTree class
class BinaryTree {
    constructor() {
        this.tree = []; // Initialize an empty array to store tree values
    }

    // Insert a new value into the tree 
    insert(value) {
        this.tree.push(value); // Add the value to the end of the array
    }

    // Get the left child of the node at index 'i'
    getLeftChild(i) {
        const leftIndex = 2 * i + 1; // Formula to find the left child index
        return this.tree[leftIndex] !== undefined ? this.tree[leftIndex] : null; // Return left child if it exists, otherwise return null
    }

    // Get the right child of the node at index 'i'
    getRightChild(i) {
        const rightIndex = 2 * i + 2; // Formula to find the right child index
        return this.tree[rightIndex] !== undefined ? this.tree[rightIndex] : null; // Return right child if it exists, otherwise return null
    }

    // Print the entire tree 
    printTree() {
        console.log(this.tree); // Print the array that represents the tree
    }
}

// Create a new BinaryTree instance
const tree = new BinaryTree();

// Insert values into the tree
tree.insert(0); // Root node
tree.insert(1); // Left child of root
tree.insert(2); // Right child of root
tree.insert(3); // Left child of node at index 1
tree.insert(4); // Right child of node at index 1

// Get the right child of the root (index 0)
console.log(tree.getRightChild(0)); // Should return '2', the right child of root

// Print the tree
tree.printTree(); // Should print the array [0, 1, 2, 3, 4]
