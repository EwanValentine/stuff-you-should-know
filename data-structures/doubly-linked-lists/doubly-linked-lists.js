// Linked Lists

function LinkedList() {
  this.head = null
}


LinkedLists.prototype.add = value => {
  const node = {
    value,
    next: null,
  }

  // If there is no head set
  // then set the new node as the head.
  if (!this.head) {
    this.head = node
    return
  }

  let current = this.head
  while (current.next) {
    current = current.next
  }
  
  current.next = node
}

const list = new LinkedList()
list.add("Ewan")
list.add("Peter")
list.add("Valentine")

console.log(list)
