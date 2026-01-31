/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    // visited[i] = -1 → not visited 
    let visited = Array(graph.length).fill(-1);

    // Queue for BFS
    let queue = [];

    // Go through every node 
    for (let i = 0; i < graph.length; i++) {

        // If this node is already colored, skip it
        if (visited[i] !== -1) continue;

        // Start BFS from this node
        queue.push(i);
        visited[i] = 0; // assign first color

        // Standard BFS loop
        while (queue.length > 0) {
            let node = queue.shift();

            // Check all neighbors of current node
            for (let neighboor of graph[node]) {

                // If neighbor is not colored yet,
                // give it the opposite color
                if (visited[neighboor] === -1) {
                    visited[neighboor] = 1 - visited[node];
                    queue.push(neighboor);
                }
                // If neighbor has the same color,
                // graph is not bipartite
                else if (visited[neighboor] === visited[node]) {
                    return false;
                }
            }
        }
    }

    // If no conflicts were found, graph is bipartite
    return true;
};
