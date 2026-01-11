function LinkedList(val) {
    this.head = new Node(val);
}

function Node(val) {
    this.node = val;
    this.next = null;
}

LinkedList.prototype.addNode = function (val) {
    //add your code here

    let current = this.head;
    while(current.next) {
        current = current.next;
    }
    current.next = new Node(val);
};

LinkedList.prototype.removeNode = function (val) {
    //add your code here
    let prev = null;
    let current = this.head;

    while(current.next) {
        if(current.node === val) {
                prev.next = current.next;
        }
        else {
            prev = current;
        }
        current = current.next;
    }
}

const list = new LinkedList(1);
list.addNode(2);
list.addNode(3);
list.removeNode(2);


console.log(JSON.stringify(list));

module.exports = {
    LinkedList,
};