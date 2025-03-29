/**
 * Group Anagrams using Sorting Approach
 * 
 * @param {string[]} strs - Array of input strings
 * @return {string[][]} - Groups of anagrams
 */
var groupAnagrams = function(strs) {
    let map = new Map(); // HashMap to store grouped anagrams

    for (let str of strs) {
        let sortString = str.split('').sort().join(''); // Sort string to use as a key

        if (!map.has(sortString)) {
            map.set(sortString, []); // Initialize array if key doesn't exist
        }

        map.get(sortString).push(str); // Add string to its anagram group
    }

    return Array.from(map.values()); // Return grouped anagrams
};
