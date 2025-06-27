var romanToInt = function(s) {
    // Create a hashmap to store the Roman numeral values
    let hashMap = new Map();
    let result = 0; // Variable to store the final result

    // Populate the hashmap with Roman numeral mappings
    hashMap.set('I', 1);
    hashMap.set('V', 5);
    hashMap.set('X', 10);
    hashMap.set('L', 50);
    hashMap.set('C', 100);
    hashMap.set('D', 500);
    hashMap.set('M', 1000);

    // Iterate through the input string
    for (let i = 0; i < s.length; i++) {
        let curr = hashMap.get(s[i]);       // Get the value of the current Roman character
        let next = hashMap.get(s[i + 1]);   // Get the value of the next Roman character (if exists)

        // If the next value is greater, it's a subtractive case
        if (next > curr) {
            result += next - curr; // Subtract and add the result (e.g., IV = 5 - 1 = 4)
            i++; // Skip the next character as it's already processed
        } else {
            result += curr; // Otherwise, just add the current value
        }
    }

    return result; // Return the final integer result
};
