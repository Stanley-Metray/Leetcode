console.clear();

var majorityElement = function(nums) {
    let map = new Map();

    for(let i=0; i<nums.length; i++)
    {
        if(map.has(nums[i]))
            map.set(nums[i], map.get(nums[i])+1);
        else
            map.set(nums[i], 1);
    }

    for(let i=0; i<nums.length; i++)
    {
        if(map.get(nums[i])>(nums.length/2))
            return nums[i];
    }

    return 0;
};


// Test Case 1: Basic example with a clear majority element
let nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Expected output: 3

// Test Case 2: Majority element in a longer array
let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Expected output: 2

// Test Case 3: All elements are the same
let nums3 = [5, 5, 5, 5, 5];
console.log(majorityElement(nums3)); // Expected output: 5

// Test Case 4: Majority element is the first element
let nums4 = [7, 7, 7, 8, 8];
console.log(majorityElement(nums4)); // Expected output: 7

// Test Case 5: Majority element is the last element
let nums5 = [10, 10, 10, 10, 10, 20, 20, 20];
console.log(majorityElement(nums5)); // Expected output: 10

// Test Case 6: Array with only one element
let nums6 = [1];
console.log(majorityElement(nums6)); // Expected output: 1
