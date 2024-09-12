console.clear();

function evalRPN(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            let last = stack.pop();
            let first = stack.pop();
            let sum = first + last;
            stack.push(sum);
        }
        else if (tokens[i] === '-') {
            let last = stack.pop();
            let first = stack.pop();
            let sum = first - last;
            stack.push(sum);
        }
        else if (tokens[i] === '*') {
            let last = stack.pop();
            let first = stack.pop();
            let sum = first * last;
            stack.push(sum);
        }
        else if (tokens[i] === '/') {
            let last = stack.pop();
            let first = stack.pop();
            let sum = Math.trunc(first / last);
            stack.push(sum);
        }
        else {
            stack.push(parseInt(tokens[i]));
        }
    }

    return stack[stack.length - 1];
}

// Test cases for you to try

console.log("Test Case 1: ");
console.log(evalRPN(["2", "1", "+", "3", "*"]));
// Expected Output: 9

console.log("Test Case 2: ");
console.log(evalRPN(["4", "13", "5", "/", "+"]));
// Expected Output: 6

console.log("Test Case 3: ");
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
// Expected Output: 22

console.log("Test Case 4: ");
console.log(evalRPN(["3", "4", "+", "2", "*", "7", "/"]));
// Expected Output: 2

console.log("Test Case 5: ");
console.log(evalRPN(["5", "1", "2", "+", "4", "*", "+", "3", "-"]));
// Expected Output: 14

console.log("Test Case 6: ");
console.log(evalRPN(["2", "3", "*", "11", "+"]));
// Expected Output: 17

console.log("Test Case 7: ");
console.log(evalRPN(["15", "7", "1", "1", "+", "-", "/", "3", "*", "2", "1", "1", "+", "+", "-"]));
// Expected Output: 5



console.log("Test Case 9: ");
console.log(evalRPN(["7", "4", "3", "/", "+"]));
// Expected Output: 8

console.log("Test Case 10: ");
console.log(evalRPN(["12", "3", "/", "3", "*", "4", "+"]));
// Expected Output: 16
