/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map[target - current] !== undefined) {
      return [map[target - current], i];
    } else {
      map[current] = i;
    }
  }
};
// @lc code=end
