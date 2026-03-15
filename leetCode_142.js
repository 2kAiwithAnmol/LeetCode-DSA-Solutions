//Floyd’s Cycle Detection Algorithm use in problem
var detectCycle = function(head) {
    // start two pointers from head
    let fast = head;
    let slow = head;

    // move fast by 2 steps and slow by 1 step
    // if there is a cycle, they will eventually meet
    while(fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        // cycle detected
        if(slow === fast) {

            // move one pointer back to head
            fast = head;

            // now move both pointers one step at a time
            // the point where they meet again is the start of the cycle
            while(fast !== slow) {
                slow = slow.next;
                fast = fast.next;
            }

            // return the node where cycle begins
            return fast;
        }
    }

    // if fast reaches null, no cycle exists
    return null;
};


//Brute force approch using set
var detectCycle = function(head) {
    let hashSet = new Set();   // store visited nodes
    let current = head;        // start from the head of the list

    while(current !== null) {  // traverse the linked list
        // if current node is already visited, cycle is found
        if(hashSet.has(current)) {
            return current;    // this node is the start of the cycle
        }

        hashSet.add(current);  // mark current node as visited
        current = current.next; // move to next node
    }

    return null; // if we reach null, there is no cycle
};