var generate = function(numRows) {
    let result = []; // Create an empty array to store all rows of Pascal's Triangle

    for (let i = 0; i < numRows; i++) {
        let row = []; // Initialize a new row for each level of the triangle

        row[0] = 1; // The first element of each row is always 1

        for (let j = 1; j < i; j++) {
            // Each middle element is the sum of the two elements above it
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        if (i > 0) {
            row[i] = 1; // The last element of each row is also 1 (except the first row)
        }

        result.push(row); // Add the constructed row to the final result
    }

    return result; // Return the complete Pascal's Triangle
};
