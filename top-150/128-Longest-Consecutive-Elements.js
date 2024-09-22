console.clear();

function longestConsecutive(nums) {
    const map = new Map();
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i]))
            map.set(nums[i], false);
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let count = 0;
        // search in increasing order

        while (map.has(num) && map.get(num) === false) {
            map.set(num, true);
            num++; count++;
        }

        // search in decreasing order
        num = nums[i] - 1;

        while (map.has(num) && map.get(num) === false) {
            map.set(num, true);
            num--; count++;
        }
        max = Math.max(count, max);
    }
    return max;
}

// Test cases

console.log('Test case 1', longestConsecutive([100, 4, 200, 1, 3, 2]));
// Expected output: 4

console.log('Test case 2', longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Expected output: 9

console.log('Test case 3', longestConsecutive([1, 2, 0, 1]));
// Expected output: 3

console.log('Test case 4', longestConsecutive([9, 1, 4, 7, 3, -2, -1, 5, 2, 6]));
// Expected output: 7

console.log('Test case 5', longestConsecutive([]));
// Expected output: 0

console.log('Test case 6', longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Expected output: 9

console.log('Test case 7', longestConsecutive([10, 5, 12, 11, 7, 6, 8]));
// Expected output: 4

console.log('Test case 8', longestConsecutive([0]));
// Expected output: 1

console.log('Test case 9', longestConsecutive([-1, 0, 1, 2]));
// Expected output: 4

console.log('Test case 10', longestConsecutive([5, 6, 7, 8, 2, 4, 3, 1]));
// Expected output: 8
