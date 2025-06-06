var isPalindrome = function(x) {
    if (x < 0) return false; // Negative numbers are not palindromes

    let s = x.toString(); // Convert the number to a string

    function palindrom(str, left, right) {
        if (left >= right) return true; // Base case: all characters matched
        if (str[left] !== str[right]) return false; // Mismatch found, not a palindrome
        return palindrom(str, left + 1, right - 1); // Recursive call with inner characters
    }

    return palindrom(s, 0, s.length - 1); // Start checking from both ends
};
