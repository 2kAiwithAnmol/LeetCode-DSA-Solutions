var maxAreaOfIsland = function(grid) { 

  // number of rows
  let n = grid.length;

  // number of columns
  let m = grid[0].length;

  // keeps track of visited cells so we don’t count them again
  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  // possible 4 directions: up, right, down, left
  let directions = [[-1,0],[0,1],[1,0],[0,-1]];

  // stores the maximum island area found
  let result = 0;

  // DFS function to calculate area of one island
  function dfs(i, j) {
    // count current cell
    let area = 1;

    // mark current cell as visited
    visited[i][j] = true;

    // explore all 4 directions
    for (let [dx, dy] of directions) {
      let ni = i + dx;
      let nj = j + dy;

      // check boundaries, unvisited, and land
      if (
        ni >= 0 && ni < n &&
        nj >= 0 && nj < m &&
        !visited[ni][nj] &&
        grid[ni][nj] === 1
      ) {
        // add neighbor island area to current area
        area = area + dfs(ni, nj);
      }
    }

    // return total area of this island
    return area;
  }

  // loop through every cell in the grid
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

      // if cell is land and not visited, start DFS
      if (grid[i][j] === 1 && !visited[i][j]) {
        // update maximum island area
        result = Math.max(result, dfs(i, j));
      }
    }
  }

  // return the largest island area found
  return result;
};
