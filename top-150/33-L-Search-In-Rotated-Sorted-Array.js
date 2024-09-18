console.clear();

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target)
            return mid;

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid])
                right = mid - 1;
            else
                left = mid + 1;
        }
        else {
            if (target > nums[mid] && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return -1;
};

// Test cases

// Test case 1: Basic case with target in the rotated array
console.log("Test Case 1:", search([4, 5, 6, 7, 0, 1, 2], 0));
// Expected output: 4
// Explanation: The target 0 is at index 4 in the rotated array.

// Test case 2: Target not in the rotated array
console.log("Test Case 2:", search([4, 5, 6, 7, 0, 1, 2], 3));
// Expected output: -1
// Explanation: The target 3 is not in the array, so the result is -1.

// Test case 3: Single element array, target not present
console.log("Test Case 3:", search([1], 0));
// Expected output: -1
// Explanation: The target 0 is not present in the single element array.

// Test case 4: Single element array, target present
console.log("Test Case 4:", search([1], 1));
// Expected output: 0
// Explanation: The target 1 is present at index 0.

// Test case 5: Array rotated, target at the beginning
console.log("Test Case 5:", search([6, 7, 0, 1, 2, 3, 4, 5], 6));
// Expected output: 0
// Explanation: The target 6 is at index 0 after rotation.

// Test case 6: Array rotated, target at the end
console.log("Test Case 6:", search([6, 7, 0, 1, 2, 3, 4, 5], 5));
// Expected output: 7
// Explanation: The target 5 is at index 7 after rotation.

// Test case 7: Array not rotated, target present
console.log("Test Case 7:", search([1, 2, 3, 4, 5, 6, 7], 5));
// Expected output: 4
// Explanation: The target 5 is at index 4 in the sorted array.

// Test case 8: Array not rotated, target not present
console.log("Test Case 8:", search([1, 2, 3, 4, 5, 6, 7], 8));
// Expected output: -1
// Explanation: The target 8 is not in the sorted array, so the result is -1.



