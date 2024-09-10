var copyRandomList = function (head) {
    let temp = head;

     if (head === null) {
        return null;  
    }

    while (temp !== null) {
        let newNode = new _Node(temp.val);
        let currNode = temp;
        newNode.next = currNode.next;
        currNode.next = newNode;
        temp = newNode.next;
    }

    temp = head;

    while(temp!==null)
    {
        if(temp.random!==null)
        {
            temp.next.random = temp.random.next;
        }
        temp = temp.next.next;
    }

    temp = head;
    let newHead = temp.next;

    while(temp!==null)
    {
        let org = temp;
        let deep = org.next;
        org.next = deep.next;

        if(org===null || org.next===null)
            deep.next = null;
        else
            deep.next = org.next.next;
        temp = org.next;
    }

    return newHead;
};