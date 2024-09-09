// majority Element Problem
// it uses Boyer-Moore Voting Algorithm .

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) candidate = num;
    count += ( num === candidate ) ? 1 : -1;
  }

  return candidate;
};

// Test Cases

console.log(majorityElement([3, 2, 3])); // Expected Output : 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected Output : 2
console.log(majorityElement([8, 8, 8, 7, 7, 7, 7, 7, 7, 7])); // Expected Output : 7

// Time Complexity : O(n)
