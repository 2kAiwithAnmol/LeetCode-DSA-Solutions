var searchMatrix = function(matrix, target) {
    // Start at top-right corner
    let row = 0;
    let column = matrix[0].length - 1;

    // Traverse while within bounds
    while (row < matrix.length && column >= 0) {
        // Target found
        if (matrix[row][column] === target) {
            return true;
        }
        // Move left if current > target
        else if (matrix[row][column] > target) {
            column--;
        }
        // Move down if current < target
        else {
            row++;
        }
    }

    // Target not found
    return false;
};
