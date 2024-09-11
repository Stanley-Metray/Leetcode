var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;
   let current = head;
   let length = 1;
   while (current.next !== null) {
       length++;
       current = current.next;
   }

   current.next = head;
   k = Math.floor(k % length);
   let t = head;
   for(let i=1; i<length-k; i++)
       t=t.next;

  let newHead = t.next;
  t.next=null;

  return newHead;

};