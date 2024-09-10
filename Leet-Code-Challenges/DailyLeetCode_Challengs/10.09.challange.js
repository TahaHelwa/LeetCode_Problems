// 2807. Insert Greatest Common Divisors in Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {listNode} head
 * @return {ListNode}
 */
// class ListNode extends
class listNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
// function GCD
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

var insertGreatestCommonDivisors = function (head) {
  let current = head;
  // go through linked list
  while (current && current.next) {
    // calcualte gcd between the current and the next
    let gcdValue = gcd(current.value, current.next.value);

    // create a new node with gcdValue
    let newNode = new listNode(gcdValue);

    // insert the newNode before the current.next
    newNode.next = current.next;
    current.next = newNode;

    // move to the next node (skip the inserted GCD node)
    current = current.next.next;
  }
  return head;
};
// list the array in the linked list
function arrayToList(arr) {
  let dummy = new listNode(arr[0]);
  let current = dummy;
  for (let i = 1; i < arr.length; i++) {
    current.next = new listNode(arr[i]);
    current = current.next;
  }
  return dummy;
}
// list the last output to the array .
function listToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}
// Test case
let head = arrayToList([18, 6, 10, 3]);
head = insertGreatestCommonDivisors(head);
console.log(listToArray(head)); // Output: [18, 6, 6, 2, 10, 1, 3]
