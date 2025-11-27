class Queue {
    constructor() {
        this.items = [];//the underlying data structure of queue
    }
    enqueue(element) {//Add element at the back
        this.items.push(element);
        console.log(`${element} enqueued`);
    }
    dequeue() {//Remove and return element at the front
        if(this.isEmpty()) {
            console.log("Queue is empty");
        }
        let removedElement = this.items.shift();
        console.log(`${removedElement} dequeued`);
        return removedElement;
    }
    front() { //Return the front element without removing it (front/peek)
        if(this.isEmpty()) {
            return "No element in queue";
        }
        return this.items[0]; //Access the first element
    }
    isEmpty() { // Check if the queue is empty
        return this.items.length === 0;
    }
    size() { // Return the number of elements
        return this.items.length;
    }
    printQueue() { //Print the queue for visulization
        let str = "";
        for(let i = 0; i < this.items.length; i++) {
            str+= this.items[i] + " ";
        }
        console.log("Current Queue:", str.trim());
    }
}

const myQueue = new Queue();
myQueue.enqueue("Task 1: Image recognition");
myQueue.enqueue("Task 2: Scan");
myQueue.enqueue("Task 3: Collection");
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.enqueue("Task 4: Shut down");
myQueue.printQueue();