
console.clear();

function ListNode(val = undefined, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function (l1, l2){
    let l3 = new ListNode(0);
    let dummy = l3;
    let carry = 0;

    while(l1!==null || l2!==null)
    {
        let sum = 0+carry;

        if(l1!==null)
        {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2!==null)
        {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum/10);
        l3.next = new ListNode(Math.floor(sum%10), null);
        l3 = l3.next;
    }

    if(carry===1) l3.next = new ListNode(carry, null);

    return dummy.next;
}

// Test cases

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array (for easy comparison of output)
function linkedListToArray(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

// Test case 1: l1 = [2,4,3], l2 = [5,6,4]
// Expected output: [7,0,8] (342 + 465 = 807)
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
console.log("Test Case 1:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [7,0,8]

// Test case 2: l1 = [0], l2 = [0]
// Expected output: [0] (0 + 0 = 0)
l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
console.log("Test Case 2:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [0]

// Test case 3: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Expected output: [8,9,9,9,0,0,0,1] (9999999 + 9999 = 10009998)
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
console.log("Test Case 3:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [8,9,9,9,0,0,0,1]

// Test case 4: l1 = [1,0,0,0,0,0,1], l2 = [5,6,4]
// Expected output: [6,6,4,0,0,0,1]
l1 = createLinkedList([1, 0, 0, 0, 0, 0, 1]);
l2 = createLinkedList([5, 6, 4]);
console.log("Test Case 4:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [6,6,4,0,0,0,1]

// Test case 5: l1 = [9], l2 = [1]
// Expected output: [0,1] (9 + 1 = 10)
l1 = createLinkedList([9]);
l2 = createLinkedList([1]);
console.log("Test Case 5:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [0,1]

// Test case 6: l1 = [0], l2 = [7, 3]
// Expected output: [7, 3] (0 + 37 = 37)
l1 = createLinkedList([0]);
l2 = createLinkedList([7, 3]);
console.log("Test Case 6:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [7,3]

// Test case 7: l1 = [5,6], l2 = [5,4,9]
// Expected output: [0,1,0,1] (65 + 945 = 1010)
l1 = createLinkedList([5, 6]);
l2 = createLinkedList([5, 4, 9]);
console.log("Test Case 7:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [0,1,0,1]

// Test case 8: l1 = [2,4], l2 = [8,9,9,9]
// Expected output: [0,4,0,0,1] (42 + 9998 = 10040)
l1 = createLinkedList([2, 4]);
l2 = createLinkedList([8, 9, 9, 9]);
console.log("Test Case 8:", linkedListToArray(addTwoNumbers(l1, l2)));
// Expected output: [0,4,0,0,1]
