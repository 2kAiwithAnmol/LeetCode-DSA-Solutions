var maxDistance = function(grid) {
    // grid size
    let n = grid.length;
    let m = grid[0].length;

    // flags to check if grid has at least one land and one water
    let hasLand = false;
    let hasWater = false;

    // queue for BFS (will store all land cells first)
    let queue = [];

    // distance from land, starts at -1 to handle BFS levels correctly
    let distance = -1;

    // scan the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                hasLand = true;
                // push all land cells as BFS starting points
                queue.push([i, j]);
            } else {
                hasWater = true;
            }
        }
    }

    // if there is no land or no water, answer is -1
    if (!hasLand || !hasWater) return -1;

    // possible 4 directions (up, right, down, left)
    let directions = [[-1,0],[0,1],[1,0],[0,-1]];

    // multi-source BFS
    while (queue.length > 0) {
        let size = queue.length;

        // each BFS level means distance increases by 1
        distance++;

        for (let s = 0; s < size; s++) {
            let [x, y] = queue.shift();

            // explore neighbors
            for (let [dx, dy] of directions) {
                let nx = x + dx;
                let ny = y + dy;

                // check bounds and only visit water cells
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 0) {
                    // mark water as visited by turning it into land
                    grid[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    // final distance is the farthest water cell from land
    return distance;
};
