var eventualSafeNodes = function(graph) {
    let n = graph.length;

    // state[i]:
    // 0 = not visited yet
    // 1 = currently visiting (in DFS path)
    // 2 = safe node (no cycle reachable)
    let state = new Array(n).fill(0);

    let result = [];

    // DFS returns:
    // true  -> this node is safe
    // false -> this node is unsafe 
    function dfs(node) {

        // If we see a node already in current path → cycle found
        if (state[node] === 1) return false;

        // If this node is already known to be safe
        if (state[node] === 2) return true;

        // Mark node as being visited in current DFS path
        state[node] = 1;

        // Visit all next nodes
        for (let next of graph[node]) {

            // If any neighbor is unsafe,
            // then current node is also unsafe
            if (!dfs(next)) {
                return false;
            }
        }

        // All neighbors are safe, so this node is safe
        state[node] = 2;
        return true;
    }

    // Run DFS for every node
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            result.push(i);
        }
    }

    return result;
};
