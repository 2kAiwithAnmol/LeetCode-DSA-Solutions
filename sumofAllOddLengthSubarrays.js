var sumOddLengthSubarrays = function(arr) {
    let n = arr.length;

    // Create prefix sum array
    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }

    let total = 0;

    // Loop through all odd-length subarrays
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j += 2) {
            // Add sum of subarray arr[i..j] using prefix sum
            total += prefix[j + 1] - prefix[i];
        }
    }

    return total;
};
