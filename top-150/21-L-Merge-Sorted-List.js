console.clear();

function ListNode(val = undefined, next = null) {
    this.val = val;
    this.next = next;
}

var mergeTwoLists = function(list1, list2) {
    let l3 = new ListNode(0, null);
    let dummy = l3;

    while(list1!==null && list2!==null)
    {
        if(list1.val<list2.val)
        {
            l3.next = new ListNode(list1.val, null);
            list1 = list1.next;
        }
        else
        {
            l3.next = new ListNode(list2.val, null);
            list2 = list2.next;
        }
        l3 = l3.next;
    }

    while(list1!==null)
    {
        l3.next = new ListNode(list1.val, null);
        l3 = l3.next;
        list1 = list1.next;
    }

    while(list2!==null)
    {
        l3.next = new ListNode(list2.val, null);
        l3 = l3.next;
        list2 = list2.next;
    }

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

// Test case 1: list1 = [1,2,4], list2 = [1,3,4]
// Expected output: [1,1,2,3,4,4]
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
console.log("Test Case 1:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [1,1,2,3,4,4]

// Test case 2: list1 = [], list2 = []
// Expected output: []
list1 = createLinkedList([]);
list2 = createLinkedList([]);
console.log("Test Case 2:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: []

// Test case 3: list1 = [], list2 = [0]
// Expected output: [0]
list1 = createLinkedList([]);
list2 = createLinkedList([0]);
console.log("Test Case 3:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [0]

// Test case 4: list1 = [5,6,7], list2 = [1,2,3]
// Expected output: [1,2,3,5,6,7]
list1 = createLinkedList([5, 6, 7]);
list2 = createLinkedList([1, 2, 3]);
console.log("Test Case 4:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [1,2,3,5,6,7]

// Test case 5: list1 = [1,2], list2 = [3,4,5]
// Expected output: [1,2,3,4,5]
list1 = createLinkedList([1, 2]);
list2 = createLinkedList([3, 4, 5]);
console.log("Test Case 5:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [1,2,3,4,5]

// Test case 6: list1 = [10, 20, 30], list2 = [5, 25, 35]
// Expected output: [5, 10, 20, 25, 30, 35]
list1 = createLinkedList([10, 20, 30]);
list2 = createLinkedList([5, 25, 35]);
console.log("Test Case 6:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [5,10,20,25,30,35]

// Test case 7: list1 = [3, 7, 9], list2 = [2, 8]
// Expected output: [2, 3, 7, 8, 9]
list1 = createLinkedList([3, 7, 9]);
list2 = createLinkedList([2, 8]);
console.log("Test Case 7:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [2, 3, 7, 8, 9]

// Test case 8: list1 = [0,1,2], list2 = []
// Expected output: [0,1,2]
list1 = createLinkedList([0, 1, 2]);
list2 = createLinkedList([]);
console.log("Test Case 8:", linkedListToArray(mergeTwoLists(list1, list2)));
// Expected output: [0,1,2]
