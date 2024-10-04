console.clear();

function findPeakElement(nums) {
    let left = 0, right = nums.length-1;

    if(nums.length===1) return 0;
    while(left<right)
    {
        let mid = Math.floor((left+right)/2);

        if((mid===0 || nums[mid]>nums[mid-1]) && (mid===nums.length-1 || nums[mid]>nums[mid+1]))
            return mid;

        if(nums[mid+1]>nums[mid])
            left = mid + 1;
        else
            right = mid - 1;
    }
    return left;
}


// Test cases

console.log('Test case 1', findPeakElement([1, 2, 3, 1]));
// Expected output: 2 (index of peak element 3)

console.log('Test case 2', findPeakElement([1, 2, 1, 3, 5, 6, 4]));
// Expected output: 1 or 5 (indices of peak elements 2 or 6)

console.log('Test case 3', findPeakElement([1, 3, 2]));
// Expected output: 1 (index of peak element 3)

console.log('Test case 4', findPeakElement([1, 2, 3, 4, 5]));
// Expected output: 4 (index of peak element 5)

console.log('Test case 5', findPeakElement([5, 4, 3, 2, 1]));
// Expected output: 0 (index of peak element 5)

console.log('Test case 6', findPeakElement([1]));
// Expected output: 0 (index of single element 1)

console.log('Test case 7', findPeakElement([1, 2]));
// Expected output: 1 (index of peak element 2)

console.log('Test case 8', findPeakElement([2, 1]));
// Expected output: 0 (index of peak element 2)

console.log('Test case 9', findPeakElement([1, 2, 3, 2, 1, 0, -1]));
// Expected output: 2 (index of peak element 3)

console.log('Test case 10', findPeakElement([1, 0, 0, 0, 1]));
// Expected output: 0 or 4 (indices of peak elements 1)
