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
    popBack(data) {
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
            let temp = this.head;
            while(temp.next !== this.tail) {
                temp = temp.next;
            }
            temp.next = this.head;
            this.tail = temp;
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
cll.popBack();
cll.printList();