console.clear();

function twoSum(numbers, target) {

    const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let difference = target - numbers[i];

        if (map.has(difference))
            return [map.get(difference) + 1, i + 1];

        if (!map.has(numbers[i]))
            map.set(numbers[i], i);
    }
}

// Test cases

// Test case 1
console.log("Test Case 1:", twoSum([2, 7, 11, 15], 9));
// Expected output: [1, 2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Test case 2
console.log("Test Case 2:", twoSum([2, 3, 4], 6));
// Expected output: [1, 3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3.

// Test case 3
console.log("Test Case 3:", twoSum([-1, 0], -1));
// Expected output: [1, 2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2.

// Test case 4: Large numbers
console.log("Test Case 4:", twoSum([1, 100, 200, 300], 300));
// Expected output: [2, 3]
// Explanation: The sum of 100 and 200 is 300, so indices are 2 and 3.

// Test case 5: Target is the sum of third and fourth elements
console.log("Test Case 5:", twoSum([1, 2, 3, 4, 5, 6], 7));
// Expected output: [3, 4]
// Explanation: The sum of 3 and 4 is 7. Therefore, index1 = 3, index2 = 4.

// Test case 6: All negative numbers
console.log("Test Case 6:", twoSum([-5, -3, -1], -4));
// Expected output: [2, 3]
// Explanation: The sum of -3 and -1 is -4. Therefore index1 = 2, index2 = 3.

// Test case 7: Two elements
console.log("Test Case 7:", twoSum([1, 2], 3));
// Expected output: [1, 2]
// Explanation: The sum of 1 and 2 is 3. Therefore index1 = 1, index2 = 2.

// Test case 8: Large input array
console.log("Test Case 8:", twoSum([1, 5, 9, 12, 17, 23, 28, 30], 40));
// Expected output: [5, 6]
// Explanation: The sum of 17 and 23 is 40. Therefore, index1 = 5, index2 = 6.

// Test case 9: Target formed by middle elements
console.log("Test Case 9:", twoSum([1, 2, 3, 4, 6], 7));
// Expected output: [3, 4]
// Explanation: The sum of 3 and 4 is 7. Therefore, index1 = 3, index2 = 4.

// Test case 10: Array with duplicates
console.log("Test Case 10:", twoSum([1, 2, 2, 4], 6));
// Expected output: [2, 4]
// Explanation: The sum of 2 and 4 is 6. Therefore, index1 = 2, index2 = 4.

