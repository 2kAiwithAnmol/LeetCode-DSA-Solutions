var MyQueue = function() {
    this.stack1 = []; // stack1 stores the input elements (enqueue)
    this.stack2 = []; // stack2 is used for dequeue operations
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x); // push the input element into stack1
};

MyQueue.prototype.pop = function() {
    this.peek(); // ensure all elements are in stack2 (in reverse order)
    return this.stack2.pop(); // pop the top element from stack2 (front of queue)
};

MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) { // if stack2 is empty
        while (this.stack1.length > 0) { // move all elements from stack1 to stack2
            this.stack2.push(this.stack1.pop()); // reverse order for correct queue behavior
        }
    }
    return this.stack2[this.stack2.length - 1]; // return the top of stack2
};

MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0; // queue is empty only if both stacks are empty
};
