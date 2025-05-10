var majorityElement = function(nums) {
    let majority = nums[0]; // Initialize the majority candidate with the first element
    let votes = 1; // Start with one vote for the initial candidate

    for (let i = 1; i < nums.length; i++) {
        if (votes === 0) {
            // If vote count drops to 0, choose a new candidate
            majority = nums[i];
            votes = 1;
        } else if (majority === nums[i]) {
            // If current element equals candidate, increment vote count
            votes++;
        } else {
            // Otherwise, decrement vote count
            votes--;
        }
    }

    return majority; // The final candidate is the majority element
};
