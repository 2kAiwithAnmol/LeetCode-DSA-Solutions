class Node {
  constructor(data) {
    this.data = data;
    this.left = null; // Pointer to the left child node
    this.right = null; // Pointer to the right child node
  }
}
class BinaryTree { // The starting point of the tree
    constructor() {
        this.root = null;
    }
    insert(data) { //insert a new value
        this.root = this._insertRec(this.root, data);
    }
    _insertRec(current, data) {   // Helper method that inserts nodes recursively
        if(current === null) {  // If the current spot is empty, place the new node here
            return new Node(data);
        }
        if(data < current.data) {  // If data is smaller, go to the left subtree
            current.left = this._insertRec(current.left, data);
        }
        else if(data >= current.data) {  // If data is greater or equal, go to the right subtree
            current.right = this._insertRec(current.right, data);
        }
        return current; // Return the unchanged node pointer
    }
    inorderTraversal() {  //  method for inorder traversal
        this._inorderRec(this.root);
        console.log();
    }
    _inorderRec(root) {  // Public method for inorder traversal
        if(root !== null) {
            this._inorderRec(root.left);
            console.log(root.data + " ");
            this._inorderRec(root.right);
        }
    }
}
function main() { // Main function to run the program
    const tree = new BinaryTree();
    // Main function to run the program
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);
    tree.insert(60);
    tree.insert(70);
    // Print inorder traversal (sorted order)
    tree.inorderTraversal();
}
main();