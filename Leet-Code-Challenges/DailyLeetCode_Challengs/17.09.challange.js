/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" "); // split s1 string into array of strings
  s2 = s2.split(" "); // split s1 string into array of strings
  const map = new Map();

  // Process s1 to update the frequency of each word in the map.
  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
  }

  // Process s2 to update the frequency of each word in the map.
  for (let i = 0; i < s2.length; i++) {
    if (map.has(s2[i])) {
      map.set(s2[i], map.get(s2[i]) + 1);
    } else {
      map.set(s2[i], 1);
    }
  }

  // Create an empty array to store the result (uncommon words).
  let result = [];

  // Iterate through the map to check the frequency of each word.
  for (let [key, value] of map) {
    // If the frequency of the word is exactly 1, it means the word is uncommon.
    if (value === 1) {
      // Add the uncommon word to the result array.
      result.push(key);
    }
  }

  return result;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // Output: ["sweet","sour"]
