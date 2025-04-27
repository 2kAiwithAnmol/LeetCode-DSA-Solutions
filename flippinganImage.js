var flipAndInvertImage = function(image) {
    // Loop through each row of the image
    for (let row = 0; row < image.length; row++) {
        let left = 0; // Start from the left of the row
        let right = image[row].length - 1; // Start from the right of the row
        
        // Loop until the left pointer crosses the right pointer
        while (left <= right) {
            // If left and right are the same element (center of odd-length row)
            if (left === right) {
                image[row][left] = image[row][left] ^ 1; // Just invert the middle element
            } else {
                // Swap and invert left and right elements
                let temp = image[row][left] ^ 1; // Invert left element and store it in temp
                image[row][left] = image[row][right] ^ 1; // Invert right element and store it in left
                image[row][right] = temp; // Place the inverted left element in the right
            }
            left++; // Move the left pointer to the right
            right--; // Move the right pointer to the left
        }
    }
    return image; // Return the modified image
};
