console.clear();

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = (Math.min(height[left], height[right])) * (right - left);

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxArea;
}

// Test cases

// Test case 1
console.log("Test Case 1:", maxArea([1,8,6,2,5,4,8,3,7]));
// Expected output: 49

// Test case 2
console.log("Test Case 2:", maxArea([1,1]));
// Expected output: 1

// Test case 3: Decreasing heights
console.log("Test Case 3:", maxArea([9,6,5,4,3,2,1]));
// Expected output: 12

// Test case 4: Increasing heights
console.log("Test Case 4:", maxArea([1,2,3,4,5,6,7,8,9]));
// Expected output: 20

// Test case 5: All heights the same
console.log("Test Case 5:", maxArea([5,5,5,5,5,5,5,5]));
// Expected output: 35

// Test case 6: Single element
console.log("Test Case 6:", maxArea([10]));
// Expected output: 0

// Test case 7: Two lines with large heights
console.log("Test Case 7:", maxArea([100,1,100]));
// Expected output: 200

// Test case 8: Zeros in the array
console.log("Test Case 8:", maxArea([0,0,0,0,0,0,1]));
// Expected output: 0

// Test case 9: Heights with a peak in the middle
console.log("Test Case 9:", maxArea([1,2,4,8,16,8,4,2,1]));
// Expected output: 16

// Test case 10: Random heights
console.log("Test Case 10:", maxArea([3,1,2,4,5,6,3,7,8,9,2,5,4,8]));
// Expected output: 48