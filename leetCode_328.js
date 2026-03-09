//Optimized approch
var oddEvenList = function(head) {

    // if the list is empty, just return it
    if(head === null) return head;

    // 'odd' pointer starts from the first node
    let odd = head;

    // 'even' pointer starts from the second node
    let even = head.next;

    // store the head of the even list
    // we will attach it after the odd list at the end
    let evenHead = even;

    // continue while there are even nodes available
    while(even !== null && even.next !== null) {

        // connect current odd node to the next odd node
        // skipping the even node
        odd.next = odd.next.next;

        // move odd pointer forward
        odd = odd.next;

        // connect current even node to the next even node
        // skipping the odd node
        even.next = even.next.next;

        // move even pointer forward
        even = even.next;
    }

    // after separating odd and even nodes,
    // attach the even list after the odd list
    odd.next = evenHead;

    // return the head of the modified list
    return head;
};


//Brute force approch
var oddEvenList = function(head) {

    // arrays to store values at odd and even positions
    let odd = [];
    let even = [];

    // index to track node position (starting from 1)
    let index = 1;

    // pointer to traverse the linked list
    let current = head;

    // traverse the list
    while(current !== null) {

        // if position is odd, store value in odd array
        if(index % 2 !== 0) {
            odd.push(current.val);
        }
        // otherwise store in even array
        else {
            even.push(current.val);
        }

        // move to next node and increase index
        index++;
        current = current.next;
    }

    // combine odd values first then even values
    let arr = [...odd, ...even];

    // create a dummy node to build the new linked list
    let newHead = new ListNode(0);
    let temp = newHead;

    // create nodes from the combined array
    for(let val of arr) {
        temp.next = new ListNode(val);
        temp = temp.next;
    }

    // return the actual head (skip the dummy node)
    return newHead.next;
};