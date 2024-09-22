console.clear();

function summaryRanges(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i;

        while ((nums[i] + 1) === nums[i + 1])
            i++;

        if (j === i)
            result.push(`${nums[i]}`)
        else
            result.push(`${nums[j]}->${nums[i]}`);
    }
    return result;
}

// Test cases

console.log('Test case 1', summaryRanges([0, 1, 2, 4, 5, 7]));
// Expected output: ["0->2", "4->5", "7"]

console.log('Test case 2', summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// Expected output: ["0", "2->4", "6", "8->9"]

console.log('Test case 3', summaryRanges([]));
// Expected output: []

console.log('Test case 4', summaryRanges([1]));
// Expected output: ["1"]

console.log('Test case 5', summaryRanges([1, 2]));
// Expected output: ["1->2"]

console.log('Test case 6', summaryRanges([1, 3, 5, 7, 9]));
// Expected output: ["1", "3", "5", "7", "9"]

console.log('Test case 7', summaryRanges([-3, -2, -1, 1, 2, 3]));
// Expected output: ["-3->-1", "1->3"]

console.log('Test case 8', summaryRanges([-5, -4, -2, 0, 2, 3, 5]));
// Expected output: ["-5->-4", "-2", "0", "2->3", "5"]

console.log('Test case 9', summaryRanges([10, 11, 12, 14, 16, 17]));
// Expected output: ["10->12", "14", "16->17"]

console.log('Test case 10', summaryRanges([0, 1, 2, 50, 75]));
// Expected output: ["0->2", "50", "75"]
