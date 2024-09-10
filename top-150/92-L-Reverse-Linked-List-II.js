console.clear();

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}


var reverseBetween = function(head, left, right) {
    let list = new ListNode(0, head);
    let dummy = list;

    if(head===null || head.next===null) return head;
    
    for(let i=1; i<left; i++)
        list = list.next;

    let subStart = list.next;
    let curr = subStart;
    prev = null;
    while(left<=right)
    {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        left++;
    }

    list.next = prev;
    subStart.next = curr;
    
    return dummy.next;

};

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

// Test case 1: head = [1,2,3,4,5], left = 2, right = 4
// Expected output: [1,4,3,2,5] (reversing nodes from position 2 to 4)
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let result1 = reverseBetween(list1, 2, 4);
console.log("Test Case 1:", linkedListToArray(result1));
// Expected output: [1,4,3,2,5]

// Test case 2: head = [5], left = 1, right = 1
// Expected output: [5] (single node, so the list remains unchanged)
let list2 = createLinkedList([5]);
let result2 = reverseBetween(list2, 1, 1);
console.log("Test Case 2:", linkedListToArray(result2));
// Expected output: [5]

// Test case 3: head = [1,2,3,4,5,6,7], left = 3, right = 6
// Expected output: [1,2,7,6,5,4,3] (reversing nodes from position 3 to 6)
let list3 = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
let result3 = reverseBetween(list3, 3, 6);
console.log("Test Case 3:", linkedListToArray(result3));
// Expected output: [1,2,7,6,5,4,3]

// Test case 4: head = [1,2,3,4,5,6], left = 1, right = 3
// Expected output: [3,2,1,4,5,6] (reversing nodes from position 1 to 3)
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let result4 = reverseBetween(list4, 1, 3);
console.log("Test Case 4:", linkedListToArray(result4));
// Expected output: [3,2,1,4,5,6]

// Test case 5: head = [1,2,3,4,5], left = 1, right = 5
// Expected output: [5,4,3,2,1] (reversing the entire list)
let list5 = createLinkedList([1, 2, 3, 4, 5]);
let result5 = reverseBetween(list5, 1, 5);
console.log("Test Case 5:", linkedListToArray(result5));
// Expected output: [5,4,3,2,1]

// Test case 6: head = [1,2,3,4,5,6,7,8,9], left = 4, right = 8
// Expected output: [1,2,3,8,7,6,5,4,9] (reversing nodes from position 4 to 8)
let list6 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let result6 = reverseBetween(list6, 4, 8);
console.log("Test Case 6:", linkedListToArray(result6));
// Expected output: [1,2,3,8,7,6,5,4,9]
