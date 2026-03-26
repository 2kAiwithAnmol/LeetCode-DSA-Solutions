//Optimized approach using merge sort
var sortList = function(head) {
    // if list has 0 or 1 node → already sorted
    if (head === null || head.next === null) return head;

    let fast = head;
    let slow = head;
    let prev = null;

    // find middle of list using slow & fast pointers
    while (fast !== null && fast.next !== null) {
        prev = slow;          // keep track of node before slow
        fast = fast.next.next;
        slow = slow.next;
    }

    // break list into two halves
    prev.next = null;

    // sort left half
    let left = sortList(head);

    // sort right half
    let right = sortList(slow);

    // merge both sorted halves
    return merge(left, right);
};

function merge(l1, l2) {
    // dummy node to simplify merging
    let dummy = new ListNode(0);
    let tail = dummy;

    // compare nodes and build sorted list
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            tail.next = l1;   // take node from l1
            l1 = l1.next;
        } else {
            tail.next = l2;   // take node from l2
            l2 = l2.next;
        }
        tail = tail.next;     // move forward
    }

    // attach remaining nodes (only one of these will run)
    while (l1 !== null) {
        tail.next = l1;
        tail = tail.next;
        l1 = l1.next;
    }

    while (l2 !== null) {
        tail.next = l2;
        tail = tail.next;
        l2 = l2.next;
    }

    // return head of merged list
    return dummy.next;
}
//Brute force approach
var sortList = function(head) {
  let current = head;
  let array = [];

  // Step 1: Traverse the linked list and store values in array
  while (current !== null) {
    array.push(current.val);   // store node value
    current = current.next;    // move to next node
  }

  // Step 2: Sort the array
  array.sort((a, b) => a - b);

  // Step 3: Put sorted values back into linked list
  current = head;
  let i = 0;
  while (current !== null) {
    current.val = array[i];    // update node value
    current = current.next;    // move to next node
    i++;
  }

  return head; // return sorted linked list
};