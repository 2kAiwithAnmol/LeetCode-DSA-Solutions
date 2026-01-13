var validPath = function(n, edges, source, destination) {
    // Create a graph of adjacency list
    let graph = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        graph[u].push(v); // connect u to v
        graph[v].push(u); // connect v to u (undirected)
    }

    // Keep track of visited nodes
    let visited = new Array(n).fill(false);

    // DFS function to check if we can reach destination
    function dfs(u) {
        if (u === destination) return true; // found destination
        visited[u] = true; // mark current node as visited

        for (let v of graph[u]) { // check neighbors
            if (!visited[v]) {
                if (dfs(v)) return true; // if path found, return true
            }
        }

        return false; // no path found from this node
    }

    return dfs(source); // start DFS from the source node
};
// let n = 3;
// let edges = [[0,1],[1,2],[2,0]]; 
// let source = 0;
// let destination = 2;