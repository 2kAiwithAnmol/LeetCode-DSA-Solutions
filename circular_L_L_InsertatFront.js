class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class CircularLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertFront(data) {
        let newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }
    printList() {
    if(this.head === null) {
        console.log("Linked list is empty");
        return;
    }
    let temp = this.head;
    let result = " ";
    do {
        result += temp.data + "->";
        temp = temp.next;
    }
    while(temp !== this.head);
    console.log(result + "(back to head)");
}
}
let cll = new CircularLL();
cll.insertFront(10);
cll.insertFront(20);
cll.insertFront(30);
cll.printList();