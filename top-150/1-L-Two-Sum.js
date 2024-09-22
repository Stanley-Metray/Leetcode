console.clear();

function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (map.has(difference))
            return [map.get(difference), i];

        map.set(nums[i], i);
    }
    return undefined;
}

// Test cases

console.log('Test case 1', twoSum([2, 7, 11, 15], 9));
// Expected output: [0, 1]

console.log('Test case 2', twoSum([3, 2, 4], 6));
// Expected output: [1, 2]

console.log('Test case 3', twoSum([3, 3], 6));
// Expected output: [0, 1]

console.log('Test case 4', twoSum([-1, -2, -3, -4, -5], -8));
// Expected output: [2, 4]

console.log('Test case 5', twoSum([0, 4, 3, 0], 0));
// Expected output: [0, 3]

console.log('Test case 6', twoSum([1000000, 500, 2000000, 300], 2000300));
// Expected output: [2, 3]

console.log('Test case 7', twoSum([1, 2, 3], 7));
// Expected output: undefined or error (depending on implementation)

console.log('Test case 8', twoSum([5, 5], 10));
// Expected output: [0, 1]

console.log('Test case 9', twoSum([1], 2));
// Expected output: undefined or error (depending on implementation)