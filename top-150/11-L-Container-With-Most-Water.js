console.clear();

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let area = (Math.min(height[left], height[right])) * (right - left);

        maxArea = Math.max(area, maxArea);

        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxArea;
}

// Test cases

// Test case 1
console.log("Test Case 1:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Expected output: 49
// Explanation: The max area is formed between the lines at indices 1 and 8.

// Test case 2
console.log("Test Case 2:", maxArea([1, 1]));
// Expected output: 1
// Explanation: The max area is formed between the two lines, both of height 1.

// Test case 3: All heights the same
console.log("Test Case 3:", maxArea([5, 5, 5, 5]));
// Expected output: 15
// Explanation: The max area is formed between the first and last lines, with height 5.

// Test case 4: Increasing heights
console.log("Test Case 4:", maxArea([1, 2, 3, 4, 5]));
// Expected output: 6
// Explanation: The max area is formed between the first and last lines (1 and 5), with height 1.

// Test case 5: Decreasing heights
console.log("Test Case 5:", maxArea([5, 4, 3, 2, 1]));
// Expected output: 6
// Explanation: The max area is again formed between the first and last lines (5 and 1), with height 1.

// Test case 6: Large array
console.log("Test Case 6:", maxArea([1, 3, 2, 5, 4, 8, 6, 7]));
// Expected output: 20
// Explanation: The max area is formed between the lines at indices 3 (height 5) and 5 (height 8).

// Test case 7: Minimum input case
console.log("Test Case 7:", maxArea([1]));
// Expected output: 0
// Explanation: With only one line, no container can be formed, resulting in 0 area.

// Test case 8: Random heights
console.log("Test Case 8:", maxArea([3, 1, 4, 5, 2, 6]));
// Expected output: 15
// Explanation: The max area is formed between the lines at indices 2 (height 4) and 5 (height 6), giving an area of 15.

// Test case 9: All zeros
console.log("Test Case 9:", maxArea([0, 0, 0, 0]));
// Expected output: 0
// Explanation: All lines are of height 0, resulting in 0 area.

// Test case 10: Two tall lines
console.log("Test Case 10:", maxArea([1, 10, 1, 10, 1]));
// Expected output: 20
// Explanation: The max area is formed between the first and fourth lines (height 10), with width 3.

