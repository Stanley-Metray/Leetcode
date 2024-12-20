console.clear();

function isValidSudoku(board) {
    return (validateRow(board) && validateColumn(board) && validateBox(board));
}


function validateRow(board) {
    for (let i = 0; i < board.length; i++) {
        const set = new Set();

        for (let j = 0; j < board[0].length; j++) {
            let cell = board[i][j];

            if (cell === '.') continue;

            if (set.has(cell))
                return false;

            set.add(cell);
        }
    }
    return true;
}

function validateColumn(board) {
    for (let i = 0; i < board[0].length; i++) {
        const set = new Set();

        for (let j = 0; j < board.length; j++) {
            let cell = board[i][j];

            if (cell === '.') continue;

            if (set.has(cell))
                return false;

            set.add(cell);
        }
    }

    return true;
}

function validateBox(board) {
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const set = new Set();

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let cell = board[boxRow * 3 + i][boxCol * 3 + j];

                    if (cell === '.') continue;

                    if (set.has(cell))
                        return false;

                    set.add(cell);
                }
            }
        }
    }
    return true;
}


// Test cases

// Test case 1: Valid Sudoku board
console.log("Test Case 1:", isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
// Expected output: true

// Test case 2: Invalid Sudoku board with repetition in sub-box
console.log("Test Case 2:", isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
// Expected output: false

// Test case 3: Empty Sudoku board (valid by default)
console.log("Test Case 3:", isValidSudoku([
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));
// Expected output: true

// Test case 4: Valid board with minimum filled cells
console.log("Test Case 4:", isValidSudoku([
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));
// Expected output: true

// Test case 5: Invalid board with repetition in row
console.log("Test Case 5:", isValidSudoku([
    ["5", "5", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));
// Expected output: false

// Test case 6: Invalid board with repetition in column
console.log("Test Case 6:", isValidSudoku([
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));
// Expected output: false

// Test case 7: Invalid board with repetition in 3x3 sub-box
console.log("Test Case 7:", isValidSudoku([
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "5", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));
// Expected output: false
