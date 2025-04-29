var matrixReshape = function(mat, r, c) {
    // If total elements don't match, return original matrix
    if (mat.length * mat[0].length !== r * c) return mat;

    let row = 0; // Row pointer for reshaped matrix
    let column = 0; // Column pointer for reshaped matrix

    // Create an empty 2D array of size r x c filled with 0s
    let ans = Array.from({ length: r }, () => Array(c).fill(0));

    // Traverse the original matrix
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            // Place element in the reshaped matrix
            ans[row][column] = mat[i][j];
            column++;
            // Move to the next row if column limit is reached
            if (column === c) {
                row++;
                column = 0;
            }
        }
    }

    return ans;
};
