var commonChars = function(words) {
    let result = [];

    // Initialize minFreq array to track the minimum frequency of each character across all words
    let minFreq = new Array(26).fill(Infinity);

    // Loop through each word in the array
    for (let word of words) {
        // Create a frequency array for the current word
        let freq = new Array(26).fill(0);

        // Count the frequency of each character in the current word
        for (let char of word) {
            freq[char.charCodeAt(0) - 97]++;
        }

        // Update the minFreq array to keep the minimum frequency of each character
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], freq[i]);
        }
    }

    // Build the result array using the minimum frequencies
    for (let i = 0; i < 26; i++) {
        // Add the character to the result as many times as it appears in all words
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97)); // Convert index back to character
            minFreq[i]--;
        }
    }

    return result;
};
