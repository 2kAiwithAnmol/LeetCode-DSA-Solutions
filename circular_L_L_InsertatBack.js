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
    insertBack(data) {
        let newNode = new Node(data);
        if(this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
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
    console.log(result);
}
}
let cll = new CircularLL();
cll.insertBack(10);
cll.insertBack(20);
cll.insertBack(30);
cll.printList();