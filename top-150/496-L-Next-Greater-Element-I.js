console.clear();

function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const map = new Map();
    
    for(let i=0; i<nums2.length; i++)
    {
        while(stack.length>0 && nums2[i]>nums2[stack[stack.length-1]])
            map.set(nums2[stack.pop()], nums2[i]);

        stack.push(i);
    }

    let NGE = new Array(nums1.length).fill(-1);

    for(let i=0; i<nums1.length; i++)
    {
        if(map.has(nums1[i]))
            NGE[i] = map.get(nums1[i]);
    }
    
    return NGE;
}


// Test cases

console.log('Test case 1', nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// Expected output: [-1, 3, -1]

console.log('Test case 2', nextGreaterElement([2, 4], [1, 2, 3, 4]));
// Expected output: [3, -1]

console.log('Test case 3', nextGreaterElement([3], [1, 3, 5, 4]));
// Expected output: [5]

console.log('Test case 4', nextGreaterElement([6, 8], [4, 5, 6, 7, 8]));
// Expected output: [7, -1]

console.log('Test case 5', nextGreaterElement([2, 5], [1, 2, 3, 4, 5]));
// Expected output: [3, -1]

console.log('Test case 6', nextGreaterElement([1, 7], [7, 1, 5, 3, 6]));
// Expected output: [5, -1]

console.log('Test case 7', nextGreaterElement([9], [9, 10, 11]));
// Expected output: [10]

console.log('Test case 8', nextGreaterElement([11], [10, 9, 11]));
// Expected output: [-1]

console.log('Test case 9', nextGreaterElement([4, 3], [1, 4, 3, 6]));
// Expected output: [6, 6]

console.log('Test case 10', nextGreaterElement([10], [1, 2, 3, 4, 5]));
// Expected output: [-1]
