console.clear();

var nextGreaterElements = function (nums) {
    const NGE = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums.length * 2; i++) {
        let currentIndex = Math.floor(i % nums.length);
        while (stack.length > 0 && nums[currentIndex] > nums[stack[stack.length - 1]])
            NGE[stack.pop()] = nums[currentIndex];

        if (i < nums.length)
            stack.push(i);
    }
    return NGE;
};

// Test cases

console.log('Test case 1', nextGreaterElements([1, 2, 1]));
// Expected output: [2, -1, 2]

console.log('Test case 2', nextGreaterElements([1, 2, 3, 4, 3]));
// Expected output: [2, 3, 4, -1, 4]

console.log('Test case 3', nextGreaterElements([5, 4, 3, 2, 1]));
// Expected output: [-1, 5, 5, 5, 5]

console.log('Test case 4', nextGreaterElements([2, 1, 2, 4, 3]));
// Expected output: [4, 2, 4, -1, 4]

console.log('Test case 5', nextGreaterElements([3, 8, 4, 1, 2]));
// Expected output: [8, -1, 8, 2, 3]

console.log('Test case 6', nextGreaterElements([1, 1, 1]));
// Expected output: [-1, -1, -1]

console.log('Test case 7', nextGreaterElements([10, 9, 8, 7, 6]));
// Expected output: [-1, 10, 10, 10, 10]

console.log('Test case 8', nextGreaterElements([7, 5, 6, 5, 7]));
// Expected output: [ -1, 6, 7, 7, -1 ]

console.log('Test case 9', nextGreaterElements([4, 3, 2, 1, 5]));
// Expected output: [5, 5, 5, 5, -1]

console.log('Test case 10', nextGreaterElements([2]));
// Expected output: [-1]
