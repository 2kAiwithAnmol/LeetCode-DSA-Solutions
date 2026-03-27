//Optimized approach using merge sort
var sortList = function(head) {
    // if list is empty or has only 1 node, it's already sorted
    if (!head || !head.next) return head;

    // Step 1: Find the middle of the list using slow & fast pointers
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;          // keep track of node before slow
        slow = slow.next;     // move slow by 1
        fast = fast.next.next; // move fast by 2
    }

    // Step 2: Break the list into two halves
    prev.next = null; // cut connection

    // Step 3: Recursively sort both halves
    let left = sortList(head);   // first half
    let right = sortList(slow);  // second half

    // Step 4: Merge the two sorted halves
    return merge(left, right);

    // Helper function to merge two sorted linked lists
    function merge(l1, l2) {
        let dummy = new ListNode(0); // dummy node to build result
        let current = dummy;

        // Compare nodes and attach smaller one
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;   // take from l1
                l1 = l1.next;
            } else {
                current.next = l2;   // take from l2
                l2 = l2.next;
            }
            current = current.next; // move forward
        }

        // Attach remaining nodes (only one of them will exist)
        current.next = l1 || l2;

        // Return the merged sorted list
        return dummy.next;
    }
};
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