var transpose = function(matrix) {
    let result_matrix = []; // Create a new 2D array to store the result

    for(let j = 0; j < matrix[0].length; j++) { // Loop through each column of the original matrix
        let new_Row = []; // Create a new row for the transposed matrix

        for(let i = 0; i < matrix.length; i++) { // Loop through each row of the original matrix
            new_Row.push(matrix[i][j]); // Take the column value and add it to the new row
        }

        result_matrix.push(new_Row); // Add the completed row to the result matrix
    }

    return result_matrix; // Return the transposed matrix
};
