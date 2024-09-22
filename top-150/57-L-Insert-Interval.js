console.clear();

function insertInterval(intervals, newInterval) {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0])
        result.push(intervals[i++]);

    while (i < intervals.length && intervals[i][0]<=newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length)
        result.push(intervals[i++]);

    return result;
}

// Test cases

// Test case 1: Insertion with merging overlapping intervals
console.log("Test Case 1:", insertInterval([[1, 3], [6, 9]], [2, 5]));
// Expected output: [[1,5], [6,9]]

// Test case 2: New interval overlaps multiple existing intervals
console.log("Test Case 2:", insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
// Expected output: [[1,2], [3,10], [12,16]]

// Test case 3: New interval does not overlap, goes at the beginning
console.log("Test Case 3:", insertInterval([[3, 5], [6, 8]], [1, 2]));
// Expected output: [[1,2], [3,5], [6,8]]

// Test case 4: New interval does not overlap, goes at the end
console.log("Test Case 4:", insertInterval([[1, 3], [4, 6]], [7, 8]));
// Expected output: [[1,3], [4,6], [7,8]]

// Test case 5: New interval completely covers all existing intervals
console.log("Test Case 5:", insertInterval([[2, 3], [4, 5], [6, 7]], [1, 8]));
// Expected output: [[1,8]]

// Test case 6: New interval fits exactly between two existing intervals without merging
console.log("Test Case 6:", insertInterval([[1, 2], [5, 6]], [3, 4]));
// Expected output: [[1,2], [3,4], [5,6]]

// Test case 7: New interval is already covered by an existing interval
console.log("Test Case 7:", insertInterval([[1, 5], [6, 9]], [2, 3]));
// Expected output: [[1,5], [6,9]]

// Test case 8: Empty intervals input
console.log("Test Case 8:", insertInterval([], [1, 5]));
// Expected output: [[1,5]]

// Test case 9: New interval touches but does not overlap
console.log("Test Case 9:", insertInterval([[1, 2], [4, 5]], [2, 4]));
// Expected output: [[1,5]]

// Test case 10: New interval is the same as one of the existing intervals
console.log("Test Case 10:", insertInterval([[1, 3], [6, 9]], [6, 9]));
// Expected output: [[1,3], [6,9]]
