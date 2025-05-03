var rotate = function(matrix) {
    // Step 1: Transpose the matrix
    // Swap elements at (row, col) with (col, row)
    for (let row = 0; row < matrix.length; row++) {
        for (let column = row + 1; column < matrix.length; column++) {
            [matrix[row][column], matrix[column][row]] = [matrix[column][row], matrix[row][column]];
        }
    }

    // Step 2: Reverse each row
    // This completes the 90-degree clockwise rotation
    for (let row of matrix) {
        row.reverse();
    }
};
