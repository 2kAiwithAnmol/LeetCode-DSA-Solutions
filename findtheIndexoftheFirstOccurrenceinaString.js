var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        // Create a substring (window) of the same length as the needle starting from index i
        let window = haystack.substring(i,i + needle.length);
         // Check if the current window matches the needle
        if(window === needle) {
              // If match found, return the starting index
            return i  
        }
    }
     // If no match found, return -1
    return -1
};