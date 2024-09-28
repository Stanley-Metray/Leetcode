console.clear();

function longestCommonSubstring(str1, str2) {
    let m = str1.length + 1;
    let n = str2.length + 1;
    let max = 0;
    let matrix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                let prev = matrix[i - 1][j - 1] + 1;
                matrix[i][j] = prev;
                max = Math.max(max, prev);
            }
        }
    return max;
}

// Test Case 1
let str1 = "ABCDGH", str2 = "ACDGHR";
console.log('Test Case 1:', longestCommonSubstring(str1, str2)); // Expected Output: 4

// Test Case 2
str1 = "ABC"; str2 = "ACB";
console.log('Test Case 2:', longestCommonSubstring(str1, str2)); // Expected Output: 1

// Test Case 3
str1 = "XYZ"; str2 = "XYZ";
console.log('Test Case 3:', longestCommonSubstring(str1, str2)); // Expected Output: 3 (substring: "XYZ")

// Test Case 4
str1 = "abcdef"; str2 = "ghijkl";
console.log('Test Case 4:', longestCommonSubstring(str1, str2)); // Expected Output: 0 (no common substring)

// Test Case 5
str1 = "12345"; str2 = "234";
console.log('Test Case 5:', longestCommonSubstring(str1, str2)); // Expected Output: 3 (substring: "234")

// Test Case 6
str1 = "abcdefg"; str2 = "abefg";
console.log('Test Case 6:', longestCommonSubstring(str1, str2)); // Expected Output: 3 (substring: "efg")

// Test Case 7
str1 = "abcdefgh"; str2 = "abxycd";
console.log('Test Case 7:', longestCommonSubstring(str1, str2)); // Expected Output: 2 (substring: "ab" or "cd")

// Test Case 8
str1 = "pqrstuvwxyz"; str2 = "qrst";
console.log('Test Case 8:', longestCommonSubstring(str1, str2)); // Expected Output: 4 (substring: "qrst")

// Test Case 9
str1 = "hello"; str2 = "world";
console.log('Test Case 9:', longestCommonSubstring(str1, str2)); // Expected Output: 1 (substring: "o")

// Test Case 10
str1 = "apple"; str2 = "pineapple";
console.log('Test Case 10:', longestCommonSubstring(str1, str2)); // Expected Output: 5 (substring: "apple")

