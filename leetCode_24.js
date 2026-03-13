//Two pointer approch
var swapPairs = function(head) {

    // create a dummy node before the head
    // this helps handle edge cases easily
    let dummy = new ListNode(0);

    // connect dummy to the start of the list
    dummy.next = head;

    // pointer that will move through the list
    let currentPointer = dummy;

    // loop while there are at least two nodes to swap
    while(currentPointer.next !== null && currentPointer.next.next !== null) {

        // first node of the pair
        let swap1 = currentPointer.next;

        // second node of the pair
        let swap2 = currentPointer.next.next;

        //point first node to the node after the pair
        swap1.next = swap2.next;

        //make second node point to first node
        swap2.next = swap1;

        //connect previous part of list to the new first node (swap2)
        currentPointer.next = swap2;

        // move pointer forward to the end of the swapped pair
        currentPointer = swap1;
    }

    // return the new head
    return dummy.next;
};

// Brute force apporch 
var swapPairs = function(head) {
    // start from the head of the list
    let current = head;

    // run loop while there are at least two nodes to swap
    while(current !== null && current.next !== null) {

        // store first node value temporarily
        let temp = current.val;

        // swap values of current node and next node
        current.val = current.next.val;
        current.next.val = temp;

        // move pointer two steps ahead to process next pair
        current = current.next.next;
    }

    // return the modified list
    return head;
};