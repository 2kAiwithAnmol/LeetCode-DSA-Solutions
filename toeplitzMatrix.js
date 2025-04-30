var isToeplitzMatrix = function(matrix) {
    // Start from the second row
    for (let row = 1; row < matrix.length; row++) {
        // Start from the second column
        for (let column = 1; column < matrix[row].length; column++) {
            // Check if current element is equal to the top-left diagonal element
            if (matrix[row][column] !== matrix[row - 1][column - 1]) {
                return false; // If not equal, Simply return false
            }
        }
    }
    return true; // All diagonals matched, return true
};
