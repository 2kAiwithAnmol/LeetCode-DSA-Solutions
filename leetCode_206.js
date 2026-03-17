var reverseList = function(head) {
    let prev = null;        // will become the new head of reversed list
    let next = null;        // temporary pointer to store next node
    let current = head;     // start from the head

    while (current !== null) {
        next = current.next;    // save next node (so we don't lose it)

        current.next = prev;    // reverse the link (point backward)

        prev = current;         // move prev forward (build reversed list)
        current = next;         // move current forward
    }

    return prev; // prev is the new head after reversal
};