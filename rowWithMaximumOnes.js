var rowAndMaximumOnes = function(mat) {
    let maximum = 0; // Max 1's count
    let maxRowIndex = -1; // Row with max 1's
    for(let row = 0; row < mat.length; row++) { // Loop through rows
        let count = 0; // 1's count in current row
        for(let column = 0; column < mat[row].length; column++) { // Loop through columns
            if(mat[row][column] === 1) { // If 1 found
                count += 1; // Increment count
                if(count > maximum) { // If count > max
                    maxRowIndex = row; // Update row index
                }
                maximum = Math.max(count, maximum); // Update max 1's
            }
        }
    }
    if(maxRowIndex === -1) { // No 1's found
        return [0, 0]; // Return [0, 0]
    }
    return [maxRowIndex, maximum]; // Return row index and max 1's count
};
