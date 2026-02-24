var checkInclusion = function(s1, s2) {

    // Frequency array to store character counts of s1
    let s1_Freq = new Array(26).fill(0);

    // Frequency array to store character counts of current window in s2
    let window_Freq = new Array(26).fill(0);

    // Build frequency map for s1
    for(let i = 0; i < s1.length; i++) {
        s1_Freq[s1.charCodeAt(i) - 97]++;
    }

    // Window size is fixed and equal to length of s1
    let windowSize = s1.length;

    // Build frequency for the first window in s2
    for(let i = 0; i < windowSize; i++) {
        window_Freq[s2.charCodeAt(i) - 97]++;
    }

    // Check if the first window is already a permutation of s1
    if(isSame(s1_Freq, window_Freq)) return true;

    // Slide the window one character at a time
    for(let i = windowSize; i < s2.length; i++) {

        // Character that moves out of the window (left side)
        let left = s2[i - windowSize];
        window_Freq[left.charCodeAt(0) - 97]--;

        // Character that enters the window (right side)
        let right = s2[i];
        window_Freq[right.charCodeAt(0) - 97]++;

        // After updating the window, compare frequencies
        if(isSame(s1_Freq, window_Freq)) return true;
    }

    // No permutation of s1 found in s2
    return false;
};

// Helper function to check if two frequency arrays are identical
function isSame(s1_Freq, window_Freq) {

    // Compare frequency of each character
    for(let i = 0; i < 26; i++) {
        if(s1_Freq[i] !== window_Freq[i]) return false;
    }

    // All frequencies matched
    return true;
}