/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
function dfs(node, handler, callback) {
  if (typeof handler === "function") {
    handler(node);
  }
  if (node.left) {
    dfs(node.left, handler, callback);
  }
  if (node.right) {
    dfs(node.right, handler, callback);
  }
  if (typeof callback === "function") {
    callback(node);
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  const pathHistory = [];
  dfs(
    root,
    function (node) {
      pathHistory.push(node.val);
      if (!node.left && !node.right) {
        result.push(pathHistory.slice());
      }
    },
    function () {
      pathHistory.pop();
    }
  );
  return result.map((path) => path.join("->"));
};
// @lc code=end

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode("1");
const node_2 = new TreeNode("2");
const node_3 = new TreeNode("3");
const node_4 = new TreeNode("4");
const node_5 = new TreeNode("5");
const node_6 = new TreeNode("6");
const node_7 = new TreeNode("7");
const node_8 = new TreeNode("8");

root.left = node_2;
root.right = node_3;
node_2.left = node_4;
node_2.right = node_5;
node_3.left = node_6;
node_3.right = node_7;
node_4.left = node_8;

console.log(binaryTreePaths(root));
