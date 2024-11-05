console.clear();

function rotate(matrix) {
   for(let i=0; i<matrix.length; i++)
   {
    for(let j=i; j<matrix[0].length; j++)
    {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
   }

   for(let i=0; i<matrix.length; i++)
    matrix[i].reverse();

}

// Test Case 1: Standard 3x3 matrix
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);
console.log("Test Case 1:", matrix); // Expected Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// Test Case 2: 4x4 matrix with varying values
matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix);
console.log("Test Case 2:", matrix); // Expected Output: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]

// Test Case 3: Single element matrix
matrix = [[1]];
rotate(matrix);
console.log("Test Case 3:", matrix); // Expected Output: [[1]]

// Test Case 4: 2x2 matrix
matrix = [[1, 2], [3, 4]];
rotate(matrix);
console.log("Test Case 4:", matrix); // Expected Output: [[3, 1], [4, 2]]

// Test Case 5: 3x3 matrix with negative numbers
matrix = [[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]];
rotate(matrix);
console.log("Test Case 5:", matrix); // Expected Output: [[-7, -4, -1], [-8, -5, -2], [-9, -6, -3]]

// Test Case 6: 4x4 matrix with zeros
matrix = [[0, 0, 0, 0], [0, 1, 2, 0], [0, 3, 4, 0], [0, 0, 0, 0]];
rotate(matrix);
console.log("Test Case 6:", matrix); // Expected Output: [[0, 0, 0, 0], [0, 3, 1, 0], [0, 4, 2, 0], [0, 0, 0, 0]]

// Test Case 7: 5x5 matrix with increasing numbers
matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
rotate(matrix);
console.log("Test Case 7:", matrix); // Expected Output: [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]]

// Test Case 8: 3x3 matrix with a mix of positive and negative numbers
matrix = [[1, -2, 3], [4, -5, 6], [-7, 8, 9]];
rotate(matrix);
console.log("Test Case 8:", matrix); // Expected Output: [[-7, 4, 1], [8, -5, -2], [9, 6, 3]]

// Test Case 9: 2x2 matrix with identical values
matrix = [[7, 7], [7, 7]];
rotate(matrix);
console.log("Test Case 9:", matrix); // Expected Output: [[7, 7], [7, 7]]

// Test Case 10: 4x4 matrix with random values
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
rotate(matrix);
console.log("Test Case 10:", matrix); // Expected Output: [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]
