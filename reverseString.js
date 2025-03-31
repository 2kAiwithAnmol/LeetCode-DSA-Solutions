/**
 * Reverses the given character array in-place.
 * Uses the Two-Pointer approach to swap characters from both ends.
 * 
 * @param {character[]} s - Input array of characters
 * @return {void} - Modifies the array in-place, does not return anything
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;

    // Swap characters from both ends moving towards the center
    while (start < end) {
        let temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        start++;
        end--;
    }

    // No return needed as modification is in-place
};
