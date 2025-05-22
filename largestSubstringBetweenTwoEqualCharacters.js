var maxLengthBetweenEqualCharacters = function(s) {
  let max = 0; // Maximum length between equal characters
  let map = new Map(); // Map to store first occurrence index of characters

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // Update max length if character repeats
      max = Math.max(max, i - map.get(s[i]) + 1);
    } else {
      // Store index of first occurrence
      map.set(s[i], i);
    }
  }

  // If no repeated characters, return -1; else return max - 2 (to exclude the equal characters)
  return max === 0 ? -1 : max - 2;
};
