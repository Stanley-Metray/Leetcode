console.clear();

// Function signature
var searchMatrix = function (matrix, target) {
    let row = serachRow(matrix, target);

    if(row===-1)
        return false;

    return searchTarget(matrix[row], target);
};

function searchTarget(nums, target)
{
    let left = 0, right = nums.length-1;

    while(left<=right)
    {
        let mid = Math.floor((left+right)/2);

        if(target===nums[mid])
            return true;

        if(target>nums[mid])
            left = mid+1;
        else
            right = mid-1;
    }
    return false;
}

function serachRow(matrix, target)
{
    let left = 0, right = matrix.length-1;

    while(left<=right)
    {
        let mid = Math.floor((left+right)/2);

        if(target>=matrix[mid][0] && target<=matrix[mid][matrix[0].length-1])
            return mid;

        if(target>matrix[mid][0])
            left = mid+1;
        else
            right = mid-1;
    }

    return -1;
}



// Test cases

// Test case 1: Target is in the first row
console.log("Test Case 1:", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
// Expected output: true
// Explanation: The target 3 is in the first row, at index [0, 1].

// Test case 2: Target is in the last row
console.log("Test Case 2:", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 34));
// Expected output: true
// Explanation: The target 34 is in the last row, at index [2, 2].

// Test case 3: Target does not exist
console.log("Test Case 3:", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
// Expected output: false
// Explanation: The target 13 is not present in the matrix.

// Test case 4: Matrix has only one row
console.log("Test Case 4:", searchMatrix([[1, 2, 3, 4, 5]], 4));
// Expected output: true
// Explanation: The matrix has only one row and the target 4 is present in it.

// Test case 5: Matrix has only one column
console.log("Test Case 5:", searchMatrix([[1], [2], [3], [4], [5]], 2));
// Expected output: true
// Explanation: The matrix has only one column and the target 2 is present in it.

// Test case 6: Target is the smallest number in the matrix
console.log("Test Case 6:", searchMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 1));
// Expected output: true
// Explanation: The target 1 is the smallest number and is located at index [0, 0].

// Test case 7: Target is the largest number in the matrix
console.log("Test Case 7:", searchMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 17));
// Expected output: true
// Explanation: The target 17 is the largest number and is located at index [2, 2].

// Test case 8: Matrix has only one element, target is present
console.log("Test Case 8:", searchMatrix([[5]], 5));
// Expected output: true
// Explanation: The matrix has only one element, and it matches the target.

// Test case 9: Matrix has only one element, target is not present
console.log("Test Case 9:", searchMatrix([[5]], 3));
// Expected output: false
// Explanation: The matrix has only one element, but the target 3 is not present.

// Test case 10: Matrix has multiple rows and columns, target is not present
console.log("Test Case 10:", searchMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 10));
// Expected output: false
// Explanation: The target 10 is not present in the matrix.