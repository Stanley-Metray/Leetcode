var deleteDuplicates = function (head) {
    let p = new ListNode(-1, head);
    let p1 = p;
    let p2 = head;

    while (p2 !== null) {
        if (p2.next !== null && p2.val === p2.next.val) {
            while (p2.next !== null && p2.val === p2.next.val) {
                p2 = p2.next;
            }
            p2 = p2.next;
            p1.next = p2;
        } else {
            p1 = p1.next;
            p2 = p2.next;
        }
    }

    return p.next;
};