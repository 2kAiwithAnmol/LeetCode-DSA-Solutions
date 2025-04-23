var licenseKeyFormatting = function(s, k) {
    // Step 1: Remove all dashes and convert to uppercase
    let cleanstack = s.split("-").join('').toUpperCase();

    // Step 2: Initialize an empty stack to build the formatted string
    let stack = [];

    // Step 3: Initialize count to keep track of group size
    let count = 0;

    // Step 4: Traverse the cleaned string from the end
    for (let i = cleanstack.length - 1; i >= 0; i--) {
        // Push the current character into the stack
        stack.push(cleanstack[i]);
        count++;

        // Step 5: After every k characters, add a dash (except at the start)
        if (count === k && i !== 0) {
            stack.push("-");
            count = 0;
        }
    }

    // Step 6: Reverse the stack and join to get the final formatted string
    return stack.reverse().join('');
};
