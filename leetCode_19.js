var removeNthFromEnd = function(head, n) {

    // two pointers starting from head
    let first = head;
    let second = head;

    // move the first pointer n steps ahead
    // this creates a gap of n nodes between first and second
    for(let i = 0; i < n; i++) {
        first = first.next;
    }

    // if first becomes null, it means we need to remove the head node
    if(first === null) return head.next;

    // move both pointers together until first reaches the last node
    // when this loop ends, second will be just before the node to delete
    while(first.next !== null) {
        first = first.next;
        second = second.next;
    }

    // remove the nth node from the end
    // by skipping it in the linked list
    second.next = second.next.next;

    // return updated head
    return head;
};