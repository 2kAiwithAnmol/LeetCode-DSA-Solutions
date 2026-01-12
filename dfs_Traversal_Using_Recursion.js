// DFS function to traverse the graph
function dfs(u, visited) {

    // Print the current vertex
    console.log(u);

    // Mark the current vertex as visited
    visited[u] = true;

    // Traverse all adjacent vertices of u
    for (let v of adjList[u]) {

        // If the adjacent vertex is not visited
        if (!visited[v]) {

            // Call DFS recursively for the unvisited vertex
            dfs(v, visited);
        }
    }
}

// Total number of vertices in the graph
let V = 5;

// Source (starting) vertex for DFS
let src = 0;

// Visited array to keep track of visited vertices
let visited = new Array(V).fill(false);

// Adjacency list representation of the graph
let adjList = [
    [1],        // Neighbors of vertex 0
    [0, 2, 3],  // Neighbors of vertex 1
    [1, 4],     // Neighbors of vertex 2
    [1],        // Neighbors of vertex 3
    [2]         // Neighbors of vertex 4
];

// Call DFS starting from the source vertex
dfs(src, visited);
