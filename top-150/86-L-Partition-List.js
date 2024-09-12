var partition = function(head, x) {
    let newHead = new ListNode(0, null);
    let dummy = newHead;
  
    let t = head;
  
      while(t!==null)
      {
          if(t.val<x)
          {
              newHead.next = new ListNode(t.val, null);
              newHead = newHead.next;
          }
          t = t.next;
      }
  
      t = head
  
      while(t!==null)
      {
          if(t.val>=x)
          {
              newHead.next = new ListNode(t.val, null);
              newHead = newHead.next;
          }
          t = t.next;
      }
  
      return dummy.next;
  };