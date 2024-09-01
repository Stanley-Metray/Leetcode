console.clear();

function longestConsecutive(nums) {
    const map = new Map();
    let longestConsecutive = 0;
    for (let i = 0; i < nums.length; i++)
        map.set(nums[i], false);

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let count = 0;

        while (map.has(num) && map.get(num) === false) {
            map.set(num, true);
            num++;
            count++;
        }

        num = nums[i] - 1;

        while (map.has(num) && map.get(num) === false) {
            map.set(num, true);
            num--;
            count++;
        }

        if (count > longestConsecutive)
            longestConsecutive = count;
    }

    return longestConsecutive;
}

// Test cases

// Test case 1
console.log("Test Case 1:", longestConsecutive([100, 4, 200, 1, 3, 2]));
// Expected output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Test case 2
console.log("Test Case 2:", longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Expected output: 9
// Explanation: The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.

// Additional test cases

// Test case 3: Empty array
console.log("Test Case 3:", longestConsecutive([]));
// Expected output: 0
// Explanation: No elements in the array, so the longest sequence length is 0.

// Test case 4: Single element
console.log("Test Case 4:", longestConsecutive([1]));
// Expected output: 1
// Explanation: Only one element, so the longest sequence length is 1.

// Test case 5: No consecutive sequence
console.log("Test Case 5:", longestConsecutive([1, 100, 200, 300]));
// Expected output: 1
// Explanation: There are no consecutive elements, so the longest sequence length is 1.

// Test case 6: All elements are consecutive
console.log("Test Case 6:", longestConsecutive([1, 2, 3, 4, 5, 6]));
// Expected output: 6
// Explanation: The array is already a consecutive sequence, so its length is 6.

// Test case 7: Mixed elements with consecutive sequence
console.log("Test Case 7:", longestConsecutive([10, 100, 5, 4, 1, 2, 3]));
// Expected output: 5
// Explanation: The longest consecutive sequence is [1, 2, 3, 4, 5]. Therefore its length is 5.

// Test case 8: Elements with large range and gaps
console.log("Test Case 8:", longestConsecutive([100, 200, 300, 400, 500, 1000, 999, 998]));
// Expected output: 3
// Explanation: The longest consecutive sequence is [998, 999, 1000]. Therefore its length is 3.

// Test case 9: Large input with consecutive sequence
console.log("Test Case 9:", longestConsecutive(Array.from({ length: 100000 }, (_, i) => i)));
// Expected output: 100000
// Explanation: The array consists of consecutive numbers from 0 to 99999, so the length of the longest sequence is 100000.