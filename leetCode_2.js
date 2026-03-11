var addTwoNumbers = function(l1, l2) {

    // This will store the carry generated after adding digits
    let carry = 0;

    // Dummy node helps simplify result list creation
    let dummy = new ListNode(0);

    // Pointer used to build the result linked list
    let result = dummy;

    // Continue looping until both lists are fully traversed
    while(l1 !== null || l2 !== null) {

        // Start sum with carry from previous step
        let sum = carry;

        // If l1 still has nodes, add its value to sum
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next; // move to next node in l1
        }

        // If l2 still has nodes, add its value to sum
        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next; // move to next node in l2
        }

        // Calculate carry for the next digit
        carry = Math.floor(sum / 10);

        // Extract the digit to store in current node
        sum = sum % 10;

        // Create a new node with the computed digit
        result.next = new ListNode(sum);

        // Move result pointer forward
        result = result.next;
    }

    // If a carry remains after finishing both lists,
    // create one last node to store it
    if(carry > 0) {
        result.next = new ListNode(carry);
    }

    // Return the actual head of the result list (skip dummy node)
    return dummy.next;
};



//Brite force approch
var addTwoNumbers = function(l1, l2) {

    // Arrays to store digits from both linked lists
    let arr1 = [];
    let arr2 = [];

    // Pointers to traverse both lists
    let current1 = l1;
    let current2 = l2;

    // Traverse first list and store values in arr1
    while(current1 !== null) {
        arr1.push(current1.val);
        current1 = current1.next;
    }

    // Traverse second list and store values in arr2
    while(current2 !== null) {
        arr2.push(current2.val);
        current2 = current2.next;
    }

    // Reverse arrays and convert them to numbers using BigInt
    let num1 = BigInt(arr1.reverse().join(""));
    let num2 = BigInt(arr2.reverse().join(""));

    // Add the two numbers
    let result = num1 + num2;

    // Convert result back to digits and reverse for linked list format
    let digits = result.toString().split("").reverse();

    // Dummy node to build the result linked list
    let dummy = new ListNode(0);
    let current = dummy;

    // Create new nodes for each digit
    for(let d of digits) {
        current.next = new ListNode(Number(d));
        current = current.next;
    }

    // Return the head of the new linked list
    return dummy.next;
};