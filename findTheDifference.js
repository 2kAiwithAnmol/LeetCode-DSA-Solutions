var findTheDifference = function(s, t) {
    let map1 = new Map(); // Create a map to store character counts from string 's'
    for(let i = 0; i < s.length; i++) { // Loop through string 's'
        map1.set(s[i], (map1.get(s[i]) || 0) + 1); // Count frequency of each character
    }
    for(let i = 0; i < t.length; i++) { // Loop through string 't'
         // If character not found in map or count is 0, it's the extra character
        if(!map1.has(t[i]) || map1.get(t[i]) === 0) { 
            return t[i] // Return the extra character
        }
        map1.set(t[i], map1.get(t[i]) - 1); //Decrease frequency
    }
};