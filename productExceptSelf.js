/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let left = new Array(nums.length);
    let right = new Array(nums.length);
    left[0] = 1;
    for(let i = 1; i< left.length;i++) {
        left[i] = left[i-1]*nums[i-1];
    }
    right[nums.length-1] = 1;
    for(let i=nums.length-2;i >- 1;i--) {
        right[i] = right[i+1]*nums[i+1];
    }
    for(let i =0;i<nums.length;i++){
        answer[i] = left[i]*right[i];
    }
  return answer  
};