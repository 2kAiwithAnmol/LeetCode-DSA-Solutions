var reverseWords = function(s) {
    // Split the string into an array of words (may include empty strings due to extra spaces)
    let words = s.split(' ');

    // Remove empty strings caused by multiple spaces
    let filterOut = words.filter(word => word.length > 0);

    // Reverse the array and join it back into a string with single spaces between words
    let reversedString = filterOut.reverse().join(' ');

    return reversedString;
};
