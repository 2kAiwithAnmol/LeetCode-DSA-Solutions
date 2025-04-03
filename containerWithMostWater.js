/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; // Left pointer starts at the beginning of the array
    let right = height.length - 1; // Right pointer starts at the end of the array
    let maximum = 0; // Variable to store the maximum water area

    while (left < right) { // Continue until both pointers meet
        // Calculate the current area using the shorter height and the width between pointers
        let area = Math.min(height[left], height[right]) * (right - left);
        maximum = Math.max(maximum, area); // Update maximum area if the new one is larger

        // Move the pointer pointing to the shorter line to find a potentially larger area
        if (height[left] < height[right]) {
            left++; // Move left pointer forward
        } else {
            right--; // Move right pointer backward
        }
    }

    return maximum; // Return the maximum area found
};
