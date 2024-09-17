/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */

var minBitFlips = function (start, goal) {
  let xorResult = start ^ goal;

  let count = 0;
  while (xorResult > 0) {
    count += xorResult & 1;

    xorResult >>= 1;
  }
  return count;
};

// Test Cases

console.log(minBitFlips(10, 7)); // Expected Output : 1
// console.log(minBitFlips(3, 4)); // Expected Output : 1
