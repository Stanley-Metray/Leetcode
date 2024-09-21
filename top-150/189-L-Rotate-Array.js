
console.clear();

function rotate(nums, k) {
    k = Math.floor(k % nums.length);

    if (k === 0)
        return nums;

    for (let i = 0; i < Math.floor((nums.length - k) / 2); i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - k - i - 1];
        nums[nums.length - k - i - 1] = temp;
    }

    nums.reverse();

    for (let i = 0; i < Math.floor(k / 2); i++) {
        let temp = nums[i];
        nums[i] = nums[k - i - 1];
        nums[k - i - 1] = temp;
    }

    return nums;
}




// Test Case 1
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
console.log(rotate(nums1, k1));
// Expected Output: [5, 6, 7, 1, 2, 3, 4]

// Test Case 2
let nums2 = [-1, -100, 3, 99];
let k2 = 2;
console.log(rotate(nums2, k2));
// Expected Output: [3, 99, -1, -100]

// Test Case 3
let nums3 = [1, 2, 3];
let k3 = 1;
console.log(rotate(nums3, k3));
// Expected Output: [3, 1, 2]

// Test Case 4
let nums4 = [1, 2, 3, 4];
let k4 = 4;
console.log(rotate(nums4, k4));
// Expected Output: [1, 2, 3, 4]

// Test Case 5
let nums5 = [1];
let k5 = 0;
console.log(rotate(nums5, k5));
// Expected Output: [1]
