function bfs(adjList, src, V) {
    // Create a visited array of size V and initialize all values as false
    let visited = new Array(V).fill(false);

    // Create a queue for BFS
    let queue = [];

    // Mark the source vertex as visited
    visited[src] = true;

    // Add the source vertex to the queue
    queue.push(src);

    // Run the loop until the queue becomes empty
    while (queue.length > 0) {

        // Remove (dequeue) the front element from the queue
        let u = queue.shift();

        // Print the current vertex
        console.log(u);

        // Traverse all adjacent vertices of the current vertex
        for (let v of adjList[u]) {

            // If the adjacent vertex is not visited
            if (!visited[v]) {

                // Mark it as visited
                visited[v] = true;

                // Add it to the queue
                queue.push(v);
            }
        }
    }
}

// Number of vertices in the graph
let V = 5;

// Adjacency list representation of the graph
let adjList = [
    [1],        // 0
    [0, 2, 3],  // 1
    [1, 4],     // 2
    [1],        // 3
    [2]         // 4
];

// Call BFS starting from source vertex 0
bfs(adjList, 0, V);
