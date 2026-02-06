/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {

    // Define a Minheap class to help us efficiently get the node with the minimum time
    class Minheap {
        constructor() {
            this.heap = [];  // This will hold our heap elements
        }

        // Calculate the parent index of a given node
        parent(index) {
            return Math.floor((index - 1) / 2);  // Parent index formula for a binary heap
        }

        // Get the index of the left child
        leftChild(index) {
            return 2 * index + 1;
        }

        // Get the index of the right child
        rightChild(index) {
            return 2 * index + 2;
        }

        // Swap two elements in the heap
        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        // Insert a new element into the heap
        insert(value) {
            this.heap.push(value);  // Push the new value to the heap array
            let index = this.heap.length - 1;
            // Move the new element up the heap until the heap property is satisfied
            while (index > 0 && this.heap[this.parent(index)][0] > this.heap[index][0]) {
                this.swap(index, this.parent(index));
                index = this.parent(index);
            }
        }

        // Extract and return the minimum element from the heap (the root)
        extractMin() {
            if (this.heap.length === 0) return null;
            let min = this.heap[0];  // Store the root (minimum element)
            this.heap[0] = this.heap[this.heap.length - 1];  // Move the last element to the root
            this.heap.pop();  // Remove the last element
            this.heapify(0);  // Restore the heap property
            return min;  // Return the minimum value
        }

        // Restore the heap property by comparing the parent with its children
        heapify(index) {
            let smallest = index;
            let left = this.leftChild(index);
            let right = this.rightChild(index);

            // If the left child is smaller than the current node, update smallest
            if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            // If the right child is smaller than the current smallest, update smallest
            if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            // If the smallest is not the current node, swap and continue heapifying
            if (smallest !== index) {
                this.swap(index, smallest);
                this.heapify(smallest);
            }
        }
    }

    // Create a new Minheap instance
    const heap = new Minheap();
    
    // Initialize the graph as an adjacency list
    let graph = Array.from({ length: n + 1 }, () => []);  // n+1 because nodes are 1-based
    let dist = Array(n + 1).fill(Infinity);  // Initialize distances as Infinity for all nodes

    // Build the graph based on the given edge data in `times`
    for (let [u, v, w] of times) {
        graph[u].push([v, w]);  // Add the edge (v, w) to the adjacency list of u
    }

    // The distance to the starting node k is 0
    dist[k] = 0;
    heap.insert([0, k]);  // Insert the start node with a time of 0 into the heap

    // Main loop to process the nodes
    while (heap.heap.length > 0) {
        let [time, node] = heap.extractMin();  // Extract the node with the minimum time

        // If the current time is greater than the best known distance, skip this node
        if (time > dist[node]) continue;

        // Explore all neighbors of the current node
        for (let [next, weight] of graph[node]) {
            let newTime = time + weight;  // Calculate the time to reach the next node

            // If we found a shorter path to the next node, update the distance and add to the heap
            if (newTime < dist[next]) {
                dist[next] = newTime;
                heap.insert([newTime, next]);
            }
        }
    }

    // Now, we need to find the maximum time taken to reach any node
    let result = 0;
    for (let i = 1; i <= n; i++) {
        // If any node is unreachable (still Infinity), return -1
        if (dist[i] === Infinity) {
            return -1;
        }
        // Keep track of the longest time it took to reach any node
        result = Math.max(result, dist[i]);
    }

    return result;  // Return the network delay time 
