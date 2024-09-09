// remove duplicates from sorted array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] && i + 1 <= nums.length) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// test cases

const nums = [0];
console.log(removeDuplicates(nums), nums); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
