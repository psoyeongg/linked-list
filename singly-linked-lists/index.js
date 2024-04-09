class ListNode {
  /**
   * 단일 연결 리스트의 노드는 데이터와 포인터 총 2개의 요소를 가진다.
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  /**
   * 연결 리스트 클래스, 헤드 노드에 아무값도 전달하지 않으면 null로 초기화
   */
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) return;

    // 0번째에 삽입 시 해당 노드는 Head 에 넣고 기존 헤드는 Next에 넣는다.
    if (index === 0) {
      this.head = new ListNode(data, this.head);
      this.size++;
      return;
    }

    const node = new ListNode(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      // previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.insertAt(100, 0);
list.insertAt(200, 1);
list.insertAt(300, 2);
list.insertAt(400, 3);

list.removeAt(2);

console.log(list);
