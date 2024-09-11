var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1);

    dummy.next = head;

    let first = dummy;
    let second = dummy;

    for(let i=0; i<n; i++)
        second = second.next;

    while(second.next!==null)
    {
        first = first.next;
        second = second.next;
    }

    first.next = first.next.next;

    return dummy.next;
};