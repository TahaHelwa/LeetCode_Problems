// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  // Step 1: Extract values from the linked list into an array
  let values = [];
  let current = head;
  while (current != null) {
    values.push(current.val);
    current = current.next;
  }

  // Step 2: Initialize the matrix with -1
  let matrix = Array.from({ length: m }, () => Array(n).fill(-1));

  // Step 3: Spiral fill the matrix
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  let index = 0; // Index for the values array

  while (top <= bottom && left <= right) {
    // Fill from left to right
    for (let col = left; col <= right; col++) {
      if (index < values.length) {
        matrix[top][col] = values[index++];
      }
    }
    top++;

    // Fill from top to bottom
    for (let row = top; row <= bottom; row++) {
      if (index < values.length) {
        matrix[row][right] = values[index++];
      }
    }
    right--;

    // Fill from right to left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        if (index < values.length) {
          matrix[bottom][col] = values[index++];
        }
      }
      bottom--;
    }

    // Fill from bottom to top
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        if (index < values.length) {
          matrix[row][left] = values[index++];
        }
      }
      left++;
    }
  }

  return matrix;
};
// Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
// Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
// test this example in smallest lines using for loop

// Initialize the input array
let arr = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0];

// Create the linked list from the array
let head = new ListNode(arr[0]);
let current = head;

for (let i = 1; i < arr.length; i++) {
  current.next = new ListNode(arr[i]);
  current = current.next;
}

// Call the function to generate the spiral matrix
let result = spiralMatrix(3, 5, head);
console.log(result);
