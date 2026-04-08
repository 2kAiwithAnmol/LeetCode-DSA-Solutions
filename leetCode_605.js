var canPlaceFlowers = function(flowerbed, n) {
    // Loop through each position in the flowerbed
    for (let i = 0; i < flowerbed.length; i++) {

        // Get left neighbor (0 if at boundary)
        let left = (i === 0) ? 0 : flowerbed[i - 1];

        // Get right neighbor (0 if at boundary)
        let right = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1];

        // Check if current spot and neighbors are empty
        if (flowerbed[i] === 0 && left === 0 && right === 0) {
            flowerbed[i] = 1; // plant a flower here
            n--;              // decrease required flowers
        }

        // If all flowers are planted, return true
        if (n <= 0) {
            return true;
        }
    }

    // If not enough space to plant all flowers
    return false;
};