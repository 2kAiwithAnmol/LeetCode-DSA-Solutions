/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If lengths of strings are not equal, they can't be anagrams
    if (s.length !== t.length) return false;

    // Create a map to count character frequencies from string s
    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // For each character in string t, reduce its count in the map
    for (let char of t) {
        // If the character is not found in map, it's not an anagram
        if (!map.has(char)) return false;

        // Decrease the frequency
        map.set(char, map.get(char) - 1);

        // If frequency becomes 0, remove the character from map
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    // If map is empty, it means both strings had exactly the same characters
    return map.size === 0;
};
