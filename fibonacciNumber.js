var fib = function(n) {
    let map = new Map(); // Store Fibonacci values
    map.set(0, 0); // Base case: F(0)
    map.set(1, 1); // Base case: F(1)
    for (let i = 2; i <= n; i++) {
        map.set(i, map.get(i - 1) + map.get(i - 2)); // F(n) = F(n-1) + F(n-2)
    }
    return map.get(n); // Return F(n)
};
