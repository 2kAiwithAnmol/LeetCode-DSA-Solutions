var numIslands = function(grid) {
    let n = grid.length;        // total rows
    let m = grid[0].length;     // total columns
    let count = 0;              // to store number of islands

    function dfs(i, j) {
        // if we go outside the grid, stop
        if (i < 0 || i >= n || j < 0 || j >= m) return;

        // if it is water "0" OR already visited "2", stop
        if (grid[i][j] === "0" || grid[i][j] === "2") return;

        // mark this land as visited so we don't count it again
        grid[i][j] = "2";

        // check all 4 directions (up, right, down, left)
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i + 1, j); // down
        dfs(i, j - 1); // left
    }

    // go through every cell in the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            // if we found a new land cell, it means new island
            if (grid[i][j] === "1") {
                dfs(i, j);     // cover the full island using DFS
                count++;       // increase island count
            }
        }
    }

    return count; // final answer
};
