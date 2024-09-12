console.clear();

function isValid(s) {
    let stack = [];

    if (Math.floor(s.length % 2) !== 0)
        return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[')
            stack.push(s[i]);
        else {
            let top = stack.length;

            if (top === 0 || s[i] === ')' && stack[top - 1] !== '('
                || s[i] === '}' && stack[top - 1] !== '{'
                || s[i] === ']' && stack[top - 1] !== '[') {
                return false;
            }
            stack.pop();
        }
    }
    return true;
}

console.log("Test Case 1: ", isValid("()"));         // Expected Output: true
console.log("Test Case 2: ", isValid("()[]{}"));     // Expected Output: true
console.log("Test Case 3: ", isValid("(]"));         // Expected Output: false
console.log("Test Case 4: ", isValid("([])"));       // Expected Output: true
console.log("Test Case 5: ", isValid("{[()]}"));     // Expected Output: true
console.log("Test Case 6: ", isValid("([)]"));       // Expected Output: false
console.log("Test Case 7: ", isValid("{{[]}}"));     // Expected Output: true
console.log("Test Case 8: ", isValid("{[}"));        // Expected Output: false
console.log("Test Case 9: ", isValid("[({})]"));     // Expected Output: true
console.log("Test Case 10: ", isValid("([{}])"));    // Expected Output: true
