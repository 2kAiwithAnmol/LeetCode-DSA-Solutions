// Node class defines the structure of each element in the linked list
class Node {
    constructor(data) {
        this.data = data;     // The value stored in the node
        this.next = null;     // Pointer to the next node (initially null)
    }
}

// LinkedList class to manage the list
class Linkedlist {
    constructor() {
        this.head = null;  // Start of the list (initially empty)
    }

    // Add a node at the end of the linked list
    insertAtEnd(data) {
        const newNode = new Node(data);

        // If list is empty, make newNode the head
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // Else, traverse to the last node and add newNode
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Add a node at the beginning of the linked list
    insertAtBeginning(data) {
        const newNode = new Node(data);

        // Point newNode's next to current head
        newNode.next = this.head;

        // Update head to newNode
        this.head = newNode;
    }

    // Delete the first node with the given data
    deleteNode(data) {
        // If the list is empty, do nothing
        if (this.head === null) return;

        // If the node to delete is the head
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        // Else, search for the node to delete
        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        // If node found, remove it by updating the next pointer
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Print all nodes in the linked list
    printList() {
        let current = this.head;
        let result = "";

        // Traverse the list and collect data
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }

        // Print the final result
        console.log(result + "null");
    }
}

// Create a new linked list and perform operations
const list = new Linkedlist();
list.insertAtEnd(40);        // List: 40
list.insertAtEnd(50);        // List: 40 -> 50
list.insertAtBeginning(30);  // List: 30 -> 40 -> 50
list.insertAtBeginning(20);  // List: 20 -> 30 -> 40 -> 50
list.deleteNode(50);         // List: 20 -> 30 -> 40
list.printList();            // Output: 20 -> 30 -> 40 -> null
