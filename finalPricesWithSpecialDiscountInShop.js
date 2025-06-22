var finalPrices = function(prices) {
    let stack = []; // Index stack to track potential discounts
    let result = [...prices]; // Copy of original prices array

    for (let i = 0; i < prices.length; i++) {
        // Find next smaller or equal price to apply discount
        while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = prices[index] - prices[i];
        }
        stack.push(i); // Push current index for future comparison
    }

    return result; // Return final prices after discount
};
