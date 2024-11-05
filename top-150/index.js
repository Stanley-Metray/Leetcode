console.clear();

function setZeroes(matrix) {
    let firstRow = false;
    let firstCol = false;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) firstRow = true;
                if (j === 0) firstCol = true;

                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0)
                matrix[i][j] = 0;
        }
    }

    if (firstRow) {
        for (let i = 0; i < matrix[0].length; i++)
            matrix[0][i] = 0;
    }

    if (firstCol) {
        for (let i = 0; i < matrix.length; i++)
            matrix[i][0] = 0
    }

    return matrix;
}

// Test cases

// Test case 1: Basic example with a zero in the middle
console.log("Test Case 1:", setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
// Expected output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// Test case 2: Matrix with zeros in multiple rows and columns
console.log("Test Case 2:", setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
// Expected output: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]

// Test case 3: No zeros in the matrix
console.log("Test Case 3:", setZeroes([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Expected output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Test case 4: All elements are zero
console.log("Test Case 4:", setZeroes([[0, 0], [0, 0]]));
// Expected output: [[0, 0], [0, 0]]

// Test case 5: Single row with a zero
console.log("Test Case 5:", setZeroes([[1, 0, 3]]));
// Expected output: [[0, 0, 0]]

// Test case 6: Single column with a zero
console.log("Test Case 6:", setZeroes([[1], [0], [3]]));
// Expected output: [[0], [0], [0]]

// Test case 7: Larger matrix with scattered zeros
console.log("Test Case 7:", setZeroes([[1, 2, 0], [4, 5, 6], [7, 0, 9]]));
// Expected output: [[0, 0, 0], [4, 0, 0], [0, 0, 0]]

// Test case 8: Matrix with negative numbers and zeros
console.log("Test Case 8:", setZeroes([[0, -1, 2], [3, 4, 5], [-1, -2, 0]]));
// Expected output: [[0, 0, 0], [0, 4, 0], [0, 0, 0]]

// Test case 9: Matrix with only one element as zero
console.log("Test Case 9:", setZeroes([[1, 2], [3, 0]]));
// Expected output: [[1, 0], [0, 0]]

// Test case 10: Empty matrix
console.log("Test Case 10:", setZeroes([]));
// Expected output: []
