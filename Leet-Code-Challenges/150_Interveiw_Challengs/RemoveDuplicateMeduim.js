// Remove Duplicates from Sorted Array II

/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
var removeDuplicates = function (nums) {
  let k = 1,
    twice = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      if (!twice) {
        twice = true;
        nums[k] = nums[i];
        k++;
      }
    } else {
      twice = false;
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// Test the function

let nums1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let result1 = removeDuplicates(nums1);
console.log(result1); // Output: 5
console.log(nums1); // Output: [1,1,2,2,3]
