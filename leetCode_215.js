let k = 2; // we want the 2nd largest element

class MaxHeap {
    constructor() {
        this.heap = []; // array to store heap elements
    }

    // Get index of parent node
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get index of left child
    leftChild(index) {
        return 2 * index + 1;
    }

    // Get index of right child
    rightChild(index) {
        return 2 * index + 2;
    }

    // Swap two values in the heap array
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a new value into the heap
    insert(value) {
        // Step 1: add value at the end
        this.heap.push(value);
        let index = this.heap.length - 1;

        // Step 2: move the value up until heap rule is satisfied
        while (
            index > 0 &&
            this.heap[this.parent(index)] < this.heap[index]
        ) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    // Remove and return the maximum element (root)
    extractMax() {
        if (this.heap.length === 0) return null;

        const max = this.heap[0]; // store max value

        // Move last element to root
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop(); // remove last element

        // Fix heap from top
        this.heapify(0);

        return max; // return removed max value
    }

    // Fix heap property from a given index downward
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

        // If parent is not the largest, swap and continue
        if (largest !== index) {
            this.swap(index, largest);
            this.heapify(largest);
        }
    }
}

// ---------------- USAGE ----------------

const heap = new MaxHeap();

// Insert elements into heap
heap.insert(11);
heap.insert(44);
heap.insert(45);
heap.insert(46);
heap.insert(87);
heap.insert(99);
heap.insert(100);

// Remove max element k times to get kth largest
let kth;
for (let i = 0; i < k; i++) {
    kth = heap.extractMax();
}

// kth largest element
console.log(kth);        // 2nd largest element

// Full heap object
console.log(heap);

