console.clear();

function spiralOrder(matrix) {
    if (matrix.length === 0) return [];
    let rowStart = 0, rowEnd = matrix.length - 1;
    let colStart = 0, colEnd = matrix[0].length - 1;
    let result = new Array();

    while (rowStart <= rowEnd && colStart <= colEnd) {

        // Moving right
        for (let i = colStart; i <= colEnd; i++)
            result.push(matrix[rowStart][i]);
        rowStart++;

        // Moving down

        for (let i = rowStart; i <= rowEnd; i++)
            result.push(matrix[i][colEnd]);
        colEnd--;

        // Moving left

        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--)
                result.push(matrix[rowEnd][i]);
            rowEnd--;
        }

        // Moving up

        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--)
                result.push(matrix[i][colStart]);
            colStart++;
        }
    }
    return result;
}

// Test cases 1, 2, 3
// 4, 5, 6
// 7, 8, 9

// Test case 1: Basic 3x3 matrix
console.log("Test Case 1:", spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Expected output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Test case 2: Rectangular matrix
console.log("Test Case 2:", spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// Expected output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// Test case 3: Single row matrix
console.log("Test Case 3:", spiralOrder([[1, 2, 3, 4]]));
// Expected output: [1, 2, 3, 4]

// Test case 4: Single column matrix
console.log("Test Case 4:", spiralOrder([[1], [2], [3], [4]]));
// Expected output: [1, 2, 3, 4]

// Test case 5: 2x2 matrix
console.log("Test Case 5:", spiralOrder([[1, 2], [3, 4]]));
// Expected output: [1, 2, 4, 3]

// Test case 6: Empty matrix
console.log("Test Case 6:", spiralOrder([]));
// Expected output: []

// Test case 7: 1x1 matrix
console.log("Test Case 7:", spiralOrder([[42]]));
// Expected output: [42]

// Test case 8: Matrix with negative numbers
console.log("Test Case 8:", spiralOrder([[1, -2, 3], [4, 5, 6], [7, 8, -9]]));
// Expected output: [1, -2, 3, 6, -9, 8, 7, 4, 5]

// Test case 9: Larger matrix
console.log("Test Case 9:", spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]));
// Expected output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

// Test case 10: Matrix with varying row lengths
console.log("Test Case 10:", spiralOrder([[1, 2, 3], [4, 5], [6]]));
// Expected output: [1, 2, 3, 5, 6, 4]
