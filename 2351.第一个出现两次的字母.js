/*
 * @lc app=leetcode.cn id=2351 lang=javascript
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const map = new Map();
  const sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    const current = sArr[i];
    const recordedVal = map.get(current);
    if (recordedVal) {
      return current;
    } else {
      map.set(current, 1);
    }
  }
};
// @lc code=end
