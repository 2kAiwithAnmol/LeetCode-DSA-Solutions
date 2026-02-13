/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Create a map to store grouped anagrams
    // Key = sorted version of the word
    // Value = array of words that match that sorted key
    let hashmap = new Map();
    
    // This will store the final grouped result
    let result = [];
    
    // Loop through each word in the input array
    for(let i = 0; i < strs.length; i++) {
        
        // Sort the current word to create a comparable key
        let sortedWord = sort(strs[i]);
        
        // If this sorted word is not already in the map,
        // create a new empty array for it
        if(!hashmap.has(sortedWord)) {
            hashmap.set(sortedWord, []);
        }
        
        // Push the original word into the correct group
        hashmap.get(sortedWord).push(strs[i]);
    }    
    
    // Collect all grouped anagrams from the map
    for(let value of hashmap.values()) {
        result.push(value);
    }
    
    // Helper function to sort characters in a word
    function sort(str) {
        return str.split('').sort().join('');
    }
    
    // Return the grouped anagrams
    return result;
};
