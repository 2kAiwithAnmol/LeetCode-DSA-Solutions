class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    pushBack(data) {
        let newNode = new Node(data);
        if(this.head === null) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    popFront() {
        if(this.head === null) {
            console.log("List is empty, Nothing to Pop");
            return null;
        }
       let removedData = this.head.data;
       if(this.head === this.tail) {
           this.head = this.tail = null;
       }
       else {
           this.head = this.head.next;
           this.head.prev = null;
       }
       return removedData;
    } 
    printList() {
        let current = this.head;
        let result = [];
        while(current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join("<->"));
    }
}
let dll = new DoublyLinkedList();
dll.pushBack(10);
dll.pushBack(20);
dll.pushBack(30);
dll.printList(); 
console.log("Removed:", dll.popFront()); // Removed: 10
dll.printList();   // Output: 20 <-> 30