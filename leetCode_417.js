var pacificAtlantic = function(heights) {
    let n = heights.length;          // number of rows
    let m = heights[0].length;       // number of columns
    let directions = [[-1,0],[0,1],[1,0],[0,-1]];  // up, right, down, left
    let result = [];                 // store cells that can reach both oceans

    // BFS starting from cell (i, j)
    function bfs(i,j) {
        let queue = [[i,j]];        // queue for BFS
        let visited = Array.from({length : n}, () => Array(m).fill(false)); // visited cells
        visited[i][j] = true;       // mark starting cell as visited

        let pacific = false;        // flag if Pacific is reached
        let atlantic = false;       // flag if Atlantic is reached

        while(queue.length > 0) {
            let [i,j] = queue.shift(); // take current cell

            // check if current cell touches Pacific (top row or left column)
            if(i === 0 || j === 0) {
                pacific = true;
            }

            // check if current cell touches Atlantic (bottom row or right column)
            if(i === n-1 || j === m-1) {
                atlantic = true;
            }
        
            // explore 4 directions
            for(let [dx, dy] of directions) {
                let ni = i + dx;
                let nj = j + dy;

                // move to neighbor only if:
                // 1. inside the grid
                // 2. not visited
                // 3. height is lower or equal (water can flow)
                if(ni >=0 && ni < n && nj >=0 && nj < m && !visited[ni][nj] && heights[ni][nj] <= heights[i][j]) {
                    visited[ni][nj] = true;   // mark as visited
                    queue.push([ni,nj]);      // add to queue
                }
            }
        }

        // return true if both oceans can be reached
        return pacific && atlantic;
    }

    // iterate through all cells
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(bfs(i,j)) {           // if cell can reach both oceans
                result.push([i,j]);  // add to result
            }
        }
    }

    return result; // final answer
};
