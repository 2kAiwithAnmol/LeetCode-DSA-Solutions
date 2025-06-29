var lengthOfLastWord = function(s) {
  let result = 0; // Counter to store the length of the last word
  let i = s.length - 1; // Start from the last character of the string

  while (i >= 0 && s[i] === ' ') {
    i--; // Skip all trailing spaces at the end of the string
  }

  while (i >= 0 && s[i] !== ' ') {
    result++; // Count characters of the last word
    i--;
  }

  return result; // Return the final count 
};
