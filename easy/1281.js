"use strict";
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


//   Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21


// Constraints:

// 1 <= n <= 10 ^ 5
(function () {
  /**
   * @param {number} n
   * @return {number}
   */
  const subtractProductAndSum = function (n) {
    let multTotal = 1;
    let sumTotal = 0;
    for (let m = n; m > 0; m = Math.floor(m / 10)) {
      const currentNum = m % 10;
      multTotal *= currentNum;
      sumTotal += currentNum;
    }
    return multTotal - sumTotal;
  };
  // subtractProductAndSum(1234);
})()

//Runtime:      99.72%
//Memory Usage: 100%