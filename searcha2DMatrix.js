var searchMatrix = function(matrix, target) {
    // Iterate through each row
    for (let row = 0; row < matrix.length; row++) {
        let left = 0; // Start pointer
        let right = matrix[row].length - 1; // End pointer
        
        // Binary search in the current row
        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // Find the middle index
            
            if (matrix[row][mid] === target) {
                return true; // Target found
            } 
            else if (matrix[row][mid] < target) {
                left = mid + 1; // Move right
            } 
            else {
                right = mid - 1; // Move left
            }
        }
    }
    return false; // Target not found
};
