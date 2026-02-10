var canFinish = function(numCourses, prerequisites) {

    // Create adjacency list for the graph
    let graph = Array.from({ length: numCourses }, () => []);

    // 0 = not visited
    // 1 = currently visiting 
    // 2 = fully visited (
    let status = new Array(numCourses).fill(0);

    // Build the graph from prerequisites
    for (let [a, b] of prerequisites) {
        graph[b].push(a);
    }

    // DFS function to detect cycle
    function dfs(node) {

        // If node is already in current path → cycle found
        if (status[node] === 1) return false;

        // If node is already processed → no need to check again
        if (status[node] === 2) return true;

        // Mark node as visiting
        status[node] = 1;

        // Visit all dependent courses
        for (let next of graph[node]) {
            if (!dfs(next)) {
                return false;
            }
        }

        // Mark node as fully visited (safe)
        status[node] = 2;
        return true;
    }

    // Check every course (handles disconnected graph)
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    // No cycle found → all courses can be finished
    return true;
};
