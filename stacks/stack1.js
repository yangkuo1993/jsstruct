/**
 * @param {string} s
 * @return {boolean}
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var isValid = function (s) {
    const n = s.length;
    if (n % 2 == 1) {
        return false;
    }
    const pairs = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ])
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        }else {
            stk.push(ch);
        }
    }
    return !stk.length;
};

var s = "()[]{}";
// var s = "{[]}";
console.log(isValid(s));