var copyRandomList = function(head) {
    // If list is empty, return null
    if (!head) return null;

    // Map to store: original node -> copied node
    let map = new Map();
    let current = head;

    // FIRST LOOP: create copy of each node (without links)
    while (current) {
        // Create a new node with same value
        map.set(current, new _Node(current.val, null, null));
        current = current.next;
    }

    // Reset current to head
    current = head;

    // SECOND LOOP: assign next and random pointers
    while (current) {
        // Set next pointer of copied node
        map.get(current).next = map.get(current.next) || null;

        // Set random pointer of copied node
        map.get(current).random = map.get(current.random) || null;

        current = current.next;
    }

    // Return head of copied linked list
    return map.get(head);
};