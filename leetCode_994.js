var orangesRotting = function(grid) {
    let n = grid.length;        // number of rows
    let m = grid[0].length;     // number of columns

    let queue = [];             // store rotten oranges as [row, col, time]
    let freshCount = 0;         // count total fresh oranges

    //  Add all rotten oranges to queue and count fresh oranges
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);   // rotten orange at time 0
            }
            if (grid[i][j] === 1) {
                freshCount++;            // fresh orange found
            }
        }
    }

    // Movement directions: up, right, down, left
    let up = [-1, 0];
    let right = [0, 1];
    let down = [1, 0];
    let left = [0, -1];
    let directions = [up, right, down, left];

    let maxTime = 0; // stores the maximum time taken to rot oranges

    // BFS (spread rotting to nearby fresh oranges)
    while (queue.length > 0) {
        let [i, j, t] = queue.shift();    // take one rotten orange from queue
        maxTime = Math.max(maxTime, t);   // update answer time

        // check all 4 neighboring cells
        for (let [dx, dy] of directions) {
            let ni = i + dx;  // new row
            let nj = j + dy;  // new column

            // if neighbor cell is inside grid and has a fresh orange
            if (ni >= 0 && ni < n && nj >= 0 && nj < m && grid[ni][nj] === 1) {
                grid[ni][nj] = 2;             // make it rotten
                freshCount--;                 // one less fresh orange
                queue.push([ni, nj, t + 1]);  // push into queue with time + 1
            }
        }
    }

    // If all fresh oranges are rotten, return time else return -1
    return freshCount === 0 ? maxTime : -1;
};
