function summaryRanges(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let j = i;
        while (num + 1 === nums[j + 1]) {
            num++;
            j++;
        }

        if (i !== j)
            result.push(`${nums[i]}->${nums[j]}`);
        else
            result.push(`${nums[i]}`);
        i = j;
    }

    return result;
}

// Test cases

// Test case 1
console.log("Test Case 1:", summaryRanges([0, 1, 2, 4, 5, 7]));
// Expected output: ["0->2", "4->5", "7"]
// Explanation: The ranges are: [0,2] --> "0->2", [4,5] --> "4->5", [7,7] --> "7"

// Test case 2
console.log("Test Case 2:", summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// Expected output: ["0", "2->4", "6", "8->9"]
// Explanation: The ranges are: [0,0] --> "0", [2,4] --> "2->4", [6,6] --> "6", [8,9] --> "8->9"

// Test case 3: Single element
console.log("Test Case 3:", summaryRanges([5]));
// Expected output: ["5"]
// Explanation: Only one element, so the range is "5"

// Test case 4: Empty array
console.log("Test Case 4:", summaryRanges([]));
// Expected output: []
// Explanation: No elements in the array, so there are no ranges

// Test case 5: All consecutive elements
console.log("Test Case 5:", summaryRanges([1, 2, 3, 4, 5]));
// Expected output: ["1->5"]
// Explanation: The array is a single consecutive sequence from 1 to 5

// Test case 6: Non-consecutive with gaps
console.log("Test Case 6:", summaryRanges([1, 3, 5, 7]));
// Expected output: ["1", "3", "5", "7"]
// Explanation: No consecutive numbers, so each element is its own range

// Test case 7: Large consecutive sequence
console.log("Test Case 7:", summaryRanges([-10, -9, -8, -7, -6]));
// Expected output: ["-10->-6"]
// Explanation: The array is a consecutive sequence from -10 to -6

// Test case 8: Large gaps
console.log("Test Case 8:", summaryRanges([1, 100, 200, 300, 400]));
// Expected output: ["1", "100", "200", "300", "400"]
// Explanation: Each element is separated by large gaps, so they form individual ranges

// Test case 9: Mixed consecutive and non-consecutive
console.log("Test Case 9:", summaryRanges([1, 2, 5, 7, 8, 10]));
// Expected output: ["1->2", "5", "7->8", "10"]
// Explanation: The ranges are: [1,2] --> "1->2", [5,5] --> "5", [7,8] --> "7->8", [10,10] --> "10"

// Test case 10: Negative numbers and zeros
console.log("Test Case 10:", summaryRanges([-5, -4, -3, 0, 1, 2]));
// Expected output: ["-5->-3", "0->2"]
// Explanation: The ranges are: [-5,-3] --> "-5->-3", [0,2] --> "0->2"
