var findOrder = function(numCourses, prerequisites) {

    // Create graph with numCourses empty arrays
    let graph = Array.from({length : numCourses}, () => []);

    // 0 = not visit
    // 2 = finished visiting
    let status = new Array(numCourses).fill(0);

    // This will store the final course order
    let result = [];

    // Build the graph
    for(let [a,b] of prerequisites) {
        graph[b].push(a);
    }

    // DFS function to visit courses
    function dfs(node) {

        // If we see this node again while visiting → cycle
        if(status[node] === 1) return false;

        // If already fully processed → no need to check again
        if(status[node] === 2) return true;

        // Mark this node as visiting
        status[node] = 1;

        // Visit all next courses that depend on this course
        for(let next of graph[node]) {
            let check = dfs(next);

            // If any neighbor returns false → cycle found
            if(check === false) return false;
        }

        // Mark this node as fully processed
        status[node] = 2;

        // Add to result AFTER visiting children (postorder)
        result.push(node);

        return true;
    }

    // Try to run DFS on every course
    for(let i = 0; i < numCourses; i++) {

        // Only start DFS if not visited
        if(status[i] === 0) {

            let check = dfs(i);

            // If cycle found → return empty array
            if(check === false) return [];
        }
    }

    // Reverse because we added courses after dependencies
    return result.reverse();
};
