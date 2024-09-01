console.clear();

function containsNearbyDuplicate(nums, k) {
    let map = new Map();

    for(let i=0; i<nums.length; i++)
    {
        if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i)<=k)
            return true;
        else
            map.set(nums[i], i);
    }

    return false;
}

// Test cases

// Test case 1
console.log("Test Case 1:", containsNearbyDuplicate([1, 2, 3, 1], 3)); 
// Expected output: true
// Explanation: nums[0] == nums[3], and abs(0 - 3) = 3, which is <= 3

// Test case 2
console.log("Test Case 2:", containsNearbyDuplicate([1, 0, 1, 1], 1)); 
// Expected output: true
// Explanation: nums[2] == nums[3], and abs(2 - 3) = 1, which is <= 1

// Test case 3
console.log("Test Case 3:", containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); 
// Expected output: false
// Explanation: Although nums[3] == nums[0], abs(3 - 0) = 3, which is > 2

// Additional test cases

// Test case 4: Single element
console.log("Test Case 4:", containsNearbyDuplicate([1], 1)); 
// Expected output: false
// Explanation: Only one element, so no duplicate possible

// Test case 5: Empty array
console.log("Test Case 5:", containsNearbyDuplicate([], 0)); 
// Expected output: false
// Explanation: No elements in the array, so no duplicates possible

// Test case 6: Larger array with duplicates within range
console.log("Test Case 6:", containsNearbyDuplicate([1, 2, 3, 4, 1], 4)); 
// Expected output: true
// Explanation: nums[0] == nums[4], and abs(0 - 4) = 4, which is <= 4

// Test case 7: Larger array with no duplicates within range
console.log("Test Case 7:", containsNearbyDuplicate([1, 2, 3, 4, 5], 3)); 
// Expected output: false
// Explanation: No duplicates within the range of 3

// Test case 8: All elements are the same and within range
console.log("Test Case 8:", containsNearbyDuplicate([5, 5, 5, 5], 2)); 
// Expected output: true
// Explanation: nums[0] == nums[1], nums[0] == nums[2], nums[0] == nums[3], all within range 2

// Test case 9: All elements are unique
console.log("Test Case 9:", containsNearbyDuplicate([1, 2, 3, 4, 5], 1)); 
// Expected output: false
// Explanation: No duplicates in the array

// Test case 10: Large array with duplicates exactly at distance k
console.log("Test Case 10:", containsNearbyDuplicate([1, 2, 3, 4, 1], 4)); 
// Expected output: true
// Explanation: nums[0] == nums[4], and abs(0 - 4) = 4, which is exactly 4

