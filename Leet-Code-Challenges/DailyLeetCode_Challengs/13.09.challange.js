/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0];
    let r = queries[i][1];
    let sum = 0;
    for (let j = l; j <= r; j++) {
      sum ^= arr[j];
    }
    result.push(sum);
  }
  return result;
};

// Test cases

console.log(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ]
  )
); // Output: [2,7,14,8]
console.log(
  xorQueries(
    [4, 8, 2, 10],
    [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3],
    ]
  )
); // Output: [8,0,4,4]

console.log(
  xorQueries(
    [1, 1, 2],
    [
      [0, 2],
      [0, 1],
      [2, 2],
    ]
  )
); // Output: [2,1,2]
