console.clear();

var canJump = function(nums) {
    let flag = nums.length-1;

    for(let i=nums.length-2; i>=0; i--)
    {
        if(nums[i]+i>=flag)
            flag = i;
    }
    return flag===0;
};


// Test Case 1
console.log(canJump([2, 3, 1, 1, 4])); // Expected output: true

// Test Case 2
console.log(canJump([3, 2, 1, 0, 4])); // Expected output: false

// Test Case 3: Minimal input with only one element
console.log(canJump([0])); // Expected output: true

// Test Case 4: No jumps possible after first step
console.log(canJump([1, 0, 0, 0, 0])); // Expected output: false

// Test Case 5: All elements are 1
console.log(canJump([1, 1, 1, 1, 1])); // Expected output: true

// Test Case 6: Large jump in the middle of the array
console.log(canJump([1, 2, 3, 4, 0, 0, 0, 10])); // Expected output: true

// Test Case 7: Large zero in the middle that cannot be bypassed
console.log(canJump([2, 0, 0, 0, 0, 0, 1])); // Expected output: false

// Test Case 8: Array where every position allows reaching the end
console.log(canJump([4, 2, 0, 0, 1, 0])); // Expected output: true

