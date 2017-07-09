// Linked Lists

function LinkedList() {
  this.head = null
  this._length = 0
}

function Node(data) {
  this.data = data  
  this.next = null
}

LinkedList.prototype.add = function(value) {
  const node = new Node(value)
  let currentNode = this.head

  if (!currentNode) {
    this.head = node
    this._length++

    return node
  }
  
  while (currentNode.next) {
    currentNode = currentNode.next
  }

  currentNode.next = node

  this._length++

  return node
}

const list = new LinkedList()
list.add("Ewan")
list.add("Peter")
list.add("Valentine")

console.log(list)
