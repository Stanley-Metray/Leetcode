
console.clear();

function containsNearbyDuplicate(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if ((i - map.get(nums[i])) <= k)
                return true;
            map.set(nums[i], i);
        }
        else
            map.set(nums[i], i);
    }
    return false;
}

// Test cases

console.log('Test case 1', containsNearbyDuplicate([1, 2, 3, 1], 3));
// Expected output: true

console.log('Test case 2', containsNearbyDuplicate([1, 0, 1, 1], 1));
// Expected output: true

console.log('Test case 3', containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// Expected output: false

console.log('Test case 4', containsNearbyDuplicate([4, 5, 6, 4], 3));
// Expected output: true

console.log('Test case 5', containsNearbyDuplicate([99, 99], 2));
// Expected output: true

console.log('Test case 6', containsNearbyDuplicate([1, 2, 3, 4, 5], 3));
// Expected output: false

console.log('Test case 7', containsNearbyDuplicate([1, 2, 1], 1));
// Expected output: false

console.log('Test case 8', containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 9));
// Expected output: true

console.log('Test case 9', containsNearbyDuplicate([2, 2], 3));
// Expected output: true

console.log('Test case 10', containsNearbyDuplicate([1], 1));
// Expected output: false
