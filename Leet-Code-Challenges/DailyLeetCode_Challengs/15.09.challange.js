/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  // Map to store the first occurrence of each bitmask state.
  let firstOccurrence = new Map();

  // Initialize the bitmask to 0 (all vowels even at the start).
  let bitmask = 0;

  // Store -1 for bitmask 0, meaning we have seen it before the string starts.
  firstOccurrence.set(0, -1);

  // To keep track of the maximum length of the substring found.
  let maxLength = 0;

  // Iterate over the string, character by character.
  for (let i = 0; i < s.length; i++) {
    // Update the bitmask based on the current character.
    if (s[i] === "a") {
      bitmask ^= 1 << 0; // Toggle the 0th bit (for 'a').
    } else if (s[i] === "e") {
      bitmask ^= 1 << 1; // Toggle the 1st bit (for 'e').
    } else if (s[i] === "i") {
      bitmask ^= 1 << 2; // Toggle the 2nd bit (for 'i').
    } else if (s[i] === "o") {
      bitmask ^= 1 << 3; // Toggle the 3rd bit (for 'o').
    } else if (s[i] === "u") {
      bitmask ^= 1 << 4; // Toggle the 4th bit (for 'u').
    }

    // Check if this bitmask has been seen before.
    if (firstOccurrence.has(bitmask)) {
      // Calculate the length of the substring from first occurrence of this bitmask.
      maxLength = Math.max(maxLength, i - firstOccurrence.get(bitmask));
    } else {
      // If it's the first time seeing this bitmask, record its index.
      firstOccurrence.set(bitmask, i);
    }
  }

  return maxLength;
};

// Example 1:
console.log(findTheLongestSubstring("eleetminicoworoep")); // Output: 13
