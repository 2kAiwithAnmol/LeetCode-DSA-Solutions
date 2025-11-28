class Deque {
    constructor() {
        this.items = [];//Initialize data structure
    }
    addBack(element) {//Add element at the end 
        this.items.push(element);//this is very fast take O(1) time complexity
    }
    addFront(element) {//Add element at the Front 
        this.items.unshift(element);//O(n) time complexity , slow for large dequeus
    }
    removeBack() {//Return and remove the element from the back
        if(this.isEmpty()) {// O(1) time complexity
            return undefined;
        }
        return this.items.pop();
    }
    removeFront() {//Return and remove the element from the front takes O(n) time complexity
        if(this.isEmpty()) {
            return undefined;//Return undefined if the deque is empty
        }
        return this.items.shift();
    }
    peekFront() {//Look at the element at front without removing it.
        return this.isEmpty() ? undefined : this.items[0];
    }
    peekBack() {//Look at the element at Back without removing it.
        return this.isEmpty() ? undefined : this.items[this.items.length - 1];
    }
    isEmpty() {//Check if deque contain any element
        return this.items.length === 0;
    }
    size() {//Get the total number of element in the deque
        return this.items.length;
    }
}
const deque = new Deque();
deque.addBack(3);// [3]
deque.addFront(2);// [2,3]
deque.addFront(1);// [1,2,3]
deque.removeFront();//[2,3]
console.log(deque);
console.log("the size of queue is:", deque.size());
console.log("the peek front of queue is :", deque.peekFront());
console.log("the peek Back of queue is :", deque.peekBack());