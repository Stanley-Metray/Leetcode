// implementation of linked list 

console.clear();
function ListNode(val = undefined, next = null) {
    this.val = val;
    this.next = next;
}

let head = null;

// insertion at begining

function insertAtStart(val) {
    if (head === null)
        head = new ListNode(val, null);
    else {
        let t = head;
        head = new ListNode(val, t);
    }
}

// insertion at end

function insertAtEnd(val) {
    if (head === null)
        head = new ListNode(val, null);
    else {
        let t = head;
        while (t.next !== null)
            t = t.next;

        t.next = new ListNode(val, null);
    }
}

// insert before 

function insertBefore(findVal, val) {
    if (head === null)
        return console.log("List is Empty");

    let t = head;

    while (t.next !== null) {
        if (t.next.val === findVal) {
            let node = new ListNode(val);

            let temp = t.next;
            t.next = node;
            node.next = temp;
            break;
        }
        t = t.next;
    }
}

// insert after 

function insertAfter(findVal, val) {
    if (head === null)
        return console.log("List is Empty");

    let t = head;
    while (t !== null) {
        if (t.val === findVal) {
            let node = new ListNode(val);

            let temp = t.next;
            t.next = node;
            node.next = temp;
            break;
        }
        t = t.next;
    }
}

// delete at Start 

function deleteAtStart() {
    if (head === null)
        return console.log("List is Empty");
    head = head.next;
}

// delete at End 

function deleteAtEnd() {
    if (head === null)
        return console.log("List is Empty");
    else if (head.next === null)
        head = null;
    else {
        let t = head;
        while (t.next !== null) {
            if (t.next.next === null) {
                t.next = null;
                break;
            }
            t = t.next;
        }
    }
}


// delete Before 

function deleteBefore(findVal) {
    if (head === null)
        return console.log("List is Empty");
    else if (head.next !== null && head.next.val === findVal)
        head = head.next;
    else {
        let t = head;

        while (t !== null && t.next !== null && t.next.next !== null) {
            if (t.next.next.val === findVal) {
                t.next = t.next.next;
                return;
            }
            t = t.next;
        }
    }
}

insertAtStart(10);
insertAtEnd(20);
insertAtStart(5);
insertAtEnd(30);
insertAtEnd(40);
insertBefore(30, 100);
insertBefore(100, 200);
insertAfter(100, 300);
insertAfter(5, 600);
// deleteAtStart();
// deleteAtEnd();
// deleteBefore(200);
// deleteBefore(40);

function printList(head) {
    let t = head;
    let str = '';
    while (t !== null) {
        str += `${t.val}, `;
        t = t.next;
    }
    console.log(str);
}


printList(head);

