var lastStoneWeight = function(stones) {

    // Max Heap class
    class MaxHeap {
        constructor() {
            this.heap = []; // array to store heap values
        }

        // Returns parent index
        parent(index) {
            return Math.floor((index - 1) / 2);
        }

        // Returns left child index
        leftChild(index) {
            return 2 * index + 1;
        }

        // Returns right child index
        rightChild(index) {
            return 2 * index + 2;
        }

        // Swap two elements in the heap
        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        // Insert a value into the heap
        insert(value) {
            this.heap.push(value); // add value to the end
            let index = this.heap.length - 1;

            // Move value up to maintain max heap property
            while (
                index > 0 &&
                this.heap[this.parent(index)] < this.heap[index]
            ) {
                this.swap(index, this.parent(index));
                index = this.parent(index);
            }
        }

        // Remove and return the maximum value
        extractMax() {
            if (this.heap.length === 0) return null;

            const max = this.heap[0]; // store max value
            this.heap[0] = this.heap[this.heap.length - 1]; // move last to root
            this.heap.pop(); // remove last element
            this.heapify(0); // restore heap property

            return max;
        }

        // Restore heap property from index downward
        heapify(index) {
            let largest = index;
            let left = this.leftChild(index);
            let right = this.rightChild(index);

            // Check left child
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            // Check right child
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            // Swap and continue heapifying if needed
            if (largest !== index) {
                this.swap(index, largest);
                this.heapify(largest);
            }
        }
    }

    // Create heap and insert all stones
    const heap = new MaxHeap();
    for (let i = 0; i < stones.length; i++) {
        heap.insert(stones[i]);
    }

    // Smash stones while more than one remains
    while (heap.heap.length > 1) {
        let v1 = heap.extractMax(); // largest stone
        let v2 = heap.extractMax(); // second largest stone

        // If stones are not equal, insert the difference
        if (v1 === v2) continue;
        else if (v1 !== v2) {
            v1 = v1 - v2;
            heap.insert(v1);
        }
    }

    // Return remaining stone or 0
    if (heap.heap.length === 1) {
        return heap.heap[0];
    } else {
        return 0;
    }
};
