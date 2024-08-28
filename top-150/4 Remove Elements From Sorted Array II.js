console.clear();

function removeDuplicates(nums) {
    let k = 1;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            count++;
        else
            count = 1;

        if (count <= 2)
            nums[k++] = nums[i];
    }

    return k;
}

// Test Case 1
let nums1 = [1, 1, 1, 2, 2, 3];
let k1 = removeDuplicates(nums1);
console.log(k1); // Expected output: 5
console.log(nums1.slice(0, k1)); // Expected output: [1, 1, 2, 2, 3]

// Test Case 2
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k2 = removeDuplicates(nums2);
console.log(k2); // Expected output: 7
console.log(nums2.slice(0, k2)); // Expected output: [0, 0, 1, 1, 2, 3, 3]

// Test Case 3
let nums3 = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let k3 = removeDuplicates(nums3);
console.log(k3); // Expected output: 8
console.log(nums3.slice(0, k3)); // Expected output: [1, 1, 2, 2, 3, 3, 4, 4]

// Test Case 4
let nums4 = [1];
let k4 = removeDuplicates(nums4);
console.log(k4); // Expected output: 1
console.log(nums4.slice(0, k4)); // Expected output: [1]

// Test Case 5
let nums5 = [];
let k5 = removeDuplicates(nums5);
console.log(k5); // Expected output: 0
console.log(nums5.slice(0, k5)); // Expected output: []


/*

Logic:

The idea is to go through each number in the array and compare it with the previous number. If the current number is the same as the previous one, we increase a count that keeps track of how many times this number has appeared in a row. If a new number appears, we reset the count to 1. We only allow a number to appear up to two times in the array.
How to Achieve This?

    Declare Variables:
        let k = 1;
            This k will point to the position where we want to place the next valid element in the array. It starts at 1 because the first element is always valid.
        let count = 1;
            This count starts at 1, representing the first element in the array (nums[0]).

    Start a Loop:
        Begin the loop from the second element (i = 1) and go through each element until the end of the array.

    Inside the Loop:
        Compare Current and Previous Element:
            If nums[i] === nums[i-1], it means the current number is the same as the previous one, so increase the count by 1.
            If nums[i] !== nums[i-1], it means a new number is found, so reset count to 1.
        Check the Count:
            If the count is less than or equal to 2, it means the number can still be part of the result, so we place it in the array at the position k, and then move k to the next position by incrementing it by 1.

    Finish:
        The loop will continue until all elements are processed.
        Finally, the value of k will be the length of the modified array, and nums will contain the result up to k positions.

*/
