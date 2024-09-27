console.clear();

function minSubArrayLen(target, nums) {
    let minWindow = nums.length + 1;
    let sum = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        sum += nums[right];

        while (sum >= target) {
            minWindow = Math.min(minWindow, (right - left + 1));
            sum -= nums[left++];
        }
        right++;
    }

    return minWindow === nums.length + 1 ? 0 : minWindow;
}

// Test Case 1
let target = 7, nums = [2, 3, 1, 2, 4, 3];
console.log("Test Case 1:", minSubArrayLen(target, nums)); // Expected Output: 2

// Test Case 2
target = 4, nums = [1, 4, 4];
console.log("Test Case 2:", minSubArrayLen(target, nums)); // Expected Output: 1

// Test Case 3
target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log("Test Case 3:", minSubArrayLen(target, nums)); // Expected Output: 0

// Test Case 4: Subarray with single element equals target
target = 5, nums = [1, 2, 3, 5];
console.log("Test Case 4:", minSubArrayLen(target, nums)); // Expected Output: 1

// Test Case 5: The entire array sums up to the target
target = 15, nums = [1, 2, 3, 4, 5];
console.log("Test Case 5:", minSubArrayLen(target, nums)); // Expected Output: 5

// Test Case 6: All elements together equal target
target = 10, nums = [5, 5];
console.log("Test Case 6:", minSubArrayLen(target, nums)); // Expected Output: 2

// Test Case 7: Target larger than any subarray sum
target = 100, nums = [1, 2, 3, 4, 5, 6];
console.log("Test Case 7:", minSubArrayLen(target, nums)); // Expected Output: 0

// Test Case 8: Multiple valid subarrays, minimal length required
target = 9, nums = [1, 2, 3, 2, 4, 1, 3];
console.log("Test Case 8:", minSubArrayLen(target, nums)); // Expected Output: 3

// Test Case 9: Subarray at the end meets the target
target = 7, nums = [1, 1, 1, 1, 7];
console.log("Test Case 9:", minSubArrayLen(target, nums)); // Expected Output: 1

// Test Case 10: Large array with scattered large values
target = 20, nums = [1, 2, 3, 4, 5, 15, 1, 2];
console.log("Test Case 10:", minSubArrayLen(target, nums)); // Expected Output: 2

