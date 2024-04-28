/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const splitVersion1 = version1.split(".");
  const splitVersion2 = version2.split(".");
  let i = 0;
  while (true) {
    const v1 = parseInt(splitVersion1[i]);
    const v2 = parseInt(splitVersion2[i]);
    // 所有版本号的位数已经比完了
    if (isNaN(v1) && isNaN(v2)) {
      return 0;
    }
    // 其中一个版本号已经没有位数了
    if (isNaN(v1) || isNaN(v2)) {
      if (v1 === 0 || v2 === 0) {
        i++;
        continue;
      }
      return isNaN(v2) ? 1 : -1;
    }
    // 比较大版本号
    if (v1 === v2) {
      i++;
      continue;
    } else {
      return v1 > v2 ? 1 : -1;
    }
  }
};
// @lc code=end
console.log(compareVersion("1.0.1", "1"));
