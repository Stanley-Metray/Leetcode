console.clear();
function singleNumber(nums) {
    let single = nums[0];

    for (let i = 1; i < nums.length; i++)
        single = single ^ nums[i];

    return single;
}

// Test Case 1: Standard case with three elements
let nums = [2, 2, 1];
console.log("Test Case 1:", singleNumber(nums)); // Expected Output: 1

// Test Case 2: Multiple pairs and one single element
nums = [4, 1, 2, 1, 2];
console.log("Test Case 2:", singleNumber(nums)); // Expected Output: 4

// Test Case 3: Array with only one element
nums = [1];
console.log("Test Case 3:", singleNumber(nums)); // Expected Output: 1

// Test Case 4: Negative numbers and a single positive number
nums = [-1, -1, -2];
console.log("Test Case 4:", singleNumber(nums)); // Expected Output: -2

// Test Case 5: Larger array with several pairs and one unique element
nums = [7, 3, 5, 5, 3, 9, 9];
console.log("Test Case 5:", singleNumber(nums)); // Expected Output: 7

// Test Case 6: Array with both positive and negative numbers
nums = [-3, 4, -3, 5, 4];
console.log("Test Case 6:", singleNumber(nums)); // Expected Output: 5

// Test Case 7: Single zero in the array
nums = [0];
console.log("Test Case 7:", singleNumber(nums)); // Expected Output: 0

// Test Case 8: Array with a mix of large and small numbers
nums = [100000, 1, 100000, 1, 999];
console.log("Test Case 8:", singleNumber(nums)); // Expected Output: 999

// Test Case 9: Array with all elements as the same, except one
nums = [10, 10, 10, 10, 11];
console.log("Test Case 9:", singleNumber(nums)); // Expected Output: 11

// Test Case 10: Array with maximum and minimum integer values
nums = [2147483647, -2147483648, 2147483647];
console.log("Test Case 10:", singleNumber(nums)); // Expected Output: -2147483648
