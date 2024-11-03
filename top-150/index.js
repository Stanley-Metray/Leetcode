console.clear();

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);

    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
    const result = [];

    let i = 0, j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j])
            result.push(leftArray[i++]);
        else
            result.push(rightArray[j++]);
    }

    while (i < leftArray.length)
        result.push(leftArray[i++]);

    while (j < rightArray.length)
        result.push(rightArray[j++]);

    return result;
}

// Test cases

// Test case 1: Basic case with unsorted array
console.log("Test Case 1:", mergeSort([3, 1, 4, 1, 5, 9]));
// Expected output: [1, 1, 3, 4, 5, 9]

// Test case 2: Already sorted array
console.log("Test Case 2:", mergeSort([1, 2, 3, 4, 5]));
// Expected output: [1, 2, 3, 4, 5]

// Test case 3: Array with duplicates
console.log("Test Case 3:", mergeSort([5, 3, 8, 3, 9, 1, 1]));
// Expected output: [1, 1, 3, 3, 5, 8, 9]

// Test case 4: Empty array
console.log("Test Case 4:", mergeSort([]));
// Expected output: []

// Test case 5: Array with one element
console.log("Test Case 5:", mergeSort([42]));
// Expected output: [42]

// Test case 6: Array with negative numbers
console.log("Test Case 6:", mergeSort([7, -5, 3, -1, 0]));
// Expected output: [-5, -1, 0, 3, 7]

// Test case 7: Array with all elements the same
console.log("Test Case 7:", mergeSort([2, 2, 2, 2, 2]));
// Expected output: [2, 2, 2, 2, 2]

// Test case 8: Array with floating point numbers
console.log("Test Case 8:", mergeSort([3.5, 1.2, 4.8, 2.0]));
// Expected output: [1.2, 2.0, 3.5, 4.8]

// Test case 9: Array with large numbers
console.log("Test Case 9:", mergeSort([1000000, 999999, 1000001]));
// Expected output: [999999, 1000000, 1000001]

// Test case 10: Array with positive and negative floating-point numbers
console.log("Test Case 10:", mergeSort([-2.5, 3.1, 0.5, -0.1]));
// Expected output: [-2.5, -0.1, 0.5, 3.1]
