//Optimized approach
var reverseBetween = function(head, left, right) {
    // create dummy to handle edge cases (like reversing from head)
    let dummy = new ListNode(0);
    dummy.next = head;

    // move prev to the node just before 'left'
    let prev = dummy;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // mark important nodes
    let con = prev;        // node before sublist
    let tail = prev.next;  // first node of sublist (will become last after reverse)

    // start reversing from 'left'
    let current = prev.next;
    let next = null;
    prev = null;  // reset prev for reversal

    // reverse nodes from left to right
    for (let i = 0; i <= right - left; i++) {
        next = current.next;   // store next node
        current.next = prev;   // reverse link
        prev = current;        // move prev forward
        current = next;        // move current forward
    }

    // reconnect the reversed sublist with the rest
    con.next = prev;       // connect left part
    tail.next = current;   // connect right part

    return dummy.next;
};

//Brute force approch
var reverseBetween = function(head, left, right) {

    // start from the head of the list
    let index = 1;
    let current = head;

    // this array will store the values between left and right
    let array = [];

    // first traversal: collect values between left and right
    while(current !== null) {
        if(index >= left && index <= right) {
            array.push(current.val); // store the value
        }
        current = current.next; // move to next node
        index++; // increase position
    }

    // reset pointer and index to start again
    current = head;
    index = 1;

    // second traversal: replace values with reversed order
    while(current !== null) {
        if(index >= left && index <= right) {
            current.val = array.pop(); // take last value from array
        }
        current = current.next; // move forward
        index++;
    }

    // return the modified list
    return head;
};