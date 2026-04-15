var minCostToMoveChips = function(position) {
    let odd = 0;   // count of chips at odd positions
    let even = 0;  // count of chips at even positions

    // loop through all chip positions
    for(let i = 0; i < position.length; i++) {

        // check if the position value is even
        if(position[i] % 2 === 0) {
            even += 1;  // increase even count
        }
        else {
            odd += 1;   // increase odd count
        }
    }

    // return the minimum cost:
    // move either odd chips to even OR even chips to odd
    return Math.min(odd, even);
};