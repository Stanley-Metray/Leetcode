function productExceptSelf(nums) {
    let prefix = [];
    let suffix = [];
    let products = new Array(nums.length);
    let n = nums.length;

    prefix[0] = nums[0];

    for (let i = 1; i < n; i++)
        prefix.push(prefix[i - 1] * nums[i]);

    suffix[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = (nums[i] * suffix[i + 1]);
    }

    products[0] = suffix[1];
    products[n - 1] = prefix[n - 2];

    for (let i = 1; i < n - 1; i++)
        products[i] = (prefix[i - 1]) * (suffix[i + 1]);

    return products;
}

// Test Case 1
let nums1 = [1, 2, 3, 4];

prefix = [24, 12, 8, 6];
suffix = [4, 12, 24, 24]
let result1 = productExceptSelf(nums1);
console.log(`Test Case 1: ${result1}`);  // Expected Output: [24, 12, 8, 6]

// Test Case 2
let nums2 = [-1, 1, 0, -3, 3];
let result2 = productExceptSelf(nums2);
console.log(`Test Case 2: ${result2}`);  // Expected Output: [0, 0, 9, 0, 0]

// Test Case 3
let nums3 = [2, 3, 4, 5];
let result3 = productExceptSelf(nums3);
console.log(`Test Case 3: ${result3}`);  // Expected Output: [60, 40, 30, 24]

// Test Case 4
let nums4 = [5, 6, 7, 8];
let result4 = productExceptSelf(nums4);
console.log(`Test Case 4: ${result4}`);  // Expected Output: [336, 280, 240, 210]

// Test Case 5
let nums5 = [1, 1, 1, 1];
let result5 = productExceptSelf(nums5);
console.log(`Test Case 5: ${result5}`);  // Expected Output: [1, 1, 1, 1]

// Test Case 6
let nums6 = [10, 3, 5, 6, 2];
let result6 = productExceptSelf(nums6);
console.log(`Test Case 6: ${result6}`);  // Expected Output: [180, 600, 360, 300, 900]

// Test Case 7
let nums7 = [1, 0];
let result7 = productExceptSelf(nums7);
console.log(`Test Case 7: ${result7}`);  // Expected Output: [0, 1]

// Test Case 8
let nums8 = [0, 0];
let result8 = productExceptSelf(nums8);
console.log(`Test Case 8: ${result8}`);  // Expected Output: [0, 0]
