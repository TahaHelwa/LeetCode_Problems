/**
 * @param {string[]} timePoints
 * @return {number}
 */
// Input: timePoints = ["23:59","00:00"]
// Output: 1
var findMinDifference = function (timePoints) {
  // function to convert time "HH:MM" to total minutes from 00:00
  function timeToMinutes(time) {
    let [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  // Step 1: Convert all time points to minutes
  let minutesArray = timePoints.map(timeToMinutes);

  // Step 2: Sort the array of minutes
  minutesArray.sort((a, b) => a - b);

  // Step 3: Initialize the minimum difference as the largest possible value
  let minDifference = 1440; // Maximum difference between two times in a day (24*60 = 1440)

  // Step 4: Find the minimum difference between consecutive time points
  for (let i = 1; i < minutesArray.length; i++) {
    minDifference = Math.min(
      minDifference,
      minutesArray[i] - minutesArray[i - 1]
    );
  }

  // Step 5: Check the difference between the first and last time points (wrap-around case)
  let wrapAroundDifference =
    1440 - (minutesArray[minutesArray.length - 1] - minutesArray[0]);

  // Return the minimum of consecutive differences and wrap-around difference
  return Math.min(minDifference, wrapAroundDifference);
};

// test cases

console.log(findMinDifference(["23:59", "00:00"])); // Output: 1
console.log(findMinDifference(["00:00", "23:59", "00:00"])); // Output: 0
