console.clear();

var largestRectangleArea = function (heights) {
    let ps = previosSmaller(heights);
    let ns = nextSmaller(heights);
    let max = 0;
    
    for (let i = 0; i < heights.length; i++) {
        let currMax = (ns[i] - ps[i] - 1) * heights[i];

        max = Math.max(currMax, max);
    }
    return max;
};

function previosSmaller(a) {
    let stack = [];
    let preSmaller = [];
    preSmaller[0] = -1;
    stack.push(0);

    for (let i = 1; i < a.length; i++) {
        while (stack.length > 0 && a[stack[stack.length - 1]] >= a[i])
            stack.pop();

        if (stack.length === 0)
            preSmaller.push(-1);
        else
            preSmaller.push(stack[stack.length - 1]);
        
        stack.push(i);
    }
    return preSmaller;
}

function nextSmaller(a) {
    let stack = [];
    let nextSmaller = new Array(a.length).fill(a.length);

    for (let i = a.length - 1; i >= 0; i--) {
        while (stack.length > 0 && a[stack[stack.length - 1]] >= a[i])
            stack.pop();

        if (stack.length > 0)
            nextSmaller[i] = stack[stack.length - 1];

        stack.push(i);
    }
    return nextSmaller;
}

// Test Case 1: Standard case with varying heights
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Expected output: 10

// Test Case 2: Minimal input with only two bars
console.log(largestRectangleArea([2, 4])); // Expected output: 4

// Test Case 3: All bars are of height 1
console.log(largestRectangleArea([1, 1, 1, 1, 1])); // Expected output: 5

// Test Case 4: One large bar in the middle
console.log(largestRectangleArea([1, 2, 4, 6, 4, 2, 1])); // Expected output: 12

// Test Case 5: Single element
console.log(largestRectangleArea([0])); // Expected output: 0

// Test Case 6: All bars are the same height
console.log(largestRectangleArea([5, 5, 5, 5, 5])); // Expected output: 25

// Test Case 7: Zeros in the heights array
console.log(largestRectangleArea([0, 0, 0, 0, 0])); // Expected output: 0

// Test Case 8: Increasing heights
console.log(largestRectangleArea([1, 2, 3, 4, 5])); // Expected output: 9

// Test Case 9: Decreasing heights
console.log(largestRectangleArea([5, 4, 3, 2, 1])); // Expected output: 10

// Test Case 10: Large zero at the end of the array
console.log(largestRectangleArea([6, 2, 5, 4, 5, 1, 6])); // Expected output: 12
