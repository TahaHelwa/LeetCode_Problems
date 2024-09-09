/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// nums1 = [1], m = 1, nums2 = [], n = 0
// nums1 = [0], m = 0, nums2 = [1], n = 1

var merge = function (nums1, m, nums2, n) {
  // initialize pointers for nums1 , nums2 and p for final array elements
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  // loop while p1 and p2 have elements
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  // if there is any more element in p2
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

// Test the function
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
