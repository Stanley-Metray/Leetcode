function ListNode(val = undefined, next = null) {
    this.val = val;
    this.next = next;
}

function hasCycle(head) {
    let tortoise = head;
    let hare = head;

    if(head===null || head.next===null)
        return false;

    while(hare!==null && hare.next!==null)
    {
        tortoise = tortoise.next;
        hare = hare.next.next;
        
        if(tortoise===hare)
            return true;
    }

    return false;
}


// Test cases

// Test case 1: Cycle exists, tail connects to node at index 1
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // cycle here

console.log("Test Case 1:", hasCycle(node1));
// Expected output: true
// Explanation: The tail connects to node at index 1, forming a cycle.

// Test case 2: Cycle exists, tail connects to node at index 0
let nodeA = new ListNode(1);
let nodeB = new ListNode(2);
nodeA.next = nodeB;
nodeB.next = nodeA; // cycle here

console.log("Test Case 2:", hasCycle(nodeA));
// Expected output: true
// Explanation: The tail connects to the head node, forming a cycle.

// Test case 3: No cycle, single node
let singleNode = new ListNode(1);

console.log("Test Case 3:", hasCycle(singleNode));
// Expected output: false
// Explanation: There's only one node, and it doesn't form a cycle.

// Test case 4: Empty linked list
console.log("Test Case 4:", hasCycle(null));
// Expected output: false
// Explanation: The list is empty, so no cycle exists.

// Test case 5: No cycle, multiple nodes
let nodeX = new ListNode(1); 
let nodeY = new ListNode(2);
nodeX.next = nodeY;

console.log("Test Case 5:", hasCycle(nodeX));
// Expected output: false
// Explanation: The nodes form a linear list with no cycle.

// Test case 6: Cycle exists, tail connects to node at index 3
let nodeM = new ListNode(1);
let nodeN = new ListNode(2);
let nodeO = new ListNode(3);
let nodeP = new ListNode(4);
nodeM.next = nodeN;
nodeN.next = nodeO;
nodeO.next = nodeP;
nodeP.next = nodeO; // cycle here

console.log("Test Case 6:", hasCycle(nodeM));
// Expected output: true
// Explanation: The tail connects to node at index 3, forming a cycle.
