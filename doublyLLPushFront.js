class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    pushFront(data) {
        let newNode = new Node(data);
        if(this.head === null) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
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
dll.pushFront(10);
dll.pushFront(20);
dll.pushFront(30);
dll.printList();