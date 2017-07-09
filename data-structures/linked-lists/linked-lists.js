// Linked Lists

function LinkedList() {
  this.head = null
  this._length = 0
}

function Node(data) {
  this.data = data  
  this.next = null
}

/**
 * add 
 *
 * @param  {Any?} value
 * @return {Node}
 */
LinkedList.prototype.add = function(value) {

  // Create a new node
  const node = new Node(value)

  // Set the head (first node) as the current node
  let currentNode = this.head

  // If the current node is null
  if (!currentNode) {

    // Set the head to the new node
    this.head = node

    // Iterate the length
    this._length++

    // Return instance of new node
    return node
  }
  
  // While current node next is set, iterate
  while (currentNode.next) {

    // Set the current node to the next node to create 'space'
    // for the new node.
    currentNode = currentNode.next
  }

  // Then set the next node to the newly created node
  currentNode.next = node

  // Up the length
  this._length++

  return node
}

const list = new LinkedList()
list.add("Ewan")
list.add("Peter")
list.add("Valentine")

console.log(list)
