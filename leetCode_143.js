//Optimized Approach
var reorderList = function(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the list (slow-fast pointer)
    let p1 = head; // slow
    let p2 = head; // fast
    while (p2.next !== null && p2.next.next !== null) {
        p1 = p1.next;        // move 1 step
        p2 = p2.next.next;   // move 2 steps
    }

    // Step 2: Reverse the second half
    let prev = null;
    let current = p1.next;  // start after middle
    p1.next = null;         // cut the list into two halves

    while (current !== null) {
        let next = current.next; // store next node
        current.next = prev;     // reverse pointer
        prev = current;          // move prev forward
        current = next;          // move current forward
    }

    // Step 3: Merge both halves alternately
    let first = head;   // first half
    let second = prev;  // reversed second half

    while (second !== null) {
        let temp1 = first.next;   // save next of first
        let temp2 = second.next;  // save next of second

        first.next = second;      // connect first → second
        second.next = temp1;      // connect second → next of first

        first = temp1;            // move first forward
        second = temp2;           // move second forward
    }
};

//Brute force approch
var reorderList = function(head) {
    let arr = [];
    let current = head;
    let newArray = [];

    // Step 1: Store all node values in an array
    while(current !== null) {
        arr.push(current.val);
        current = current.next;
    }

    // Step 2: Use two pointers to reorder values
    let left = 0;
    let right = arr.length - 1;

    // Pick from start and end alternately
    while(left < right) {
        newArray.push(arr[left]);   // take from front
        newArray.push(arr[right]);  // take from back
        left++;
        right--;
    }

    // If there's a middle element (odd length), add it
    if(left === right) {
        newArray.push(arr[left]);
    }

    // Step 3: Put reordered values back into linked list
    current = head;
    let i = 0;

    while(current !== null) {
        current.val = newArray[i]; // overwrite value
        current = current.next;
        i++;
    }
};