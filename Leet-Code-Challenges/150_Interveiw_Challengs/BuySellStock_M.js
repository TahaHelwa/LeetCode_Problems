// 122 - Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */

// Input: prices = [7,1,5,3,6,4]
// Output: 7
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};
// Example 1
let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 7

// Example 2
let prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices2)); // Output: 4

// Example 3
let prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3)); // Output: 0
