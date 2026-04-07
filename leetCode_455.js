var findContentChildren = function(g, s) {

    // sort both arrays so we match smallest with smallest
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);

    let i = 0; // pointer for children
    let j = 0; // pointer for cookies
    let count = 0; // number of satisfied children

    // loop until we run out of children or cookies
    while(i < g.length && j < s.length) {

        // if current cookie can satisfy current child
        if(s[j] >= g[i]) {
            i++;        // move to next child
            count++;    // one child is satisfied
        }

        // always move to next cookie (used or wasted)
        j++;
    }

    // return total satisfied children
    return count;
};