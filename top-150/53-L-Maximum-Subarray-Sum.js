console.clear();

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    for(let i=0; i<nums.length; i++)
    {
        currSum += nums[i];

        maxSum = Math.max(currSum, maxSum);

        if(currSum<0)
            currSum = 0;
    }

    return maxSum;
}

// Test cases

// Test case 1: Mixed positive and negative numbers
console.log("Test Case 1:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Expected output: 6
// Explanation: The subarray [4, -1, 2, 1] has the largest sum 6.

// Test case 2: Single positive number
console.log("Test Case 2:", maxSubArray([1]));
// Expected output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Test case 3: All positive numbers
console.log("Test Case 3:", maxSubArray([5,4,-1,7,8]));
// Expected output: 23
// Explanation: The subarray [5, 4, -1, 7, 8] has the largest sum 23.

// Test case 4: All negative numbers
console.log("Test Case 4:", maxSubArray([-2, -3, -1, -5]));
// Expected output: -1
// Explanation: The subarray [-1] has the largest sum -1.

// Test case 5: Small array with alternating signs
console.log("Test Case 5:", maxSubArray([2, -1, 2]));
// Expected output: 3
// Explanation: The subarray [2, -1, 2] has the largest sum 3.

// Test case 6: Array of length 1 with negative number
console.log("Test Case 6:", maxSubArray([-3]));
// Expected output: -3
// Explanation: The subarray [-3] has the largest sum -3.

// Test case 7: Large array with all zeros
console.log("Test Case 7:", maxSubArray([0, 0, 0, 0, 0]));
// Expected output: 0
// Explanation: The subarray [0] has the largest sum 0.

// Test case 8: Large positive and negative numbers
console.log("Test Case 8:", maxSubArray([-10, 2, 3, -2, 7, -5, 8, -2]));
// Expected output: 13
// Explanation: The subarray [2, 3, -2, 7, -5, 8] has the largest sum 13.

// Test case 9: All elements are zero
console.log("Test Case 9:", maxSubArray([0, 0, 0, 0]));
// Expected output: 0
// Explanation: The subarray [0] has the largest sum 0.

// Test case 10: Empty array
console.log("Test Case 10:", maxSubArray([]));
// Expected output: 0
// Explanation: With an empty array, the largest sum is 0.
