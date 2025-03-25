/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = new Set();
    nums.sort((a,b) => a - b);
    for(let i=0;i<nums.length-2;i++) {
        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.add(JSON.stringify([nums[i],nums[left],nums[right]]));
                left++;
                right--;
            }
            else if(sum<0){
                left++;
            }
            else {
                right--;
            }
        }
    }
    return Array.from(result).map(str => JSON.parse(str));
};