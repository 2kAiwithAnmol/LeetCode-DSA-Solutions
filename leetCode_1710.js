var maximumUnits = function(boxTypes, truckSize) {
    // Sort the box types in descending order based on units per box
    // So we always pick the most valuable boxes first
    boxTypes.sort((a, b) => b[1] - a[1]);

    let limit = 0; // Keeps track of how many boxes we've loaded so far
    let ans = 0;   // Stores total units collected

    // Go through each type of box
    for (let i = 0; i < boxTypes.length; i++) {
        let boxes = boxTypes[i][0];  // Number of boxes available
        let units = boxTypes[i][1];  // Units per box

        // If truck is already full, stop
        if (limit >= truckSize) break;

        // Take as many boxes as possible without exceeding truck capacity
        let take = Math.min(boxes, truckSize - limit);

        // Add the units from the boxes we take
        ans += take * units;

        // Update how many boxes are now in the truck
        limit += take;
    }

    // Return the maximum units we can carry
    return ans;
};