var topKFrequent = function(nums, k) {

    let result = []; // stores final answer

    class MaxHeap {
        constructor() {
            this.heap = []; // heap array
        }

        // get parent index
        parent(index) {
            return Math.floor((index - 1) / 2);
        }

        // get left child index
        leftChild(index) {
            return 2 * index + 1;
        }

        // get right child index
        rightChild(index) {
            return 2 * index + 2;
        }

        // swap two heap elements
        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        // insert [number, frequency] into heap
        insert(value) {
            this.heap.push(value);           // add at end
            let index = this.heap.length - 1;

            // move up while parent frequency is smaller
            while (
                index > 0 &&
                this.heap[this.parent(index)][1] < this.heap[index][1]
            ) {
                this.swap(index, this.parent(index));
                index = this.parent(index);
            }
        }

        // remove and return element with highest frequency
        extractMax() {
            if (this.heap.length === 0) return null;

            const max = this.heap[0];        // store top element
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();                 // remove last element
            this.heapify(0);                 // fix heap

            return max;
        }

        // fix heap from top to bottom
        heapify(index) {
            let largest = index;
            let left = this.leftChild(index);
            let right = this.rightChild(index);

            // check left child frequency
            if (
                left < this.heap.length &&
                this.heap[left][1] > this.heap[largest][1]
            ) {
                largest = left;
            }

            // check right child frequency
            if (
                right < this.heap.length &&
                this.heap[right][1] > this.heap[largest][1]
            ) {
                largest = right;
            }

            // if parent is not largest, swap and continue
            if (largest !== index) {
                this.swap(index, largest);
                this.heapify(largest);
            }
        }
    }

    

    const heap = new MaxHeap();
    let freq = new Map(); // count frequency of numbers

    // count frequency of each number
    for (let i = 0; i < nums.length; i++) {
        if (freq.has(nums[i])) {
            freq.set(nums[i], freq.get(nums[i]) + 1);
        } else {
            freq.set(nums[i], 1);
        }
    }

    // push [number, frequency] into heap
    for (let [key, val] of freq.entries()) {
        heap.insert([key, val]);
    }

    // extract top k frequent elements
    for (let i = 0; i < k; i++) {
        result.push(heap.extractMax()[0]);
    }

    return result; // final answer
};
