var diagonalSum = function(mat) {
    let sum = 0; // Initialize sum to store the total value of the diagonals
    for (let i = 0; i < mat.length; i++) { // Loop through each row of the matrix
        sum += mat[i][i]; // Add the top-left to bottom-right diagonal element
        sum += mat[i][mat.length - i - 1]; // Add the top-right to bottom-left diagonal element
    }
    if (mat.length % 2 !== 0) { // If the size of the matrix is odd
        sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]; // Subtract the middle element because it  was added twice in the sum
    }
    return sum; // Return the final sum
};
