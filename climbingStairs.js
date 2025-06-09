var climbStairs = function(n) {
    let arr = []; // Array to store the number of ways to reach each step

    if (n === 1) return 1; // If there's only 1 step, there's only 1 way to climb

    arr[1] = 1; // 1 way to climb 1 step
    arr[2] = 2; // 2 ways to climb 2 steps

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]; // Ways to reach current step = sum of ways to reach two previous steps
    }

    return arr[n]; // Return the total ways to climb n steps
};
