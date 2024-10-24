console.clear();
// PAGE 6

console.clear();

var findMin = function (nums) {
    let left = 0;
    let right = nums.length-1;

    while(left<right)
    {
        let mid = Math.floor((right+left)/2);

        if(nums[mid]>nums[right])
            left = mid+1;
        else
            right = mid;
    }

    return nums[left];
};

// Test cases

// Test case 1: Basic case with a rotated array
console.log("Test Case 1:", findMin([3, 4, 5, 1, 2]));
// Expected output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times, so the minimum is 1.

// Test case 2: Array rotated multiple times
console.log("Test Case 2:", findMin([4, 5, 6, 7, 0, 1, 2]));
// Expected output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] rotated 4 times, so the minimum is 0.

// Test case 3: Array not rotated
console.log("Test Case 3:", findMin([11, 13, 15, 17]));
// Expected output: 11
// Explanation: The array is already in ascending order, so the minimum is the first element, 11.

// Test case 4: Array with only two elements
console.log("Test Case 4:", findMin([2, 1]));
// Expected output: 1
// Explanation: The original array was [1, 2] rotated once, so the minimum is 1.

// Test case 5: Single element array
console.log("Test Case 5:", findMin([1]));
// Expected output: 1
// Explanation: There's only one element, so the minimum is 1.

// Test case 6: Array with multiple rotations, larger range
console.log("Test Case 6:", findMin([9, 10, 12, 14, 16, 18, 4, 6, 8]));
// Expected output: 4
// Explanation: The minimum is 4 after rotating the original array.

// Test case 7: Array rotated once
console.log("Test Case 7:", findMin([2, 3, 4, 5, 6, 1]));
// Expected output: 1
// Explanation: The original array was [1,2,3,4,5,6] rotated once, so the minimum is 1.

// Test case 8: Array rotated at the midpoint
console.log("Test Case 8:", findMin([5, 6, 7, 8, 1, 2, 3, 4]));
// Expected output: 1
// Explanation: The minimum is 1 after midpoint rotation.

// Test case 9: Large array with rotation
console.log("Test Case 9:", findMin([15, 18, 19, 1, 3, 6, 9, 12]));
// Expected output: 1
// Explanation: The minimum element is 1 after the rotation.

// Test case 10: Edge case with small elements
console.log("Test Case 10:", findMin([2, 2, 2, 0, 1]));
// Expected output: 0
// Explanation: The minimum is 0 in this rotated array.
