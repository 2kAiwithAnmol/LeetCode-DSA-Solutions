class Stack {
    constructor() {
        this.items = [];//Array data structor to perform operation of stacks
    }
    push(element) {//Insert element in stack
        this.items.push(element);
    }
    pop() {//Delete element from stack
        if(this.isEmpty()) {//If stack is already empty
            return "Stack is under flow";
        }
        this.items.pop();//
    }
    peek() {//Show the top element in stack
        return this.items[this.items.length - 1];
    }
    isEmpty() { //Check stack is empty
        return this.items.length === 0;
    }
    size() {//Show the size of stack
        return this.items.length;
    }
}
const myStack = new Stack();
console.log(myStack.isEmpty());//true
myStack.push(1);//[1]
myStack.push(2);//[1,2]
myStack.push(3);//[1,2,3]
myStack.push(4);//[1,2,3,4]
myStack.pop();//[1,2,3] remove top element
console.log(myStack);//[1,2,3]
console.log(myStack.peek());//[3] print the top element in stack
console.log(myStack.size());//[3] print the size of stack