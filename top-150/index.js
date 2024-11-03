console.clear();

function insertionSort(arr) {
    let i,j,temp;

    for(i=1; i<arr.length; i++)
    {
        temp = arr[i];

        for(j=i-1; j>=0 && temp<=arr[j]; j--)
        {
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

// Test Case 1: Array with positive integers
let arr = [4, 3, 2, 1];
console.log("Test Case 1:", insertionSort(arr)); // Expected Output: [1, 2, 3, 4]

// Test Case 2: Already sorted array
arr = [1, 2, 3, 4, 5];
console.log("Test Case 2:", insertionSort(arr)); // Expected Output: [1, 2, 3, 4, 5]

// Test Case 3: Array with duplicates
arr = [3, 5, 3, 2, 2];
console.log("Test Case 3:", insertionSort(arr)); // Expected Output: [2, 2, 3, 3, 5]

// Test Case 4: Array with negative numbers
arr = [-1, -3, -2, 0, 2];
console.log("Test Case 4:", insertionSort(arr)); // Expected Output: [-3, -2, -1, 0, 2]

// Test Case 5: Array with single element
arr = [5];
console.log("Test Case 5:", insertionSort(arr)); // Expected Output: [5]

// Test Case 6: Array with all elements equal
arr = [7, 7, 7, 7, 7];
console.log("Test Case 6:", insertionSort(arr)); // Expected Output: [7, 7, 7, 7, 7]

// Test Case 7: Array with a large number of elements
arr = [100, 50, 75, 25, 90];
console.log("Test Case 7:", insertionSort(arr)); // Expected Output: [25, 50, 75, 90, 100]

// Test Case 8: Array with only two elements
arr = [10, 1];
console.log("Test Case 8:", insertionSort(arr)); // Expected Output: [1, 10]

// Test Case 9: Array with negative and positive integers
arr = [-5, -2, 0, 3, 8, -1];
console.log("Test Case 9:", insertionSort(arr)); // Expected Output: [-5, -2, -1, 0, 3, 8]

// Test Case 10: Empty array
arr = [];
console.log("Test Case 10:", insertionSort(arr)); // Expected Output: []
