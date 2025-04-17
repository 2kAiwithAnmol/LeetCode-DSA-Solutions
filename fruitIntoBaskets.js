var totalFruit = function(fruits) {
    let map = new Map(); // to store the count of each fruit type
    let left = 0;
    let maximum = 0;

    for (let right = 0; right < fruits.length; right++) {
        // add/update the current fruit in the map
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

        // if more than 2 types of fruits, shrink the window from left
        while (map.size > 2) {
            map.set(fruits[left], map.get(fruits[left]) - 1);
            if (map.get(fruits[left]) === 0) {
                map.delete(fruits[left]); // remove if count becomes 0
            }
            left++; // move the window forward
        }

        // update the maximum number of fruits collected
        maximum = Math.max(maximum, right - left + 1);
    }

    return maximum;
};
