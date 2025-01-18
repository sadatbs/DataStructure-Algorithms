class LinkedListNode {
    data: number;
    next: LinkedListNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

const traverseLinkedList = (node: LinkedListNode | null): void => {
    while(node !== null) {
        console.log(node.data);
        node = node.next;
    }
}
/*
Basically there is 2 cases to insert a node
    1) Insert the node before the head node (beginning of the linked list)
        - that is the new node will be head node
        - the previous head node will be the 2nd node in the linked list
    2) General case - Insert node in the middle of the linked list (not the beginning or end of the linked list)
        - insert the node after traversing to the previous node of that position 
        - add the node as next node
        - add the next node of the previous node as next node of the previous node
*/
const insert = (data: number, head: LinkedListNode, position: number): LinkedListNode => {
    const newNode: LinkedListNode = new LinkedListNode(data);
    let previousNode = head;
    let currentNodeIndex = 0;

    //case -1
    if(position == 0) {
        newNode.next = head;
        return newNode;
    }

    while( previousNode.next !== null && currentNodeIndex < position - 1 ) {
        previousNode = previousNode.next;
        currentNodeIndex ++;
    }

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    return head;
}


export const buildLinkedList = () => {
    let head: LinkedListNode;
    const node1 = new LinkedListNode(10);
    const node2 = new LinkedListNode(20);
    const node3 = new LinkedListNode(30);

    head = node1;
    node1.next = node2;
    node2.next = node3;
    head = insert(40, head, 2);

    traverseLinkedList(head);
}
