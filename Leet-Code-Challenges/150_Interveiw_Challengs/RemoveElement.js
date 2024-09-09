/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

// example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

var removeElement = function (nums, val) {
  let k = 0; // number of indexes without the remove elements in the array

  // refactor the array to remove elements that are not equal to val
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to val, move it to the front
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  // k is now the number of elements not equal to val
  return k;
};
// example 1 :
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let result1 = removeElement(nums1, val1);
console.log(result1); // Output: 2
console.log(nums1); // Output: [2, 2, _, _]

// example 2:
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let result2 = removeElement(nums2, val2);
console.log(result2); // Output: 5
console.log(nums2); // Output: [0, 1, 3, 0, 4, _, _, _]
