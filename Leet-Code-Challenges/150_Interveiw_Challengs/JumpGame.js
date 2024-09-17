/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Input: nums = [2,3,1,1,4]
// Output: true
var canJump = function (nums) {
  // check the maximum reached values for the current state
  let maxReach = 0;

  // iterate through the array
  for (let i = 0; i <= nums.length; i++) {
    // if the maximum reached value is less than the current index,that means he stuced.
    if (maxReach < i) {
      return false;
    }

    // update the maximum reached values
    maxReach = Math.max(maxReach, nums[i] + i);

    // if the maximum reached value is equal to the length of the array, return true
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }
  return maxReach >= nums.length - 1;
};
// Example 1:
console.log(canJump([2, 3, 1, 1, 4])); // Output: true

// Example 2:
console.log(canJump([3, 2, 1, 0, 4])); // Output: false

console.log(canJump([])); // Edge case: empty array
console.log(canJump([0])); // Edge case: one element
console.log(canJump([2, 0])); // Small array
