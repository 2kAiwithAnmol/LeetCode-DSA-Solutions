var floodFill = function(image, sr, sc, color) {
    let n = image.length;          // number of rows
    let m = image[0].length;       // number of columns
    let queue = [];                // queue for BFS
    let directions = [             // up, right, down, left
        [-1,0],[0,1],[1,0],[0,-1]
    ];

    let startColor = image[sr][sc]; // original color at starting cell

    // If starting color is already the new color, nothing to do
    if (startColor === color) return image;

    // Start BFS from the given cell
    queue.push([sr, sc]);
    image[sr][sc] = color;         // change the starting cell color

    while (queue.length > 0) {
        let [i, j] = queue.shift(); // take one cell from the queue

        // Check all 4 neighboring cells
        for (let [dx, dy] of directions) {
            let ni = i + dx;
            let nj = j + dy;

            // If neighbor is inside the grid 
            if (
                ni >= 0 && ni < n &&
                nj >= 0 && nj < m &&
                image[ni][nj] === startColor
            ) {
                image[ni][nj] = color; // fill the color
                queue.push([ni, nj]);  // add neighbor to queue
            }
        }
    }

    return image; // return the updated image
};
