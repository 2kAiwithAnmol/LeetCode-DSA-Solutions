class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertFront(data) {
        let newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }
    popFront(data) {
        if(this.head === null) {
            console.log("Linked list is empty");
            return null;
        }
        let removeData = this.head.data;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        return removeData;
    }
    printList() {
        if(this.head === null) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        let result = "";
        do {
            result+= temp.data + "->";
            temp = temp.next;
        }
        while (temp !== this.head);
        console.log(result +"(Back to head)");
    }
}
let cll = new CircularLinkedList();
cll.insertFront(10);
cll.insertFront(20);
cll.insertFront(30);
cll.printList();
cll.popFront();
cll.printList();