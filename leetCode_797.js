var allPathsSourceTarget = function(graph) {
    let result = [];                 // stores all valid paths
    let target = graph.length - 1;    // last node is our destination

    function dfs(node, path) {
        // if we reach the target, save the current path
        if (node === target) {
            result.push([...path]);  // make a copy and store it
            return;
        }

        // explore all neighbors of the current node
        for (let neighboor_Node of graph[node]) {
            path.push(neighboor_Node);   // choose
            dfs(neighboor_Node, path);   // explore
            path.pop();                  // backtrack
        }
    }

    dfs(0, [0]);   // start DFS from node 0 with path [0]
    return result; // return all paths found
};
