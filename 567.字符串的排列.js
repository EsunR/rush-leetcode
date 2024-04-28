/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
// function perm(s) {
//   var result = [];
//   if (s.length <= 1) {
//     return [s];
//   } else {
//     for (var i = 0; i < s.length; i++) {
//       var current = s[i];
//       var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
//       var subPerm = perm(newStr);

//       for (var j = 0; j < subPerm.length; j++) {
//         var tmp = current + subPerm[j];
//         result.push(tmp);
//       }
//     }
//   }
//   return result;
// }

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  const cnt1 = new Map();
  for (let i = 0; i < s1.length; i++) {
    const current = s1[i];
    cnt1.set(current, (cnt1.get(current) || 0) + 1);
  }
  const cnt2 = new Map();
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    const currentPort = s2.slice(i, i + s1.length);
    if (i === 0) {
      for (let j = 0; j < currentPort.length; j++) {
        const current = currentPort[j];
        cnt2.set(current, (cnt2.get(current) || 0) + 1);
      }
    } else {
      const last = currentPort[currentPort.length - 1]
      cnt2.set(last, (cnt2.get(last) || 0) + 1);
    }
    const matched = Array.from(cnt1.entries()).every(([key, value]) => {
      return cnt2.get(key) === value;
    });
    if (matched) {
      return true;
    }
    // 移除滑动窗口移出字符的统计值
    cnt2.set(s2[i], cnt2.get(s2[i]) - 1);
  }
  return false;
};

const result = checkInclusion("ab", "eidbaooo");
console.log("🚀 ~ result:", result);

// @lc code=end
