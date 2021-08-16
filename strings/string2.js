/*
 * @Author: your name
 * @Date: 2021-08-16 16:21:20
 * @LastEditTime: 2021-08-16 17:36:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/strings/string2.js
 */
/**
 * 4. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
通过次数587,813提交次数1,450,103

横向扫描
时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

空间复杂度：O(1)O(1)。使用的额外空间复杂度为常数。

 */

/**
 * @param {string[]} strs
 * @return {string}
 */

// var min = function(x, y) {
//     if (x < y) {
//         return x;
//     }
//     return y;
// }

// var lcp = function(str1, str2) {
//     let length = min(str1.length, str2.length);
//     let index = 0;
//     while(index < length && str1[index] === str2[index]) {
//         index++;
//     }
//     return str1.substring(0, index);
// }

//  var longestCommonPrefix = function(strs) {
//      let count = strs.length;
//     if(count === 0) return "";
//     let prefix = strs[0];
//     for (let i = 1; i < count; i++) {
//         prefix = lcp(prefix, strs[i]);
//         if (prefix.length === 0) {
//             break;
//         }
//     }
//     return prefix;
// };

/**
 * 方法二，纵向扫描
 * 时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

空间复杂度：O(1)O(1)。使用的额外空间复杂度为常数。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

// var longestCommonPrefix = function (strs) {
//     if (strs === null || strs.length === 0) return "";
//     let length = strs[0].length;
//     let count = strs.length;
//     for(let i = 0; i < length; i++) {
//         let c = strs[0].charAt(i);
//         for (let j = 1; j < count; j++) {
//             if (i === strs[j].length || strs[j].charAt(i) !== c) {
//                 return strs[0].substring(0, i)
//             }
//         }
//     }
//     return strs[0];
// };

/**
 * 方法三
 * 分治
 * 
 */
 var longestCommonPrefix = function (strs) {
    
};
