var isSubsequence = function(s, t) {
    let i = 0; // Pointer for string 's'
    let j = 0; // Pointer for string 't'

    // Loop through both strings until one of them ends
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            // If characters match, move both pointers forward
            i++;
            j++;
        } else {
            // If not matched, move only the pointer for 't'
            j++;
        }
    }

    // If we've checked all characters of 's', it's a subsequence of 't'
    return i === s.length; 
};
