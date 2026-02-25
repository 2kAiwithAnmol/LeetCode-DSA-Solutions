var totalFruit = function(fruits) {

    // If array has 2 or fewer fruits, we can take all
    if(fruits.length <= 2) return fruits.length;

    let result = 0;              // stores maximum window size
    let map = new Map();         // stores fruit type count

    // Initialize first 2 fruits in the map
    for(let i = 0; i < 2; i++) {
        map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);
    } 

    let left = 0;                // left pointer of sliding window
    let window = 2;              // current window size (first 2 fruits)

    // Start expanding window from index 2
    for(let i = 2; i < fruits.length; i++) {

        // Add current fruit to the map
        map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);

        window++;  // increase window size because we added one fruit

        // If more than 2 fruit types, shrink window from left
        if(map.size > 2) {

            // Decrease count of left fruit
            map.set(fruits[left], map.get(fruits[left]) - 1);

            // If its count becomes 0, remove it from map
            if(map.get(fruits[left]) === 0 ) {
                map.delete(fruits[left]);
            }

            left++;      // move left pointer forward
            window--;    // decrease window size
        }

        // Update maximum window size
        result = Math.max(result, window); 
    }

    return result;  // return maximum fruits collected
};