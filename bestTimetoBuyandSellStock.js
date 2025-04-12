var maxProfit = function(prices) {
    // Assume the first price as the initial buying price
    let buyPrice = prices[0];

    // Initialize maxProfit to 0 (no profit yet)
    let maxProfit = 0;

    // Loop through the prices to find the best day to sell
    for(let i = 0; i < prices.length; i++) {

        // If today's price is lower than our current buy price, we update it
        if(prices[i] < buyPrice) {
            buyPrice = prices[i];
        }

        // Calculate profit if we sell at today's price
        let max = prices[i] - buyPrice;

        // Update maxProfit if this profit is higher than previous max
        maxProfit = Math.max(maxProfit, max);
    }

    // Return the highest profit possible
    return maxProfit;
};
