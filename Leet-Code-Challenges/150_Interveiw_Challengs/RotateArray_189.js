// Problem : Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k > n

  // function to reverse part of the array
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(k, n - 1);
};

// test case
// [1,2,3,4,5,6,7], k = 3
nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);
