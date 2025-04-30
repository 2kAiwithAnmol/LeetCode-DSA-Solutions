var countNegatives = function(grid) {
    let count = 0; // Initialize count to 0
    for (let row = 0; row < grid.length; row++) { // Loop through each row
        for (let column = grid[row].length - 1; column >= 0; column--) { // Loop from right to left in the row
            if (grid[row][column] >= 0) { // If the number is non-negative
                break; // Stop checking this row
            }
            count++; // Count the negative number
        }
    }
    return count; // Return the total count
};
