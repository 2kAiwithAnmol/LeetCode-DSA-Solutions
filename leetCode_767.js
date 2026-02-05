var reorganizeString = function(s) {

    // Max Heap implementation where heap elements are [count, char]
    class Maxheap {
        constructor() {
            this.heap = [];
        }

        // Get parent index
        parent(index) {
            return Math.floor((index - 1) / 2);
        }

        // Get left child index
        leftChild(index) {
            return 2 * index + 1;
        }

        // Get right child index
        rightChild(index) {
            return 2 * index + 2;
        }

        // Swap two elements in heap
        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        // Insert a new value into heap
        insert(value) {
            this.heap.push(value);
            let index = this.heap.length - 1;

            // Bubble up to maintain max-heap property
            while (
                index > 0 &&
                this.heap[this.parent(index)][0] < this.heap[index][0]
            ) {
                this.swap(index, this.parent(index));
                index = this.parent(index);
            }
        }

        // Remove and return the max element
        extractMax() {
            if (this.heap.length === 0) return null;

            const max = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.heapify(0);
            return max;
        }

        // Restore heap property from given index
        heapify(index) {
            let largest = index;
            let left = this.leftChild(index);
            let right = this.rightChild(index);

            if (
                left < this.heap.length &&
                this.heap[left][0] > this.heap[largest][0]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][0] > this.heap[largest][0]
            ) {
                largest = right;
            }

            if (largest !== index) {
                this.swap(index, largest);
                this.heapify(largest);
            }
        }
    }

    const heap = new Maxheap();
    let freq = new Map();
    let result = "";
    let prev = null; // Stores previous character with remaining count

    // Count frequency of each character
    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    // If any character appears more than half the length, it's impossible
    for (let count of freq.values()) {
        if (count > Math.ceil(s.length / 2)) return "";
    }

    // Insert all characters with their counts into the max heap
    for (let [char, count] of freq.entries()) {
        heap.insert([count, char]);
    }

    // Build the result string
    while (heap.heap.length > 0) {
        let [count, char] = heap.extractMax();
        result += char;
        count--;

        // Reinsert the previous character if it still has remaining count
        if (prev !== null) {
            heap.insert(prev);
            prev = null;
        }

        // Store current character for next iteration if it still has count
        if (count > 0) {
            prev = [count, char];
        }
    }

    return result;
};
