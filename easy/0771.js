"use strict";
/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive, so "a" is considered a different type of stone from "A".

  Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/
(function () {
  /**
   * @param {string} J
   * @param {string} S
   * @return {number}
   */
  const numJewelsInStones = function (J, S) {
    let count = 0;
    let string = "potato";
    for (let i = 0; i < J.length; i++) {
      for (let k = 0; k < S.length; k++) {
        if (J.charAt(i) === S.charAt(k)) count++;
      }
    }
    return count;
  };
  const J = "aA";
  const S = "aAAbbbb"
  console.log(numJewelsInStones(J, S));
  //Runtime:      8.55%
  //Memory Usage: 5.97%

  const numJewelsInStones2 = function (J, S) {
    const jewels = J.split("");
    const stones = S.split("");
    let count = 0;
    for (let jewel of jewels) {
      for (let stone of stones) {
        if (jewel === stone) count++;
      }
    }
    return count;
  };
  console.log(numJewelsInStones2(J, S));
  //Runtime:      38.86%
  //Memory Usage: 5.97%

  const numJewelsInStones3 = function (J, S) {
    const jewels = J.split("");
    const stones = S.split("");

    return stones.filter(stone => jewels.includes(stone)).length;
  };
  console.log(numJewelsInStones3(J, S));
  //Runtime:      62.40%
  //Memory Usage: 74.63%
})()