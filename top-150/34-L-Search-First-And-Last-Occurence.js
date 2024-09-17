console.clear();

var searchRange = function (nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)];
};

function searchLeft(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            index = mid;
            right = mid - 1;
        }
        else if (target > nums[mid])
            left = mid + 1;
        else
            right = mid - 1;
    }
    return index;
}

function searchRight(nums, target) {
    let index = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            index = mid;
            left = mid + 1;
        }
        else if (target > nums[mid])
            left = mid + 1;
        else
            right = mid - 1;
    }

    return index;
}

// Test cases

// Test case 1: Target occurs multiple times in the middle
console.log("Test Case 1:", searchRange([5, 7, 7, 8, 8, 10], 8));
// Expected output: [3, 4]
// Explanation: The target 8 appears at indices 3 and 4.

// Test case 2: Target does not exist in the array
console.log("Test Case 2:", searchRange([5, 7, 7, 8, 8, 10], 6));
// Expected output: [-1, -1]
// Explanation: The target 6 does not appear in the array.

// Test case 3: Empty array
console.log("Test Case 3:", searchRange([], 0));
// Expected output: [-1, -1]
// Explanation: The array is empty, so the target cannot be found.

// Test case 4: Array has only one element, target is present
console.log("Test Case 4:", searchRange([1], 1));
// Expected output: [0, 0]
// Explanation: The target 1 is present at index 0 in the array.

// Test case 5: Array has only one element, target is not present
console.log("Test Case 5:", searchRange([1], 2));
// Expected output: [-1, -1]
// Explanation: The target 2 is not present in the array.

// Test case 6: Target is the first element in the array
console.log("Test Case 6:", searchRange([1, 2, 3, 4, 5], 1));
// Expected output: [0, 0]
// Explanation: The target 1 is the first element in the array.

// Test case 7: Target is the last element in the array
console.log("Test Case 7:", searchRange([1, 2, 3, 4, 5], 5));
// Expected output: [4, 4]
// Explanation: The target 5 is the last element in the array.

// Test case 8: Target occurs multiple times at the beginning
console.log("Test Case 8:", searchRange([2, 2, 2, 3, 4], 2));
// Expected output: [0, 2]
// Explanation: The target 2 appears at indices 0 to 2.

// Test case 9: Target occurs multiple times at the end
console.log("Test Case 9:", searchRange([1, 3, 4, 5, 5, 5], 5));
// Expected output: [3, 5]
// Explanation: The target 5 appears at indices 3 to 5.

// Test case 10: Array has duplicate elements but target is missing
console.log("Test Case 10:", searchRange([1, 2, 3, 4, 5, 6, 6], 7));
// Expected output: [-1, -1]
// Explanation: The target 7 does not appear in the array.
