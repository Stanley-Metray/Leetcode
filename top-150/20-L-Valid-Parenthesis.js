console.clear();

function isValid(s) {
    if (Math.floor(s.length % 2) !== 0) return false;

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{')
            stack.push(s[i]);
        else {
            let l = stack.length - 1;

            if (stack.length > 0 && s[i] === ')' && stack[l] !== '('
                || s[i] === ']' && stack[l] !== '['
                || s[i] === '}' && stack[l] !== '{')
                return false;

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
