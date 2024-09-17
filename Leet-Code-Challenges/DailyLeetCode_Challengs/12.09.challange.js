/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
//Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let word of words) {
    let isValid = true;
    for (let char of word) {
      if (!allowed.includes(char)) {
        isValid = false;
        break;
      }
    }
    if (isValid) count++;
  }
  return count;
};

//Test the function

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); // Expected Output : 2

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
); // Expected Output : 7

console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
); // Expected Output : 4
