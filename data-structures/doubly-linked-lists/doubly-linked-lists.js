function DoublyLinkedList() {
  this._length = 0
  this.head = null
  this.tail = null
}

function Node(data) {
  this.next = null
  this.previous = null
  this.data = data
}

DoublyLinkedList.prototype.add = function(add) {
  const node = new Node(value)

  if (this._length) {
    this.tail.next = node
    node.previous = this.tail
    this.tail = node
  } else {
    this.head = node
    this.tail = node
  }

  this._length++

  return node
}

DoublyLinkedList.prototype.remove = function(position) {}

DoublyLinkedList.prototype.find = function(position) {}

const list = new DoublyLinkedList()

list.add("Ewan")
list.add("Peter")
list.add("Valentine")

console.log(list.find(1).data)
