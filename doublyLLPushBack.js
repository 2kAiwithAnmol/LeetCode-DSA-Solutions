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