/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];

    // 🔹 Step 1: Sort the array to make two pointer approach possible
    nums.sort((a , b) => a - b);

    // 🔹 Step 2: Iterate through the array, fixing one number at a time
    for(let i = 0; i < nums.length - 2; i++) {
        
        //  Skip duplicate values for 'i' to avoid duplicate triplets
        if(i > 0 && nums[i - 1] === nums[i]) continue;

        let left = i + 1; //  Left pointer
        let right = nums.length - 1; //  Right pointer

        //  Step 3: Use two pointers to find the remaining two numbers
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0) {
                // Triplet found, push into result
                result.push([nums[i], nums[left], nums[right]]);

                //  Skip duplicate values for left and right
                while(nums[left] === nums[left + 1] && left < right) left++;
                while(nums[right] === nums[right - 1] && left < right) right--;

                //  Move both pointers after storing a valid triplet
                left++;
                right--;
            }
            else if(sum < 0) {
                //  If sum is too small, increase it by moving left
                left++;
            }
            else {
                //  If sum is too large, decrease it by moving right
                right--;
            }
        }
    }

    // Step 4: Return all unique triplets that sum to 0
    return result;
};
