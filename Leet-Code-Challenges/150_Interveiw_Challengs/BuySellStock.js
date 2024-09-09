// Best Time to Buy and Sell Stock
/**
 *  Input: prices = [7,1,5,3,6,4] - lowDay = 2 and the best profit day to sell is when price = 6
 *  Output: 5
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowDay = 0;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[lowDay]) {
      lowDay = i;
    } else if (prices[i] - prices[lowDay] > maxProfit) {
      maxProfit = prices[i] - prices[lowDay];
    }
    console.log(lowDay, maxProfit);
  }
  return maxProfit ? maxProfit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected Output : 5
