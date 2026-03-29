//Optimal approach
var partition = function(head, x) {
    // Dummy nodes to simplify edge cases (
    let lessDummy = new ListNode(0);      // will store nodes < x
    let greaterDummy = new ListNode(0);   // will store nodes >= x

    // These act like "tails" to build both lists
    let lesser = lessDummy;
    let greater = greaterDummy;

    // Start traversing the original list
    let current = head;

    while (current !== null) {
        // If current node value is less than x,
        // add it to the "less" list
        if (current.val < x) {
            lesser.next = current;
            lesser = lesser.next; // move tail forward
        } 
        // Otherwise, add it to the "greater/equal" list
        else {
            greater.next = current;
            greater = greater.next; // move tail forward
        }

        // Move to next node in original list
        current = current.next;
    }

    // Important: terminate the greater list
    // to avoid potential cycles
    greater.next = null;

    // Connect the two lists
    lesser.next = greaterDummy.next;

    // Head of the new partitioned list
    return lessDummy.next;
};

//Brute force approach
var partition = function(head, x) {
    // arrays to store values
    let arr1 = []; // values less than x
    let arr2 = []; // values greater than or equal to x
    
    let current = head;

    // traverse the linked list and split values
    while(current !== null) {
        if(current.val < x) {
            arr1.push(current.val);   // store smaller values
        }
        else {
            arr2.push(current.val);   // store bigger/equal values
        }
        current = current.next;
    }

    // combine both arrays 
    let result = [...arr1 , ...arr2];

    // create a dummy node to build new list
    let dummy = new ListNode(0);
    dummy.next = head; // (not needed, but won't break logic here)

    let newCurr = dummy;

    // create new linked list using result array
    for(let val of result) {
        newCurr.next = new ListNode(val); // create new node
        newCurr = newCurr.next;           // move pointer forward
    }

    // return head of new list (skip dummy node)
    return dummy.next;
};