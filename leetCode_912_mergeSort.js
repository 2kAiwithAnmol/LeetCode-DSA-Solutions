var sortArray = function(nums) {

    // Start the merge sort on the entire array
    mergeSort(0, nums.length - 1);

    // Recursive function to divide the array into smaller parts
    function mergeSort(start, end) {
        // Base case: if the subarray has 0 or 1 element, it's already sorted
        if (start >= end) return;

        // Find the middle index to split the array
        let mid = Math.floor((start + end) / 2);

        // Recursively sort the left half
        mergeSort(start, mid);

        // Recursively sort the right half
        mergeSort(mid + 1, end);

        // Merge the two sorted halves back together
        merge(start, mid, end);
    }

    // Function to merge two sorted subarrays: nums[start..mid] and nums[mid+1..end]
    function merge(start, mid, end) {
        let temp = [];      // Temporary array to hold sorted elements
        let i = start;      // Pointer for the left subarray
        let j = mid + 1;    // Pointer for the right subarray

        // Compare elements from left and right subarrays and push the smaller one
        while (i <= mid && j <= end) {
            if (nums[i] < nums[j]) {
                temp.push(nums[i]);
                i++;        // Move left pointer forward
            } else {
                temp.push(nums[j]);
                j++;        // Move right pointer forward
            }
        }

        // If any elements are left in the left subarray, add them
        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }

        // If any elements are left in the right subarray, add them
        while (j <= end) {
            temp.push(nums[j]);
            j++;
        }

        // Copy the sorted elements from temp back into the original array
        for (let k = 0; k < temp.length; k++) {
            nums[start + k] = temp[k];
        }
    }

    // Return the sorted array
    return nums;
};