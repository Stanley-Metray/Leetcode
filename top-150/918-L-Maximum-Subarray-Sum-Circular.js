console.clear();

// Function signature
var maxSubarraySumCircular = function(nums) {
    let minSum = findMinSum(nums);
    let maxSum = findMaxSum(nums);
    let totalSum = findTotalSum(nums);

    if(totalSum===minSum)
        return maxSum;

    return Math.max(maxSum, (totalSum-minSum));
};

function findMinSum(nums){
    let minSum = nums[0], currSum = 0;

    for(let i=0; i<nums.length; i++)
    {
        if(currSum>0)
            currSum = nums[i];
        else
            currSum +=nums[i];

        minSum = Math.min(currSum, minSum);
    }
    return minSum;
}

function findMaxSum(nums){
    let maxSum = nums[0], currSum=0;

    for(let i=0; i<nums.length; i++)
    {
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum);

        if(currSum<0)
            currSum=0;
    }

    return maxSum;
}

function findTotalSum(nums){
    let sum=0;

    for(let i=0; i<nums.length; i++)
        sum += nums[i];

    return sum;
}

// Test cases

// Test case 1: Mixed positive and negative numbers
console.log("Test Case 1:", maxSubarraySumCircular([1, -2, 3, -2]));
// Expected output: 3
// Explanation: Subarray [3] has the maximum sum 3.

// Test case 2: Array with wrap-around subarray
console.log("Test Case 2:", maxSubarraySumCircular([5, -3, 5]));
// Expected output: 10
// Explanation: The circular subarray [5, 5] has the maximum sum 10 (5 + 5).

// Test case 3: All negative numbers
console.log("Test Case 3:", maxSubarraySumCircular([-3, -2, -3]));
// Expected output: -2
// Explanation: Subarray [-2] has the maximum sum -2.

// Test case 4: All positive numbers
console.log("Test Case 4:", maxSubarraySumCircular([3, 2, 3, 4, 5]));
// Expected output: 17
// Explanation: The subarray [3, 2, 3, 4, 5] has the maximum sum 17.

// Test case 5: Circular subarray is required for maximum sum
console.log("Test Case 5:", maxSubarraySumCircular([10, -2, -3, 9]));
// Expected output: 19
// Explanation: The circular subarray [9, 10] has the maximum sum 19.

// Test case 6: Single positive number
console.log("Test Case 6:", maxSubarraySumCircular([7]));
// Expected output: 7
// Explanation: The subarray [7] has the maximum sum 7.

// Test case 7: Single negative number
console.log("Test Case 7:", maxSubarraySumCircular([-5]));
// Expected output: -5
// Explanation: The subarray [-5] has the maximum sum -5.

// Test case 8: Small array with alternating signs
console.log("Test Case 8:", maxSubarraySumCircular([2, -1, 2]));
// Expected output: 4
// Explanation: The subarray [2, -1, 2] has the maximum sum 4.

// Test case 9: Large array with all zeros
console.log("Test Case 9:", maxSubarraySumCircular([0, 0, 0, 0, 0]));
// Expected output: 0
// Explanation: The subarray [0] has the maximum sum 0.

// Test case 10: Circular subarray involving both positive and negative numbers
console.log("Test Case 10:", maxSubarraySumCircular([8, -1, -1, 8]));
// Expected output: 16
// Explanation: The circular subarray [8, 8] has the maximum sum 16.
