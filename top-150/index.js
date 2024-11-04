console.clear();

function mergeSort(arr) {
    if(arr.length<2) return arr;

    let mid = Math.floor(arr.length/2);

    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
    let i = 0, j = 0, result = [];

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

// Test Case 1: Array with positive integers
let arr = [4, 3, 2, 1];
console.log("Test Case 1:", mergeSort(arr)); // Expected Output: [1, 2, 3, 4]

// Test Case 2: Already sorted array
arr = [1, 2, 3, 4, 5];
console.log("Test Case 2:", mergeSort(arr)); // Expected Output: [1, 2, 3, 4, 5]

// Test Case 3: Array with duplicates
arr = [3, 5, 3, 2, 2];
console.log("Test Case 3:", mergeSort(arr)); // Expected Output: [2, 2, 3, 3, 5]

// Test Case 4: Array with negative numbers
arr = [-1, -3, -2, 0, 2];
console.log("Test Case 4:", mergeSort(arr)); // Expected Output: [-3, -2, -1, 0, 2]

// Test Case 5: Array with single element
arr = [5];
console.log("Test Case 5:", mergeSort(arr)); // Expected Output: [5]

// Test Case 6: Array with all elements equal
arr = [7, 7, 7, 7, 7];
console.log("Test Case 6:", mergeSort(arr)); // Expected Output: [7, 7, 7, 7, 7]

// Test Case 7: Array with a large number of elements
arr = [100, 50, 75, 25, 90];
console.log("Test Case 7:", mergeSort(arr)); // Expected Output: [25, 50, 75, 90, 100]

// Test Case 8: Array with only two elements
arr = [10, 1];
console.log("Test Case 8:", mergeSort(arr)); // Expected Output: [1, 10]

// Test Case 9: Array with negative and positive integers
arr = [-5, -2, 0, 3, 8, -1];
console.log("Test Case 9:", mergeSort(arr)); // Expected Output: [-5, -2, -1, 0, 3, 8]

// Test Case 10: Empty array
arr = [];
console.log("Test Case 10:", mergeSort(arr)); // Expected Output: []
