var defangIPaddr = function(address) {
    let result = ""; // Output string to store the defanged IP address
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") { // If the current character is a dot
            result += "[.]";      // Replace dot with "[.]"
        } else {
            result += address[i]; // Otherwise, append the current character as is
        }
    }
    return result; // Return the defanged IP address string
};
